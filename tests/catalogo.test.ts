import test from "node:test";
import assert from "node:assert/strict";
import {
  todosProjetos,
  getDestaques,
  publicados,
  metricasCatalogo,
  tecnologiaContagens,
} from "../src/lib/catalogo";
import {
  filtrarProjetos,
  filtrosIniciais,
  queryFiltros,
} from "../src/lib/filtros";
import {
  extrairPendencias,
  renderPendencias,
  validarProjetos,
  powerBiUrlValida,
} from "../src/lib/validacao";
import type { Projeto } from "../src/content/tipos";

test("catálogo aprovado tem 39 publicações, oito demos e contagens derivadas", () => {
  assert.deepEqual(metricasCatalogo(), {
    projetos: 39,
    dashboards: 8,
    automacoes: 13,
    tecnologias: 65,
  });
  assert.equal(validarProjetos(todosProjetos).erros.length, 0);
  assert.equal(
    todosProjetos.filter((p) => p.destaque)[0].slug,
    "viagem-automatizada",
  );
  assert.equal(
    todosProjetos
      .filter((p) => p.powerBiUrl)
      .every((p) => p.contexto === "pessoal"),
    true,
  );
});
test("rascunhos não entram nas contagens nem na lista pública", () => {
  const draft: Projeto = {
    ...todosProjetos[0],
    slug: "rascunho",
    status: "rascunho",
    tecnologias: ["Python"],
  };
  assert.equal(publicados([draft]).length, 0);
  assert.deepEqual(
    metricasCatalogo([...todosProjetos, draft]),
    metricasCatalogo(),
  );
  assert.equal(tecnologiaContagens([draft]).length, 0);
});

test("a Stack conta projetos distintos mesmo se uma tecnologia se repetir com outra capitalização", () => {
  const projeto = { ...todosProjetos[0], tecnologias: ["SQL", "sql", "SQL"] };
  assert.equal(tecnologiaContagens([projeto])[0].count, 1);
  assert.equal(metricasCatalogo([projeto]).tecnologias, 1);
});
test("filtros combinam categoria secundária, contexto, tecnologia e busca sem acentos", () => {
  assert.equal(
    filtrarProjetos(todosProjetos, {
      ...filtrosIniciais,
      categoria: "bots-ia",
      contexto: "corporativo",
      tecnologia: "Power Apps",
      busca: "curriculos",
    })[0].slug,
    "recrutamento-inteligente",
  );
  assert.equal(
    filtrarProjetos(todosProjetos, {
      ...filtrosIniciais,
      categoria: "power-bi",
    }).length,
    10,
  );
  assert.equal(
    filtrarProjetos(todosProjetos, {
      ...filtrosIniciais,
      busca: "termo inexistente",
    }).length,
    0,
  );
});
test("consulta ilustrativa reflete todos os filtros e escapa apóstrofos", () => {
  assert.equal(queryFiltros(filtrosIniciais), "SELECT * FROM projetos;");
  const query = queryFiltros({
    categoria: "web",
    contexto: "pessoal",
    tecnologia: "APIs REST",
    busca: "d'água",
  });
  assert.ok(query.includes("busca = 'd''água'"));
  assert.ok(query.includes("categoria = 'web' AND contexto = 'pessoal'"));
});
test("tecnologia desconhecida avisa, conta e recebe ícone padrão", () => {
  const projeto = {
    ...todosProjetos[0],
    tecnologias: ["Ferramenta confirmada"],
  };
  const result = validarProjetos([projeto, ...todosProjetos.slice(1)]);
  assert.equal(result.erros.length, 0);
  assert.equal(result.avisos.length, 1);
  assert.equal(tecnologiaContagens([projeto])[0].icone, "code");
});
test("validação bloqueia slugs duplicados, categoria inválida, relação quebrada e resumo ausente", () => {
  assert.ok(
    validarProjetos([...todosProjetos, todosProjetos[0]]).erros.some((e) =>
      e.includes("duplicado"),
    ),
  );
  const broken = {
    ...todosProjetos[0],
    categorias: ["inexistente"],
    relacionados: ["nao-existe"],
    resumo: " ",
  } as unknown as Projeto;
  const result = validarProjetos([broken]);
  assert.ok(result.erros.some((e) => e.includes("categoria")));
  assert.ok(result.erros.some((e) => e.includes("relacionado")));
  assert.ok(result.erros.some((e) => e.includes("resumo")));
});
test("blocos narrativos podem estar ausentes e tecnologias pode ser lista vazia", () => {
  const projeto: Projeto = {
    slug: "minimal",
    nome: "Projeto",
    resumo: "Descrição fornecida.",
    categorias: ["web"],
    contexto: "pessoal",
    status: "publicado",
    tecnologias: [],
  };
  assert.deepEqual(validarProjetos([projeto]), { erros: [], avisos: [] });
});
test("Power BI exige HTTPS, host e caminho autorizados", () => {
  for (const url of [
    "javascript:alert(1)",
    "https://app.powerbi.com.evil.test/view?r=x",
    "http://app.powerbi.com/view?r=x",
    "https://app.powerbi.com/view",
    "https://user:pass@app.powerbi.com/view?r=x",
  ])
    assert.equal(powerBiUrlValida(url), false);
  assert.equal(powerBiUrlValida("https://app.powerbi.com/view?r=token"), true);
});
test("pendências têm IDs estáveis e documento determinístico sincronizável", () => {
  const itens = extrairPendencias(
    "src/content/projetos/teste.ts",
    "// PENDENTE: [teste.ano] Confirmar o ano.\n// comentário comum\n// PENDENTE: [teste.stack] Confirmar tecnologias.",
  );
  assert.equal(itens.length, 2);
  const doc = renderPendencias(itens);
  assert.ok(doc.includes("**teste.ano**"));
  assert.equal(doc, renderPendencias(itens));
});

test("destaques ordenados pelo conteúdo excluem rascunhos", () => {
  assert.deepEqual(
    getDestaques().map((p) => p.slug),
    ["viagem-automatizada", "sonora-inteligencia-vocal", "gestao-projetos-ia"],
  );
  assert.deepEqual(
    getDestaques([
      {
        ...todosProjetos[0],
        destaque: true,
        status: "rascunho",
        ordemDestaque: 0,
      },
    ]),
    [],
  );
  assert.equal(getDestaques()[1].contexto, "pessoal");
});

test("automações dependem do sinalizador, não da categoria, e ignoram rascunhos", () => {
  const base = todosProjetos[0];
  const lista: Projeto[] = [
    { ...base, categorias: ["python"], automacao: true },
    { ...base, categorias: ["power-automate"], automacao: false },
    { ...base, categorias: ["python"], automacao: true, status: "rascunho" },
  ];
  assert.equal(metricasCatalogo(lista).automacoes, 1);
  for (const campo of [
    { automacao: "sim" },
    { ordemDestaque: -1 },
    { ordemDestaque: 0.5 },
  ]) {
    assert.ok(
      validarProjetos([
        { ...base, ...campo } as unknown as Projeto,
        ...todosProjetos.slice(1),
      ]).erros.length > 0,
    );
  }
});

test("Python, contexto e tecnologia combinam; o portal não adiciona dashboards internos", () => {
  const filtro = { ...filtrosIniciais, categoria: "python" as const };
  assert.equal(filtrarProjetos(todosProjetos, filtro).length, 11);
  assert.equal(
    filtrarProjetos(todosProjetos, { ...filtro, contexto: "pessoal" }).length,
    3,
  );
  assert.deepEqual(
    filtrarProjetos(todosProjetos, { ...filtro, tecnologia: "OpenCV" }).map(
      (p) => p.slug,
    ),
    ["visao-computacional-motorista"],
  );
  assert.equal(
    todosProjetos.find((p) => p.slug === "portal-indicadores")?.powerBiUrl,
    undefined,
  );
  assert.equal(validarProjetos(todosProjetos).avisos.length, 0);
});

test("slugs anteriores preservados, exclusões e conteúdo público sem caminhos ou segredos", () => {
  const antigos = [
    "viagem-automatizada",
    "desvios-orcamento-relatorio-gestor",
    "automacao-emissoes-qrcode-veiculos",
    "bi-executivo-orcamento-desvios",
    "app-integrado-teamculture",
    "controle-viagem-celulose",
    "controle-viagem-mineracao",
    "recrutamento-inteligente",
    "gestao-pessoal-projetos-tarefas",
    "painel-manutencao-frota",
    "gestao-projetos-ia",
    "plataforma-investimentos",
    "treino-ia",
    "bolao-copa-2026",
    "bot-ofertas-telegram",
    "bot-alertas-manutencao",
    "demo-aderencia-cargo",
    "demo-banco-horas",
    "demo-frota-terceiro-rodoviario",
    "demo-gestao-nfe",
    "demo-gestao-projetos",
    "demo-headcount",
    "demo-modelo-gestao",
    "demo-turnover",
  ];
  const slugs = new Set(todosProjetos.map((p) => p.slug));
  for (const slug of antigos) assert.ok(slugs.has(slug), slug);
  assert.equal(slugs.size, 39);
  assert.equal(todosProjetos.filter((p) => !p.powerBiUrl).length, 31);
  const conteudo = JSON.stringify(todosProjetos);
  assert.doesNotMatch(conteudo, /openclaude|torre de controle|torre-controle/i);
  assert.doesNotMatch(
    conteudo,
    /[A-Z]:\\|(?:10|192\.168)\.\d+\.\d+|sk-proj-|password=|api_key=/i,
  );
  for (const p of todosProjetos) {
    assert.equal(p.ano, undefined);
    assert.equal(p.emProducao, undefined);
  }
});
