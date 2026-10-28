import type { Projeto } from "../tipos";

// PENDENTE: [demo-modelo-gestao.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-modelo-gestao.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-modelo-gestao.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-modelo-gestao",
  nome: "DEMO - Modelo de Gestão",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 22,
  resumo: "Visão demonstrativa de indicadores de gestão.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiZGQ1NTA0ZGQtZmY3MS00Y2QwLWIxNjYtMGI3MmZlMTVlYTAxIiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
