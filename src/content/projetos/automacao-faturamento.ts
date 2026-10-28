import type { Projeto } from "../tipos";

// PENDENTE: [automacao-faturamento.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [automacao-faturamento.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "automacao-faturamento",
  nome: "Automação de faturamento",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["python"],
  ordem: 34,
  resumo:
    "Tratamento de planilhas e consultas para separar documentos e preparar arquivos de faturamento.",
  problema:
    "Aplicar regras de conferência sobre diferentes entradas e organizar os documentos que podem seguir para faturamento.",
  solucao:
    "Conjunto de dois fluxos: um combina planilhas com consultas de documentos em portal; o outro consolida os dados das planilhas conforme suas regras. Ambos organizam as saídas e os registros que precisam de conferência.",
  comoFoiFeito:
    "Python e pandas identificam cabeçalhos, padronizam colunas e aplicam regras sobre os registros. Selenium participa do fluxo que exige consulta ao portal. Tkinter apoia a seleção dos arquivos e a apresentação dos resultados, com exportação em planilhas e CSV.",
  impacto:
    "Separa documentos por situação e produz arquivos estruturados para a continuidade do processo de faturamento.",
  tecnologias: ["Python", "pandas", "Selenium", "Tkinter"],
  pipeline: [
    {
      label: "Planilhas de entrada",
      icone: "table",
    },
    {
      label: "Consulta quando aplicável",
      icone: "globe",
    },
    {
      label: "Regras por fluxo",
      icone: "filter",
    },
    {
      label: "Separação dos documentos",
      icone: "layers",
    },
    {
      label: "Arquivos de faturamento",
      icone: "file-check",
    },
  ],
  automacao: true,
  subcases: [
    {
      titulo: "Consulta de documentos em portal",
      descricao:
        "Cruza os registros das planilhas com as situações retornadas pelo portal.",
    },
    {
      titulo: "Consolidação de planilhas",
      descricao:
        "Identifica cabeçalhos e aplica as regras de classificação diretamente sobre as entradas.",
    },
  ],
  relacionados: ["consulta-automatizada-faturas", "importador-notas-fiscais"],
};

export default projeto;
