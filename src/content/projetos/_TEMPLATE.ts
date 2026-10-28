import type { Projeto } from "../tipos";

// Copie este arquivo, escolha um slug e registre uma linha no index.ts.
// Somente status publicado entra nas páginas e contagens públicas.
// Para informações ausentes, crie comentários no formato:
// Formato: PENDENTE: [seu-slug.campo] Descreva a informação que precisa ser confirmada.
const projeto: Projeto = {
  slug: "",
  nome: "",
  status: "rascunho",
  contexto: "pessoal",
  categorias: ["web"], // A primeira categoria define a identidade visual.
  resumo: "",
  tecnologias: [], // Nomes do catálogo; nunca deduza a stack.
  // automacao: true, // Processo automatizado, independentemente da categoria.
  // destaque: true,
  // ordemDestaque: 0, // Ordenação dos destaques; números menores vêm primeiro.
  // ordem: 0,
  // ano: 2026,
  // emProducao: true,
  // problema: "",
  // solucao: "",
  // comoFoiFeito: "",
  // impacto: "",
  // aprendizado: "",
  // pipeline: [{ label: "", icone: "database" }],
  // subcases: [{ titulo: "Descrição genérica do setor", descricao: "" }],
  // metricas: [{ valor: "", rotulo: "" }], // Apenas números verificados.
  // powerBiUrl: "", // URL pública app.powerbi.com/view?r=...
  // links: { github: "", demo: "", video: "" },
  // imagens: [], // Caminhos locais /previews/... ou URLs HTTPS.
  // relacionados: [], // Slugs já registrados, sem nomes de clientes.
};
export default projeto;
