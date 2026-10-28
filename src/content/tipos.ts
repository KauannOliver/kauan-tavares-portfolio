export type CategoriaId =
  "power-bi" | "power-automate" | "power-apps" | "web" | "bots-ia" | "python";
export type Status = "publicado" | "rascunho";
export type Contexto = "corporativo" | "pessoal";

export interface Projeto {
  slug: string;
  nome: string;
  status: Status;
  contexto: Contexto;
  categorias: CategoriaId[];
  destaque?: boolean;
  ordemDestaque?: number;
  automacao?: boolean;
  ordem?: number;
  ano?: number;
  emProducao?: boolean;
  resumo: string;
  problema?: string;
  solucao?: string;
  comoFoiFeito?: string;
  impacto?: string;
  aprendizado?: string;
  tecnologias: string[];
  pipeline?: { label: string; icone: string }[];
  subcases?: { titulo: string; descricao: string }[];
  metricas?: { valor: string; rotulo: string }[];
  powerBiUrl?: string;
  links?: { github?: string; demo?: string; video?: string };
  imagens?: string[];
  relacionados?: string[];
}

export type ProjetoCard = Pick<
  Projeto,
  | "slug"
  | "nome"
  | "contexto"
  | "categorias"
  | "resumo"
  | "tecnologias"
  | "powerBiUrl"
  | "ano"
  | "emProducao"
>;
export interface Filtros {
  categoria: string;
  contexto: string;
  tecnologia: string;
  busca: string;
}
