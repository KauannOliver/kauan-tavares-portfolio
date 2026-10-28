import type { Projeto } from "../tipos";

// PENDENTE: [assistente-estudos-ia.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [assistente-estudos-ia.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "assistente-estudos-ia",
  nome: "Assistente de estudos com IA",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["web", "bots-ia"],
  ordem: 26,
  resumo:
    "Extensão de navegador para extrair questões, sugerir alternativas e apoiar a revisão com IA.",
  problema:
    "Relacionar questões de múltipla escolha às alternativas disponíveis e apresentar sugestões que possam ser revisadas pelo usuário.",
  solucao:
    "Extensão que identifica as questões na página e exibe recomendações com justificativas. Um fluxo separado de laboratório demonstra automação apenas no hostname autorizado, mantendo a revisão assistida como modo normal.",
  comoFoiFeito:
    "JavaScript e Chrome Extensions Manifest V3 separam o script da página, o worker e a configuração. O cliente Groq organiza lotes, solicita uma resposta estruturada e valida os identificadores retornados antes de mostrar as sugestões. O laboratório verifica o hostname configurado antes das ações de demonstração.",
  impacto:
    "Reúne a leitura das questões e a revisão das sugestões em um painel, distinguindo assistência ao usuário de demonstração em laboratório.",
  tecnologias: ["JavaScript", "Chrome Extensions", "Groq"],
  pipeline: [
    {
      label: "Extração das questões",
      icone: "search",
    },
    {
      label: "Consulta à IA",
      icone: "sparkles",
    },
    {
      label: "Validação das alternativas",
      icone: "filter",
    },
    {
      label: "Revisão do usuário",
      icone: "users",
    },
  ],
  subcases: [
    {
      titulo: "Revisão assistida",
      descricao:
        "Sugestões e justificativas apresentadas para decisão manual do usuário.",
    },
    {
      titulo: "Laboratório autorizado",
      descricao:
        "Demonstração de automação restrita ao hostname exato configurado para o laboratório.",
    },
  ],
};

export default projeto;
