import type { Projeto } from "../tipos";

// PENDENTE: [demo-gestao-nfe.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-gestao-nfe.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-gestao-nfe.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-gestao-nfe",
  nome: "DEMO - Gestão de NF-e",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 19,
  resumo: "Visão demonstrativa de gestão de notas fiscais eletrônicas.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiYmI5MDU1MTktZDIxNy00YjdkLWEzMGMtOTk4Y2U1Y2YyNDg3IiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
