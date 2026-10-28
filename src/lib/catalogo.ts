import * as registro from "../content/projetos";
import { categorias } from "../content/categorias";
import { getTecnologia } from "../content/tecnologias";
import type { Projeto, ProjetoCard } from "../content/tipos";

export const todosProjetos: Projeto[] = Object.values(registro).sort(
  (a, b) =>
    (a.ordem ?? Infinity) - (b.ordem ?? Infinity) ||
    a.nome.localeCompare(b.nome, "pt-BR"),
);
export const publicados = (projetos: Projeto[] = todosProjetos) =>
  projetos.filter((projeto) => projeto.status === "publicado");
export const projetosPublicados = publicados();
export const dashboards = projetosPublicados.filter(
  (projeto) => projeto.powerBiUrl,
);
export const categoriasAtivas = categorias.filter((categoria) =>
  projetosPublicados.some((projeto) =>
    projeto.categorias.includes(categoria.id),
  ),
);
export const getProjeto = (slug: string) =>
  projetosPublicados.find((projeto) => projeto.slug === slug);
export function metricasCatalogo(projetos: Projeto[] = todosProjetos) {
  const lista = publicados(projetos);
  return {
    projetos: lista.length,
    dashboards: lista.filter((p) => p.powerBiUrl).length,
    automacoes: lista.filter((p) => p.automacao === true).length,
    tecnologias: new Set(
      lista.flatMap((p) => p.tecnologias.map((t) => t.toLowerCase())),
    ).size,
  };
}
export function tecnologiaContagens(projetos: Projeto[] = todosProjetos) {
  const contagens = new Map<
    string,
    { nome: string; count: number; icone: string; cor: string; grupo: string }
  >();
  for (const projeto of publicados(projetos)) {
    const usadas = new Set<string>();
    for (const nome of projeto.tecnologias) {
      const chave = nome.toLowerCase();
      if (usadas.has(chave)) continue;
      usadas.add(chave);
      const atual = contagens.get(chave);
      const tecnologia = getTecnologia(nome);
      contagens.set(chave, {
        nome,
        count: (atual?.count ?? 0) + 1,
        icone: tecnologia?.icone ?? "code",
        cor: tecnologia?.cor ?? "#AAB3C5",
        grupo: tecnologia?.grupo ?? "Outras tecnologias",
      });
    }
  }
  return [...contagens.values()];
}
export function paraCard({
  slug,
  nome,
  contexto,
  categorias,
  resumo,
  tecnologias,
  powerBiUrl,
  ano,
  emProducao,
}: Projeto): ProjetoCard {
  return {
    slug,
    nome,
    contexto,
    categorias,
    resumo,
    tecnologias,
    powerBiUrl,
    ano,
    emProducao,
  };
}

export function getDestaques(projetos: Projeto[] = todosProjetos) {
  return publicados(projetos)
    .filter((projeto) => projeto.destaque)
    .sort(
      (a, b) =>
        (a.ordemDestaque ?? Infinity) - (b.ordemDestaque ?? Infinity) ||
        (a.ordem ?? Infinity) - (b.ordem ?? Infinity) ||
        a.nome.localeCompare(b.nome, "pt-BR"),
    );
}
