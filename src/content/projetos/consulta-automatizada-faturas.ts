import type { Projeto } from "../tipos";

// PENDENTE: [consulta-automatizada-faturas.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [consulta-automatizada-faturas.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "consulta-automatizada-faturas",
  nome: "Consulta automatizada de faturas",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["python"],
  ordem: 33,
  resumo:
    "Leitura de planilhas, consulta de faturas em portal e atualização das situações e motivos encontrados.",
  problema:
    "Consultar diferentes faturas e reunir seus resultados nas planilhas de acompanhamento, preservando observações existentes.",
  solucao:
    "Aplicação que seleciona os registros a consultar, navega no portal, captura a situação e o motivo disponível e grava os resultados nas planilhas. A interface acompanha o progresso e permite configurar a execução.",
  comoFoiFeito:
    "Python e Tkinter organizam o plano de consulta e a interface. Playwright executa a navegação e a leitura dos resultados, enquanto openpyxl identifica colunas e atualiza os campos necessários sem apagar observações não substituídas pelo fluxo.",
  impacto:
    "Estrutura a consulta em lote e a atualização do acompanhamento com resultados vinculados aos registros de entrada.",
  tecnologias: ["Python", "Playwright", "openpyxl", "Tkinter"],
  pipeline: [
    {
      label: "Planilha de faturas",
      icone: "table",
    },
    {
      label: "Seleção dos registros",
      icone: "filter",
    },
    {
      label: "Consulta ao portal",
      icone: "globe",
    },
    {
      label: "Situação e motivo",
      icone: "search",
    },
    {
      label: "Atualização dos resultados",
      icone: "file-check",
    },
  ],
  automacao: true,
  relacionados: ["automacao-faturamento", "importador-notas-fiscais"],
};

export default projeto;
