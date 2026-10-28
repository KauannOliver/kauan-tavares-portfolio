import type { Projeto } from "../tipos";

// PENDENTE: [gestao-pizzaria.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [gestao-pizzaria.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "gestao-pizzaria",
  nome: "Gestão de pedidos para pizzaria",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["python"],
  ordem: 36,
  resumo:
    "Clientes, produtos e pedidos com persistência local, documentos e notificações.",
  problema:
    "Relacionar os cadastros de clientes e produtos ao acompanhamento dos pedidos e de suas situações.",
  solucao:
    "Aplicação para cadastrar clientes e pizzas, registrar pedidos, calcular seus totais e acompanhar mudanças de situação. Inclui geração de documentos, exportação e rotinas de comunicação relacionadas ao pedido.",
  comoFoiFeito:
    "Python e Flet estruturam as telas de cadastro e pedidos, com SQLite para persistência. pandas apoia a exportação de registros, FPDF gera documentos dos pedidos e Selenium participa das rotinas de comunicação pelo navegador.",
  impacto:
    "Conecta os cadastros ao ciclo dos pedidos e reúne acompanhamento, documentos e comunicação em uma aplicação local.",
  tecnologias: ["Python", "Flet", "SQLite", "pandas", "Selenium", "FPDF"],
  pipeline: [
    {
      label: "Clientes e produtos",
      icone: "users",
    },
    {
      label: "Registro do pedido",
      icone: "layers",
    },
    {
      label: "Situação e acompanhamento",
      icone: "workflow",
    },
    {
      label: "Documentos e exportação",
      icone: "file-check",
    },
    {
      label: "Notificações",
      icone: "send",
    },
  ],
};

export default projeto;
