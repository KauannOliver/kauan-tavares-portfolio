import type { Projeto } from "../tipos";

// PENDENTE: [bi-executivo-orcamento-desvios.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
const projeto: Projeto = {
  slug: "bi-executivo-orcamento-desvios",
  nome: "BI Executivo de Orçamento e Desvios",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["power-bi"],
  ordem: 3,
  resumo:
    "Dashboard executivo para acompanhamento de orçamento, realizado, desvios, centros de custo e indicadores de performance.",
  tecnologias: ["Power BI", "DAX", "SQL", "Excel", "Power Query"],
  problema:
    "As informações estavam espalhadas em planilhas e relatórios isolados, dificultando a análise rápida dos desvios e a tomada de decisão. Cada área construía sua própria visão, sem padronização, e o tempo gasto consolidando dados era alto demais para a velocidade que o negócio exigia.",
  solucao:
    "Criação de um BI executivo com indicadores claros, rankings de desvios por centro de custo, filtros por área e período, visão consolidada e análises de orçamento versus realizado. A modelagem foi pensada para permitir drill-down por dimensão e leitura rápida dos principais pontos de atenção.",
  comoFoiFeito:
    "Os dados foram extraídos de múltiplas fontes (planilhas, ERP), tratados no Power Query com padronização de nomenclaturas e tipos. A modelagem seguiu o padrão star schema, com tabelas fato e dimensão bem definidas. As medidas DAX foram construídas para calcular desvios percentuais, acumulados e comparativos. O layout do dashboard foi pensado para leitura executiva, com hierarquia visual clara.",
  impacto:
    "Mais clareza para análise de desvios, tomada de decisão mais rápida, padronização da leitura dos indicadores e eliminação de relatórios manuais duplicados.",
  aprendizado:
    "Aprofundamento em modelagem de dados, DAX avançado, storytelling com dados e construção de visões executivas que realmente são usadas no dia a dia.",
  pipeline: [
    {
      label: "Fontes de dados",
      icone: "database",
    },
    {
      label: "Tratamento Power Query",
      icone: "filter",
    },
    {
      label: "Modelagem",
      icone: "git-branch",
    },
    {
      label: "Medidas DAX",
      icone: "calculator",
    },
    {
      label: "Dashboard executivo",
      icone: "bar-chart-3",
    },
    {
      label: "Decisão",
      icone: "target",
    },
  ],
  relacionados: ["desvios-orcamento-relatorio-gestor"],
};

export default projeto;
