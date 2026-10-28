import type { Projeto } from "../tipos";

// PENDENTE: [app-integrado-teamculture.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [app-integrado-teamculture.narrativa] Informar: problema, solucao, comoFoiFeito, impacto, aprendizado.
const projeto: Projeto = {
  slug: "app-integrado-teamculture",
  nome: "App integrado ao TeamCulture via API",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["power-apps"],
  ordem: 4,
  resumo: "Comunicação direta com plataforma externa por API.",
  tecnologias: ["Power Apps", "APIs REST", "TeamCulture"],
  pipeline: [
    {
      label: "Ação no app",
      icone: "circle",
    },
    {
      label: "Requisição à API",
      icone: "circle",
    },
    {
      label: "Plataforma TeamCulture",
      icone: "circle",
    },
    {
      label: "Retorno dos dados",
      icone: "circle",
    },
    {
      label: "Atualização no app",
      icone: "circle",
    },
  ],
};

export default projeto;
