import type { Projeto } from "../tipos";

// PENDENTE: [demo-headcount.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-headcount.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-headcount.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-headcount",
  nome: "DEMO - HeadCount",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 21,
  resumo: "Visão demonstrativa do quadro de pessoas.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiYjc3ZjkwYzUtNzBkNi00ZTEzLWI1NzktNTM1YWE1MTA2NTRlIiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
