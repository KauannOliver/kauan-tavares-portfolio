import type { Projeto } from "../tipos";

// PENDENTE: [demo-frota-terceiro-rodoviario.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-frota-terceiro-rodoviario.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-frota-terceiro-rodoviario.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-frota-terceiro-rodoviario",
  nome: "DEMO - Frota x Terceiro - Rodoviário",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 18,
  resumo:
    "Visão demonstrativa de frota própria e terceiros no transporte rodoviário.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiYTE4ZTBjYzEtZGMzZi00NTEwLTg5OWQtOWQyMDY0MWI3NjA4IiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
