import type { Projeto } from "../tipos";

// PENDENTE: [bot-ofertas-telegram.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [bot-ofertas-telegram.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "bot-ofertas-telegram",
  nome: "Offer Scout — Ofertas no Telegram",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["bots-ia", "python", "web"],
  ordem: 14,
  resumo:
    "Descoberta de ofertas, histórico de preços, ranking e fila editorial com publicação no Telegram.",
  tecnologias: [
    "Python",
    "FastAPI",
    "React",
    "TypeScript",
    "Vite",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Playwright",
    "aiogram",
    "Telegram Bot API",
    "GPT-OSS (Groq)",
  ],
  pipeline: [
    {
      label: "Descoberta de ofertas",
      icone: "search",
    },
    {
      label: "Histórico e ranking",
      icone: "bar-chart-3",
    },
    {
      label: "Fila e revisão editorial",
      icone: "layers",
    },
    {
      label: "Redação com IA",
      icone: "sparkles",
    },
    {
      label: "Publicação no Telegram",
      icone: "send",
    },
    {
      label: "Consulta no bot privado",
      icone: "bot",
    },
  ],
  solucao:
    "Plataforma que captura ofertas, mantém observações de preços, calcula um ranking explicável e organiza uma fila para revisão. A IA pode redigir o texto das ofertas, com alternativa determinística. O bot privado oferece navegação e consulta; a publicação no Telegram passa pelas regras e configurações do fluxo.",
  problema:
    "Organizar a descoberta, a avaliação e a publicação de ofertas, mantendo os fatos dos produtos separados da redação editorial.",
  comoFoiFeito:
    "Backend Python com FastAPI, PostgreSQL, Redis e tarefas Celery, incluindo um worker de navegação Playwright. O painel React em TypeScript e Vite permite acompanhar a fila editorial. A integração com Groq gera textos para as ofertas e o bot aiogram utiliza a Telegram Bot API. Histórico e revalidação dos dados apoiam as decisões de publicação.",
  impacto:
    "Estrutura a descoberta e a revisão editorial, preservando histórico e rastreabilidade entre oferta observada, conteúdo preparado e publicação.",
  automacao: true,
  links: {
    github: "https://github.com/KauannOliver/offer-scout",
  },
};

export default projeto;
