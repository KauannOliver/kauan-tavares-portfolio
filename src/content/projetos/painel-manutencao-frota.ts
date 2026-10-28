import type { Projeto } from "../tipos";

// PENDENTE: [painel-manutencao-frota.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [painel-manutencao-frota.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "painel-manutencao-frota",
  nome: "OM Digital — Dashboard de indisponibilidade",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["web"],
  ordem: 9,
  resumo:
    "Dashboard de veículos em manutenção e aguardando liberação, com filtros operacionais e atualização dos dados.",
  tecnologias: ["React", "TypeScript", "Vite", "Express", "MySQL"],
  pipeline: [
    {
      label: "Ordens no MySQL",
      icone: "database",
    },
    {
      label: "Consulta e cache",
      icone: "server",
    },
    {
      label: "Filtros operacionais",
      icone: "filter",
    },
    {
      label: "Dashboard de indisponibilidade",
      icone: "bar-chart-3",
    },
  ],
  solucao:
    "Dashboard com seleção múltipla de filiais, operações, segmentos e controles operacionais. Apresenta ordens e veículos em manutenção ou aguardando liberação para apoiar a leitura da indisponibilidade.",
  problema:
    "Acompanhar os veículos indisponíveis e os que finalizaram a manutenção, permitindo selecionar o recorte operacional de interesse.",
  comoFoiFeito:
    "React e TypeScript com Vite compõem o painel. Uma API Express consulta a origem MySQL e aplica cache com tempo de validade às informações de filtros e ordens. Os filtros selecionados são transportados para a visualização do painel.",
  impacto:
    "Centraliza a consulta da indisponibilidade e facilita a leitura por diferentes recortes operacionais.",
  relacionados: ["bot-alertas-manutencao"],
};

export default projeto;
