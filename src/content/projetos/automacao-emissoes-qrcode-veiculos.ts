import type { Projeto } from "../tipos";

// PENDENTE: [automacao-emissoes-qrcode-veiculos.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
const projeto: Projeto = {
  slug: "automacao-emissoes-qrcode-veiculos",
  nome: "Automação de Emissões e QR Code de Veículos",
  status: "publicado",
  automacao: true,
  contexto: "corporativo",
  categorias: ["power-automate"],
  ordem: 2,
  resumo:
    "Automação para consultar dados, verificar registros existentes, gerar QR Codes e alimentar uma lista estruturada para controle operacional.",
  tecnologias: [
    "Power Automate",
    "SharePoint",
    "APIs REST",
    "Power BI",
    "QR Code",
  ],
  problema:
    "O processo manual exigia consultas repetitivas em sistemas diferentes, criação individual de QR Codes e atualização manual de registros, aumentando o tempo gasto, o risco de erro e a dificuldade de rastrear informações.",
  solucao:
    "Criação de um fluxo automatizado que recebe dados de entrada, verifica se a placa já existe na base, gera QR Code quando necessário e registra as informações automaticamente no SharePoint, com tratamento de erros e logs de execução.",
  comoFoiFeito:
    "O fluxo foi desenhado no Power Automate com conectores para SharePoint, API de geração de QR Code e lógica condicional para verificação de duplicidade. Cada etapa foi construída com tratamento de erro e fallback. O resultado alimenta uma lista estruturada que serve como base para consultas e relatórios.",
  impacto:
    "Redução significativa de trabalho manual, padronização do processo, menor retrabalho, melhor controle e rastreabilidade das informações operacionais.",
  aprendizado:
    "Evolução no desenho de fluxos automatizados complexos, integrações via API, controle de erros em automações e otimização de processos em escala.",
  pipeline: [
    {
      label: "Entrada de dados",
      icone: "upload",
    },
    {
      label: "Verificação de existência",
      icone: "search",
    },
    {
      label: "Geração de QR Code",
      icone: "qr-code",
    },
    {
      label: "Registro no SharePoint",
      icone: "cloud",
    },
    {
      label: "Controle operacional",
      icone: "check-circle",
    },
  ],
};

export default projeto;
