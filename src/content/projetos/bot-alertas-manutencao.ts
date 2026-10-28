import type { Projeto } from "../tipos";

// PENDENTE: [bot-alertas-manutencao.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [bot-alertas-manutencao.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "bot-alertas-manutencao",
  nome: "Bot de alertas de manutenção no Telegram",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["bots-ia", "python"],
  ordem: 15,
  resumo:
    "Consulta periódica de ordens, regras de anomalia e alertas no Telegram com deduplicação.",
  tecnologias: [
    "Python",
    "python-telegram-bot",
    "Telegram Bot API",
    "MySQL",
    "SQLite",
  ],
  pipeline: [
    {
      label: "Consulta periódica",
      icone: "database",
    },
    {
      label: "Regras de anomalia",
      icone: "filter",
    },
    {
      label: "Deduplicação dos achados",
      icone: "git-branch",
    },
    {
      label: "Notificação no Telegram",
      icone: "send",
    },
    {
      label: "Histórico de alertas",
      icone: "table",
    },
  ],
  problema:
    "Identificar inconsistências nas ordens de manutenção e encaminhar os achados aos responsáveis sem repetir notificações já enviadas.",
  solucao:
    "Bot que consulta a origem MySQL periodicamente, aplica regras sobre os eventos das ordens e envia os achados ao Telegram. O estado de execução e o histórico de alertas permitem controlar repetição e acompanhar as consultas.",
  comoFoiFeito:
    "Python organiza o cliente MySQL, o motor de regras e o agendamento com python-telegram-bot. Uma impressão digital identifica os achados, enquanto SQLite mantém o estado do monitoramento e os alertas já enviados.",
  impacto:
    "Transforma regras de acompanhamento em notificações rastreáveis, com estado persistido e controle de duplicidade.",
  automacao: true,
  relacionados: ["painel-manutencao-frota"],
};

export default projeto;
