import type { Projeto } from "../tipos";

// PENDENTE: [central-solicitacoes.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [central-solicitacoes.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "central-solicitacoes",
  nome: "Central de solicitações",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["web"],
  ordem: 24,
  resumo:
    "Solicitações, responsáveis, Kanban, prazos e auditoria em uma aplicação corporativa.",
  problema:
    "Organizar o registro, a distribuição de responsabilidades e o acompanhamento das solicitações em um fluxo comum.",
  solucao:
    "Sistema com cadastro e acompanhamento de solicitações, quadro Kanban, leitura de prazos e dashboard. Perfis de acesso, exclusão lógica, restauração e trilha de alterações compõem a gestão do processo.",
  comoFoiFeito:
    "PHP e Laravel organizam rotas, controllers, ações, políticas e modelos. As telas usam Blade e Tailwind CSS. As mudanças de etapa no Kanban são persistidas por uma rota interna e os observers registram eventos de auditoria.",
  impacto:
    "Disponibiliza uma visão compartilhada do trabalho com responsáveis, etapas, prazos e rastreabilidade das alterações.",
  tecnologias: ["PHP", "Laravel", "Blade", "Tailwind CSS"],
  pipeline: [
    {
      label: "Cadastro da solicitação",
      icone: "layers",
    },
    {
      label: "Responsáveis e etapas",
      icone: "users",
    },
    {
      label: "Kanban e prazos",
      icone: "workflow",
    },
    {
      label: "Acompanhamento",
      icone: "bar-chart-3",
    },
    {
      label: "Auditoria",
      icone: "file-check",
    },
  ],
  relacionados: ["gestao-projetos-ia"],
};

export default projeto;
