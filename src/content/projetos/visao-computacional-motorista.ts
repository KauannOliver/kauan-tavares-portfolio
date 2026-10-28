import type { Projeto } from "../tipos";

// PENDENTE: [visao-computacional-motorista.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [visao-computacional-motorista.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "visao-computacional-motorista",
  nome: "Monitoramento visual de olhos fechados",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["python", "bots-ia"],
  ordem: 37,
  resumo:
    "Análise de vídeo com inferência de olhos fechados, acompanhamento temporal e alerta sonoro.",
  problema:
    "Relacionar a detecção visual de olhos fechados ao tempo observado e apresentar um alerta quando a condição configurada é atingida.",
  solucao:
    "Projeto de visão computacional que lê os frames de vídeo, executa a inferência e acompanha a persistência da condição detectada. A interface apresenta as detecções e um indicador temporal, com acionamento de áudio.",
  comoFoiFeito:
    "Python e OpenCV controlam a captura e a apresentação do vídeo. Ultralytics/YOLO executa a inferência com o modelo configurado e a lógica temporal determina o acionamento do alerta. pygame fornece a reprodução do áudio.",
  impacto:
    "Demonstra a integração entre captura, inferência, acompanhamento temporal e resposta sonora.",
  tecnologias: ["Python", "OpenCV", "Ultralytics/YOLO", "pygame"],
  pipeline: [
    {
      label: "Captura do vídeo",
      icone: "globe",
    },
    {
      label: "Inferência visual",
      icone: "sparkles",
    },
    {
      label: "Acompanhamento temporal",
      icone: "calculator",
    },
    {
      label: "Indicador e alerta sonoro",
      icone: "send",
    },
  ],
};

export default projeto;
