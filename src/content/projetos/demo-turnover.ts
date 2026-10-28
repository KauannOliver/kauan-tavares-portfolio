import type { Projeto } from "../tipos";

// PENDENTE: [demo-turnover.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-turnover.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-turnover.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-turnover",
  nome: "DEMO - Turnover",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 23,
  resumo: "Visão demonstrativa de desligamentos e rotatividade.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiMzIzM2ExNWYtOTVhZS00MTEzLWEwMTYtZWVhMTE0YWI0ZTU5IiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
