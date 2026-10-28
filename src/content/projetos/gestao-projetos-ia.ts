import type { Projeto } from "../tipos";

// PENDENTE: [gestao-projetos-ia.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [gestao-projetos-ia.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "gestao-projetos-ia",
  nome: "Plataforma de gestão de projetos com IA",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["web", "bots-ia"],
  ordem: 10,
  resumo:
    "Priorização, capacidade e simulação de cronogramas com análise narrativa dos impactos por IA.",
  tecnologias: [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "GPT-OSS (Groq)",
  ],
  pipeline: [
    {
      label: "Cadastro de projetos",
      icone: "layers",
    },
    {
      label: "Prioridades e capacidade",
      icone: "users",
    },
    {
      label: "Simulação por regras",
      icone: "calculator",
    },
    {
      label: "Comparação de impactos",
      icone: "git-branch",
    },
    {
      label: "Análise narrativa com IA",
      icone: "sparkles",
    },
  ],
  solucao:
    "Plataforma com cadastro de projetos e recursos, governança de prioridades, alocação de esforço e simulação de cronograma por capacidade. O motor calcula as previsões por regras; a IA produz uma análise narrativa dos resultados e das diferenças entre cenários.",
  problema:
    "Relacionar prioridades, esforço e disponibilidade das pessoas para acompanhar a previsão de entrega de projetos e do portfólio.",
  comoFoiFeito:
    "Interface Next.js e React em TypeScript, API NestJS e persistência com Prisma e PostgreSQL. O motor cruza esforço das fases, alocações, prioridades, calendários e indisponibilidades. A comparação de cenários alimenta uma integração Groq para análise textual, com resposta local quando o provedor não está configurado ou disponível.",
  impacto:
    "Disponibiliza uma visão consistente entre demanda, capacidade e previsão, permitindo comparar alterações de cronograma e explicar seus impactos.",
  destaque: true,
  ordemDestaque: 2,
  relacionados: ["central-solicitacoes", "assistente-orcamentario-telegram"],
};

export default projeto;
