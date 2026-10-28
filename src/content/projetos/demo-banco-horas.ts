import type { Projeto } from "../tipos";

// PENDENTE: [demo-banco-horas.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-banco-horas.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-banco-horas.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-banco-horas",
  nome: "DEMO - Banco de Horas",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 17,
  resumo: "Visão demonstrativa de acompanhamento do banco de horas.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiZWY4ZDYxYjctNzgzNS00NDA0LWI1MzYtOWRkYzI3OGQxZmFmIiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
