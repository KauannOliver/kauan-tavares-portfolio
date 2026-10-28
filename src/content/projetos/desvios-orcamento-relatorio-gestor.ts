import type { Projeto } from "../tipos";

// PENDENTE: [desvios-orcamento-relatorio-gestor.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [desvios-orcamento-relatorio-gestor.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
const projeto: Projeto = {
  slug: "desvios-orcamento-relatorio-gestor",
  nome: "Desvios de orçamento com relatório automático por gestor",
  status: "publicado",
  automacao: true,
  contexto: "corporativo",
  categorias: ["power-automate"],
  ordem: 1,
  resumo:
    "Identifica desvios orçamentários e envia automaticamente o relatório individual de cada gestor.",
  tecnologias: ["Power Automate"],
  pipeline: [
    {
      label: "Orçado x realizado",
      icone: "circle",
    },
    {
      label: "Cálculo dos desvios",
      icone: "circle",
    },
    {
      label: "Segmentação por gestor",
      icone: "circle",
    },
    {
      label: "Geração do relatório",
      icone: "circle",
    },
    {
      label: "Envio automático",
      icone: "circle",
    },
  ],
  relacionados: ["bi-executivo-orcamento-desvios"],
};

export default projeto;
