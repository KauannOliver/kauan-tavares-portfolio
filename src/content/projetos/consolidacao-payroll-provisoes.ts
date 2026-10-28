import type { Projeto } from "../tipos";

// PENDENTE: [consolidacao-payroll-provisoes.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [consolidacao-payroll-provisoes.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "consolidacao-payroll-provisoes",
  nome: "Consolidação de folha e provisões",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["python"],
  ordem: 29,
  resumo:
    "Padronização e consolidação de planilhas de folha e provisões com backup e acompanhamento.",
  problema:
    "Consolidar arquivos com estruturas e nomenclaturas distintas em bases de saída adequadas ao acompanhamento gerencial.",
  solucao:
    "Aplicação com fluxos separados para folha e provisões. Os arquivos são localizados, padronizados e consolidados, com backup antes das alterações e mensagens de acompanhamento da execução.",
  comoFoiFeito:
    "Python, pandas e openpyxl realizam leitura, tratamento e escrita das planilhas. A interface Tkinter utiliza uma fila de mensagens para acompanhar o processamento sem concentrar a execução na interface. As rotinas harmonizam colunas e organizam os dados por competência e operação.",
  impacto:
    "Produz bases consolidadas e mantém uma trilha de execução e cópias anteriores dos arquivos processados.",
  tecnologias: ["Python", "pandas", "openpyxl", "Tkinter"],
  pipeline: [
    {
      label: "Arquivos de entrada",
      icone: "table",
    },
    {
      label: "Backup",
      icone: "cloud",
    },
    {
      label: "Padronização e consolidação",
      icone: "filter",
    },
    {
      label: "Bases de saída",
      icone: "database",
    },
    {
      label: "Acompanhamento da execução",
      icone: "file-check",
    },
  ],
  automacao: true,
  relacionados: ["integracao-orcamento-protheus"],
};

export default projeto;
