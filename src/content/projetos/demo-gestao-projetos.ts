import type { Projeto } from "../tipos";

// PENDENTE: [demo-gestao-projetos.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-gestao-projetos.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-gestao-projetos.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-gestao-projetos",
  nome: "DEMO - Gestão de Projetos",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 20,
  resumo: "Visão demonstrativa de acompanhamento de projetos.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiZTIzMDExMWUtMWM2Yy00OTQ0LTg2MmItMDQ4MDg5MDE0ZGM4IiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
