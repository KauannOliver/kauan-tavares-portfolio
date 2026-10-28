import type { Projeto } from "../tipos";

// PENDENTE: [importador-notas-fiscais.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [importador-notas-fiscais.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "importador-notas-fiscais",
  nome: "Importador de notas fiscais",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["web"],
  ordem: 35,
  resumo:
    "Extensão que valida Excel ou CSV e preenche o formulário de notas após o acesso ao portal.",
  problema:
    "Transferir registros de planilhas para um formulário de notas, acompanhando erros para interromper o fluxo quando necessário.",
  solucao:
    "Extensão que adiciona um comando de importação à página, lê o arquivo selecionado, valida os campos e preenche cada registro. O painel acompanha a execução e interrompe o processamento diante de erros detectados.",
  comoFoiFeito:
    "JavaScript e Chrome Extensions inserem o painel e integram os campos da página. SheetJS lê arquivos Excel, e um parser trata CSV. As rotinas normalizam datas e valores, disparam os eventos dos campos e acompanham o retorno da inclusão.",
  impacto:
    "Organiza a passagem de registros da planilha ao formulário com validação e acompanhamento do processamento.",
  tecnologias: ["JavaScript", "Chrome Extensions", "SheetJS"],
  pipeline: [
    {
      label: "Arquivo Excel ou CSV",
      icone: "upload",
    },
    {
      label: "Validação das colunas",
      icone: "filter",
    },
    {
      label: "Preenchimento do formulário",
      icone: "workflow",
    },
    {
      label: "Inclusão das notas",
      icone: "file-check",
    },
    {
      label: "Acompanhamento e erros",
      icone: "search",
    },
  ],
  automacao: true,
  relacionados: ["automacao-faturamento"],
};

export default projeto;
