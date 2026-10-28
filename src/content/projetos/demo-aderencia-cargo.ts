import type { Projeto } from "../tipos";

// PENDENTE: [demo-aderencia-cargo.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [demo-aderencia-cargo.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
// PENDENTE: [demo-aderencia-cargo.resumo] Confirmar o resumo neutro derivado apenas do título.
const projeto: Projeto = {
  slug: "demo-aderencia-cargo",
  nome: "DEMO - Aderência ao Cargo",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["power-bi"],
  ordem: 16,
  resumo: "Visão demonstrativa de aderência ao cargo.",
  tecnologias: ["Power BI"],
  powerBiUrl:
    "https://app.powerbi.com/view?r=eyJrIjoiZmIxYzY4NzItYzk5Zi00Njg2LTg2OGQtZDlkOTlkMDAxYjdlIiwidCI6IjI0NTkxYjYxLWRlMmUtNDljNC04ZDRhLWNkYWQyODU3MTMzOCJ9",
};

export default projeto;
