import type { Projeto } from "../tipos";

// PENDENTE: [treino-ia.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [treino-ia.aprendizado] Informar o aprendizado pessoal do projeto.
// PENDENTE: [treino-ia.integracao-ia] Menção de IA e GPT-OSS mantida por confirmação do autor; localizar o código da integração na versão de origem.
const projeto: Projeto = {
  slug: "treino-ia",
  nome: "Meu Treino — Acompanhamento de treinos com IA",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["web", "bots-ia"],
  ordem: 12,
  resumo:
    "Planos, sessões com retomada, temporizadores e evolução em uma PWA local-first com IA.",
  tecnologias: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Dexie",
    "IndexedDB",
    "Zustand",
    "Serwist",
    "GPT-OSS (Groq)",
  ],
  pipeline: [
    {
      label: "Plano de treino",
      icone: "layers",
    },
    {
      label: "Sessão e temporizadores",
      icone: "workflow",
    },
    {
      label: "Registro local das séries",
      icone: "database",
    },
    {
      label: "Histórico e evolução",
      icone: "bar-chart-3",
    },
    {
      label: "Sugestões com IA",
      icone: "sparkles",
    },
  ],
  problema:
    "Organizar os planos e acompanhar cada sessão, preservando o registro do treino e os temporizadores após interrupções.",
  solucao:
    "PWA para montar planos, executar sessões, registrar séries e acompanhar a evolução. O histórico, as medidas e os planos ficam no navegador, com registro offline após o primeiro carregamento. A experiência também inclui sugestões com IA para apoiar o acompanhamento dos treinos.",
  comoFoiFeito:
    "Next.js, React, TypeScript e Tailwind CSS compõem a interface. Dexie organiza os dados no IndexedDB, Zustand persiste o estado transitório dos temporizadores e Serwist fornece o shell offline. As sessões salvam o progresso para permitir retomada, e os recursos de histórico e exportação apoiam o acompanhamento.",
  impacto:
    "Integra planejamento, execução e acompanhamento em uma experiência que preserva os dados localmente e permite retomar sessões.",
};

export default projeto;
