import type { Projeto } from "../tipos";

// PENDENTE: [bolao-copa-2026.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [bolao-copa-2026.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "bolao-copa-2026",
  nome: "Bolão da Copa do Mundo 2026",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["web"],
  ordem: 13,
  resumo:
    "Palpites, fases de grupos e mata-mata com regras de pontuação, ranking e administração.",
  tecnologias: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "NestJS",
    "Prisma",
    "PostgreSQL",
  ],
  pipeline: [
    {
      label: "Cadastro e aprovação",
      icone: "users",
    },
    {
      label: "Palpites de grupos",
      icone: "table",
    },
    {
      label: "Mata-mata",
      icone: "git-branch",
    },
    {
      label: "Regras de pontuação",
      icone: "calculator",
    },
    {
      label: "Ranking",
      icone: "bar-chart-3",
    },
  ],
  problema:
    "Organizar os palpites dos participantes, validar os envios e acompanhar a classificação ao longo do torneio.",
  solucao:
    "Sistema com cadastro sujeito à aprovação, painel administrativo, palpites de grupos e mata-mata e cálculo do ranking conforme as regras cadastradas.",
  comoFoiFeito:
    "Frontend em React, TypeScript, Vite e Tailwind CSS. A API NestJS separa autenticação, administração, grupos e palpites, com persistência por Prisma e PostgreSQL. Os serviços validam os envios e os prazos antes de salvar as previsões.",
  impacto:
    "Reúne a participação e a apuração em um sistema com persistência, validação de palpites e classificação compartilhada.",
};

export default projeto;
