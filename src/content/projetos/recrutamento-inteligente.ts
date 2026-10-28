import type { Projeto } from "../tipos";

// PENDENTE: [recrutamento-inteligente.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [recrutamento-inteligente.narrativa] Informar: problema, comoFoiFeito, impacto, aprendizado.
const projeto: Projeto = {
  slug: "recrutamento-inteligente",
  nome: "Recrutamento inteligente",
  status: "publicado",
  automacao: true,
  contexto: "corporativo",
  categorias: ["power-apps", "bots-ia"],
  ordem: 7,
  resumo:
    "Análise de currículos com IA, pontuação e agendamento automático de entrevistas.",
  tecnologias: ["Power Apps", "GPT-OSS (Groq)"],
  pipeline: [
    {
      label: "Vaga criada",
      icone: "circle",
    },
    {
      label: "Candidaturas",
      icone: "circle",
    },
    {
      label: "Análise e score com IA",
      icone: "circle",
    },
    {
      label: "Aprovados",
      icone: "circle",
    },
    {
      label: "Entrevista agendada",
      icone: "circle",
    },
    {
      label: "Link + perguntas sugeridas",
      icone: "circle",
    },
  ],
  solucao:
    "Recebe currículos de candidatos às vagas criadas. Ao movimentar a vaga, analisa os currículos com base em diversos critérios, gera um score de pontuação, agenda automaticamente uma entrevista online no calendário com os aprovados, devolve o link da reunião e sugere perguntas personalizadas para cada candidato.",
};

export default projeto;
