import type { Projeto } from "../tipos";

// PENDENTE: [integracao-orcamento-protheus.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [integracao-orcamento-protheus.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "integracao-orcamento-protheus",
  nome: "Integração de orçamento com Protheus",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["python"],
  ordem: 27,
  resumo:
    "Validação de planilhas e envio de registros orçamentários ao Protheus por API.",
  problema:
    "Organizar registros de orçamento e previsões em planilhas e preparar seu envio ao ERP com validação e acompanhamento dos retornos.",
  solucao:
    "Aplicação que lê e valida as estruturas de entrada, organiza os registros para envio à API e acompanha lotes e respostas. O fluxo inclui backup e registros de execução para apoiar a conferência do processamento.",
  comoFoiFeito:
    "Python reúne uma interface Tkinter, leitura e atualização de planilhas com openpyxl e comunicação HTTP com Requests. As rotinas normalizam os campos e validam tabelas antes de montar os lotes e processar os retornos da API do Protheus.",
  impacto:
    "Estrutura a transferência entre planilha e ERP com validação de entrada e rastreabilidade do envio.",
  tecnologias: [
    "Python",
    "Requests",
    "openpyxl",
    "Tkinter",
    "APIs REST",
    "TOTVS Protheus",
  ],
  pipeline: [
    {
      label: "Planilhas de orçamento",
      icone: "table",
    },
    {
      label: "Validação e organização",
      icone: "filter",
    },
    {
      label: "Envio por API",
      icone: "network",
    },
    {
      label: "Protheus",
      icone: "server",
    },
    {
      label: "Retorno e rastreabilidade",
      icone: "file-check",
    },
  ],
  automacao: true,
  relacionados: [
    "bi-executivo-orcamento-desvios",
    "consolidacao-payroll-provisoes",
  ],
};

export default projeto;
