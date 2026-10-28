import type { Projeto } from "../tipos";

// PENDENTE: [portal-indicadores.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [portal-indicadores.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "portal-indicadores",
  nome: "Portal de indicadores corporativos",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["web", "power-bi"],
  ordem: 31,
  resumo:
    "Portal para acessar e selecionar os relatórios Power BI disponibilizados ao usuário.",
  problema:
    "Organizar o acesso aos relatórios corporativos em uma interface que apresente o conjunto disponibilizado a cada usuário.",
  solucao:
    "Portal com entrada de usuário, seleção lateral de relatórios e área de visualização do relatório escolhido. Este case descreve a aplicação; os relatórios e os dados internos não são incorporados à demonstração pública.",
  comoFoiFeito:
    "React e JavaScript com Vite compõem as telas de acesso e dashboard. Uma função Netlify atende o fluxo de entrada e devolve os relatórios disponibilizados ao usuário; a interface seleciona qual visualização Power BI apresentar.",
  impacto:
    "Centraliza a navegação entre os relatórios disponibilizados em uma única interface.",
  tecnologias: ["React", "JavaScript", "Vite", "Power BI", "Netlify Functions"],
  pipeline: [
    {
      label: "Acesso ao portal",
      icone: "users",
    },
    {
      label: "Relatórios disponíveis",
      icone: "layers",
    },
    {
      label: "Seleção do relatório",
      icone: "filter",
    },
    {
      label: "Visualização do indicador",
      icone: "bar-chart-3",
    },
  ],
  relacionados: ["bi-executivo-orcamento-desvios"],
};

export default projeto;
