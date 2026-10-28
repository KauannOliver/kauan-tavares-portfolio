import type { Projeto } from "../tipos";

// PENDENTE: [plataforma-investimentos.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [plataforma-investimentos.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "plataforma-investimentos",
  nome: "InvestK — Gestão de investimentos",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["web"],
  ordem: 11,
  resumo:
    "Carteira local-first com operações, proventos, renda fixa, simulações, importação e backup.",
  tecnologias: [
    "React",
    "JavaScript",
    "Vite",
    "Recharts",
    "SheetJS",
    "APIs REST",
  ],
  pipeline: [
    {
      label: "Registro de operações",
      icone: "table",
    },
    {
      label: "Cotações por API",
      icone: "network",
    },
    {
      label: "Consolidação da carteira",
      icone: "database",
    },
    {
      label: "Resultados e simulações",
      icone: "calculator",
    },
    {
      label: "Importação e backup",
      icone: "cloud",
    },
  ],
  problema:
    "Acompanhar posições, movimentações e resultados da carteira de forma consolidada, mantendo o histórico no navegador.",
  solucao:
    "Aplicação para registrar compras e vendas, acompanhar proventos e renda fixa, explorar simulações e importar ou exportar os próprios registros. Consulta cotações externas para complementar os dados locais.",
  comoFoiFeito:
    "React e Vite estruturam a interface em JavaScript. As operações ficam no localStorage e alimentam funções de cálculo de posições, preço médio e resultados. A integração com APIs REST utiliza cache e deduplicação de requisições; Recharts apresenta os gráficos e SheetJS apoia a importação e a exportação de planilhas.",
  impacto:
    "Disponibiliza uma visão integrada da carteira com dados locais, consultas de mercado e recursos de backup e análise.",
};

export default projeto;
