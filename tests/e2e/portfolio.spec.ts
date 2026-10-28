import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("catálogo, filtros combinados, busca e Stack", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Automação,",
  );
  const grid = page.locator("#projetos .project-grid");
  await expect(grid.locator(".project-item")).toHaveCount(39);
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "Python", exact: true }),
  ).toHaveCount(1);
  await page.getByRole("button", { name: "Python", exact: true }).click();
  await expect(grid.locator(".project-item")).toHaveCount(11);
  await page
    .getByRole("group", { name: "Filtrar por categoria" })
    .getByRole("button", { name: "Power Apps", exact: true })
    .click();
  await expect(grid.locator(".project-item")).toHaveCount(5);
  await page
    .getByRole("group", { name: "Filtrar por contexto" })
    .getByRole("button", { name: "Pessoais", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Nenhum projeto encontrado" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Limpar filtros", exact: true })
    .last()
    .click();
  await expect(grid.locator(".project-item")).toHaveCount(39);
  await page
    .getByRole("searchbox", { name: "Buscar projetos" })
    .fill("recrutamento");
  await expect(grid.locator(".project-item")).toHaveCount(1);
  await expect(grid).toContainText("Recrutamento inteligente");
  await page
    .getByRole("button", { name: /SQL 1 projeto — filtrar catálogo/ })
    .click();
  await expect(grid.locator(".project-item")).toHaveCount(1);
  await expect(grid).toContainText("BI Executivo");
  await expect(page.locator(".terminal-code")).toContainText(
    "tecnologia = 'SQL'",
  );
  await expect(page.locator(".terminal-code")).toBeInViewport();
  await page.locator("#sobre").scrollIntoViewIfNeeded();
  await expect
    .poll(() =>
      page.locator(".about-intro h2").evaluate((heading) => {
        const masks = [...heading.querySelectorAll<HTMLElement>("div")].filter(
          (node) => getComputedStyle(node).overflow === "clip",
        );
        return masks.every((mask) => {
          const line = mask.firstElementChild;
          if (!line) return false;
          return (
            line.getBoundingClientRect().bottom <=
            mask.getBoundingClientRect().bottom + 1
          );
        });
      }),
    )
    .toBe(true);
  await expect(
    page.getByRole("button", { name: /Limpar filtros/ }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("log inicial termina mesmo ao pausar e não reaparece na sessão", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".boot-log")).toBeAttached();
  await page
    .getByRole("button", { name: "Pausar animações", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Retomar animações", exact: true })
    .click();
  await expect(page.locator(".boot-log")).toHaveCount(0);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "on");
  await expect(page.locator(".boot-log")).toHaveCount(0);
});
test("card abre detalhe imediatamente, mantém contexto ao voltar e oculta blocos ausentes", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("searchbox").fill("Bolão");
  await page
    .getByRole("link", {
      name: "Ver projeto: Bolão da Copa do Mundo 2026",
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/\/projeto\/bolao-copa-2026$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Bolão da Copa do Mundo 2026",
  );
  await expect(page.locator("#tecnologias")).toBeVisible();
  await expect(page.locator("#aprendizado")).toHaveCount(0);
  await expect(page.locator("#problema")).toBeVisible();
  await expect(page.locator(".departure-preview")).toHaveCount(0);
  await page.goBack();
  await expect(page.getByRole("searchbox")).toHaveValue("Bolão");
});
test("modal Power BI é criado no clique, prende foco e desmonta no Escape", async ({
  page,
}) => {
  await page.route("https://app.powerbi.com/**", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<html><body>Relatório isolado para teste da interface</body></html>",
    }),
  );
  await page.goto("/");
  await expect(page.locator("iframe")).toHaveCount(0);
  const open = page.getByRole("button", {
    name: "Abrir dashboard : DEMO - Turnover",
    exact: true,
  });
  await open.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.locator("iframe")).toHaveCount(1);
  await expect(
    dialog.getByText("Dados fictícios", { exact: true }),
  ).toBeVisible();
  await expect(
    dialog.getByRole("button", { name: "Fechar dashboard" }),
  ).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect
    .poll(() =>
      page.evaluate(() => !!document.activeElement?.closest("dialog")),
    )
    .toBe(true);
  const axe = await new AxeBuilder({ page }).include("dialog").analyze();
  expect(
    axe.violations.filter((v) =>
      ["critical", "serious"].includes(v.impact ?? ""),
    ),
  ).toEqual([]);
  await page.keyboard.press("Escape");
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(open).toBeFocused();
});
test("contato copia e-mail e teclado alcança conteúdo", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Pular para o conteúdo" }),
  ).toBeFocused();
  await page
    .getByRole("button", { name: "Copiar e-mail", exact: true })
    .click();
  await expect(
    page.getByRole("status").filter({ hasText: "E-mail copiado!" }),
  ).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "kauanotavares123@gmail.com",
  );
});
test("reduced motion e controle de pausa preservam conteúdo sem canvas", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "off");
  await expect(page.locator("canvas")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("#projetos .project-item")).toHaveCount(39);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page
    .getByRole("button", { name: "Pausar animações", exact: true })
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-motion", "off");
  await expect(page.locator("canvas")).toHaveCount(0);
});

test("desktop carrega a cena e o SVG permanece disponível se WebGL falhar", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
      value: function (
        this: HTMLCanvasElement,
        type: string,
        ...args: unknown[]
      ) {
        if (type.includes("webgl")) {
          document.documentElement.dataset.webglAttempted = "true";
          return null;
        }
        return Reflect.apply(original, this, [type, ...args]);
      },
    });
  });
  await page.goto("/");
  await expect(page.locator(".network-canvas")).toBeAttached();
  await expect(page.locator("html")).toHaveAttribute(
    "data-webgl-attempted",
    "true",
  );
  await expect(page.locator(".network-svg")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Ver projetos", exact: true }).click();
  await expect(page.locator("#projetos")).toBeVisible();
});
test("mobile com touch usa SVG, menu e pipeline vertical, sem overflow", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("canvas")).toHaveCount(0);
  await page.getByRole("button", { name: "Abrir menu", exact: true }).click();
  await expect(
    page
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Projetos", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Projetos", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Abrir menu", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  expect(
    await page
      .locator(".pipeline")
      .first()
      .evaluate((e) => getComputedStyle(e).flexDirection),
  ).toBe("column");
  await page.screenshot({ path: ".reports/mobile.png", fullPage: true });
  await context.close();
});
test("HTML sem JavaScript contém catálogo e narrativa", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("#projetos .project-item")).toHaveCount(39);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.goto("/projeto/bi-executivo-orcamento-desvios");
  await expect(page.locator("#problema")).toBeVisible();
  await expect(page.locator("iframe")).toHaveCount(0);
  await context.close();
});
test("acessibilidade da home e detalhes, metadata e rota inexistente", async ({
  page,
  request,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const path of [
    "/",
    "/projeto/viagem-automatizada",
    "/projeto/demo-turnover",
    "/projeto/sonora-inteligencia-vocal",
    "/projeto/coleta-pracas-pedagio",
  ]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.filter((v) =>
        ["critical", "serious"].includes(v.impact ?? ""),
      ),
    ).toEqual([]);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    await expect(page.locator("iframe")).toHaveCount(0);
  }
  const image = await request.get("/opengraph-image");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  const missing = await request.get("/projeto/inexistente");
  expect(missing.status()).toBe(404);
});

test("destaques genéricos, tecnologias resumidas e detalhes dos novos cases", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const destaques = page.locator(".featured-case");
  await expect(destaques).toHaveCount(3);
  await expect(destaques.nth(0).locator("h3")).toContainText("Viagem");
  await expect(destaques.nth(1).locator("h3")).toContainText("Sonora");
  await expect(destaques.nth(1).locator(".eyebrow")).toHaveText(
    "Web / Pessoal",
  );
  await expect(destaques.nth(2).locator("h3")).toContainText("projetos");
  await expect(destaques.nth(2).locator(".eyebrow")).toHaveText(
    "Web / Corporativo",
  );
  await expect(page.locator(".dashboard-gallery article")).toHaveCount(8);
  await page.getByRole("searchbox").fill("Sonora");
  const card = page.locator("#projetos .project-card");
  await expect(card).toHaveCount(1);
  await expect(card.locator(".tech-tags li:not(.tech-overflow)")).toHaveCount(
    4,
  );
  await expect(card.locator(".tech-overflow")).toHaveText("+3");
  await card.getByRole("link").click();
  await expect(page).toHaveURL(/sonora-inteligencia-vocal$/);
  await expect(page.getByText("Sonora Voice", { exact: true })).toBeVisible();
  await expect(page.getByText("Sonora Scribe", { exact: true })).toBeVisible();
  await expect(page.locator("#tecnologias")).toContainText("Whisper Large V3");
  await expect(page.locator("iframe")).toHaveCount(0);
  await page.goBack();
  await expect(page.getByRole("searchbox")).toHaveValue("Sonora");
  await page.goForward();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Sonora");
  await page.goto("/projeto/portal-indicadores");
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: /Abrir dashboard/ }),
  ).toHaveCount(0);
});
