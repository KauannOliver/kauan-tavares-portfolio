import { categorias } from "../content/categorias";
import { getTecnologia } from "../content/tecnologias";
import type { Projeto } from "../content/tipos";

export function powerBiUrlValida(valor: string) {
  try {
    const url = new URL(valor);
    return (
      url.protocol === "https:" &&
      url.hostname === "app.powerbi.com" &&
      url.pathname === "/view" &&
      !!url.searchParams.get("r") &&
      !url.username &&
      !url.password
    );
  } catch {
    return false;
  }
}
export function validarProjetos(projetos: Projeto[]) {
  const erros: string[] = [];
  const avisos: string[] = [];
  const slugs = new Set<string>();
  for (const p of projetos) {
    const ref = p.slug || "sem-slug";
    for (const campo of ["slug", "nome", "resumo"] as const)
      if (typeof p[campo] !== "string" || !p[campo].trim())
        erros.push(`${ref}: campo obrigatório ${campo}.`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug))
      erros.push(`${ref}: slug inválido.`);
    if (slugs.has(p.slug)) erros.push(`${ref}: slug duplicado.`);
    slugs.add(p.slug);
    if (!["publicado", "rascunho"].includes(p.status))
      erros.push(`${ref}: status inválido.`);
    if (!["corporativo", "pessoal"].includes(p.contexto))
      erros.push(`${ref}: contexto inválido.`);
    if (p.automacao !== undefined && typeof p.automacao !== "boolean")
      erros.push(`${ref}: automacao deve ser um booleano.`);
    if (
      p.ordemDestaque !== undefined &&
      (!Number.isInteger(p.ordemDestaque) || p.ordemDestaque < 0)
    )
      erros.push(`${ref}: ordemDestaque deve ser um inteiro não negativo.`);
    if (
      !Array.isArray(p.categorias) ||
      !p.categorias.length ||
      p.categorias.some((id) => !categorias.some((c) => c.id === id))
    )
      erros.push(`${ref}: categoria inválida ou ausente.`);
    if (!Array.isArray(p.tecnologias))
      erros.push(`${ref}: tecnologias deve ser uma lista.`);
    else
      for (const tech of p.tecnologias) {
        if (typeof tech !== "string" || !tech.trim())
          erros.push(`${ref}: tecnologia vazia.`);
        else if (!getTecnologia(tech))
          avisos.push(
            `${ref}: tecnologia não cadastrada: ${tech}; será usado um ícone padrão.`,
          );
      }
    for (const slug of p.relacionados ?? [])
      if (!projetos.some((item) => item.slug === slug))
        erros.push(`${ref}: relacionado inexistente: ${slug}.`);
    if (p.powerBiUrl && !powerBiUrlValida(p.powerBiUrl))
      erros.push(`${ref}: URL Power BI inválida.`);
    for (const url of Object.values(p.links ?? {})) {
      try {
        if (new URL(url).protocol !== "https:")
          erros.push(`${ref}: link deve usar HTTPS.`);
      } catch {
        erros.push(`${ref}: link inválido.`);
      }
    }
  }
  return { erros, avisos };
}
export interface Pendencia {
  id: string;
  texto: string;
  arquivo: string;
}
export function extrairPendencias(
  arquivo: string,
  conteudo: string,
): Pendencia[] {
  return [...conteudo.matchAll(/^\s*\/\/ PENDENTE: \[([^\]]+)\] (.+)$/gm)].map(
    (match) => ({ id: match[1], texto: match[2].trim(), arquivo }),
  );
}
export function renderPendencias(pendencias: Pendencia[]) {
  const grupos = new Map<string, Pendencia[]>();
  for (const item of pendencias) {
    const grupo = item.id.split(".")[0];
    grupos.set(grupo, [...(grupos.get(grupo) ?? []), item]);
  }
  return (
    "# Pendências de conteúdo\n\nGerado dos comentários `// PENDENTE:`. Atualize os arquivos de conteúdo e execute `npm run validar -- --sync-pendencias`.\n\n" +
    [...grupos.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(
        ([grupo, itens]) =>
          `## ${grupo}\n\n${itens.map((item) => `- [ ] **${item.id}** — ${item.texto} (\`${item.arquivo}\`)`).join("\n")}\n`,
      )
      .join("\n")
  );
}
