import type { Projeto } from "../tipos";

// PENDENTE: [assistente-orcamentario-telegram.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [assistente-orcamentario-telegram.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "assistente-orcamentario-telegram",
  nome: "Assistente orçamentário com IA no Telegram",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["bots-ia", "python"],
  ordem: 25,
  resumo:
    "Perguntas em linguagem natural conectadas a ferramentas de consulta de orçamento, com contexto de conversa.",
  problema:
    "Consultar informações de orçamento e realizado por diferentes recortes sem exigir que cada pergunta seja traduzida manualmente em uma consulta.",
  solucao:
    "Assistente no Telegram que combina o histórico da conversa com ferramentas de consulta a dados orçamentários. As ferramentas oferecem resumos e detalhamentos por centro de custo, conta e outros recortes, e devolvem resultados ao modelo para compor a resposta.",
  comoFoiFeito:
    "Python integra a Telegram Bot API ao OpenAI SDK. O ciclo de tool calling chama funções específicas de consulta por pyodbc ao SQL Server. SQLite mantém o histórico das conversas, enquanto o carregamento de instruções separa as orientações do agente da lógica de acesso aos dados.",
  impacto:
    "Organiza o acesso conversacional às consultas implementadas e preserva o contexto entre perguntas.",
  tecnologias: [
    "Python",
    "Telegram Bot API",
    "OpenAI SDK",
    "pyodbc",
    "SQL Server",
    "SQLite",
  ],
  pipeline: [
    {
      label: "Pergunta no Telegram",
      icone: "send",
    },
    {
      label: "Contexto da conversa",
      icone: "database",
    },
    {
      label: "Seleção de ferramentas",
      icone: "sparkles",
    },
    {
      label: "Consulta orçamentária",
      icone: "calculator",
    },
    {
      label: "Resposta contextual",
      icone: "bot",
    },
  ],
  relacionados: ["bi-executivo-orcamento-desvios", "gestao-projetos-ia"],
};

export default projeto;
