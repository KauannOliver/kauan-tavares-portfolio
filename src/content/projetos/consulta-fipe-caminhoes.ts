import type { Projeto } from "../tipos";

// PENDENTE: [consulta-fipe-caminhoes.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [consulta-fipe-caminhoes.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "consulta-fipe-caminhoes",
  nome: "Consulta FIPE de caminhões",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["web"],
  ordem: 32,
  resumo:
    "Consulta por marca, modelo e ano, com favoritos, atualização de referências e exportação.",
  problema:
    "Consultar e organizar referências de veículos sem repetir a seleção completa de marca, modelo e ano a cada acompanhamento.",
  solucao:
    "Interface para consultar caminhões, salvar favoritos no navegador, atualizar as consultas e gerar arquivos ou impressões com as informações selecionadas.",
  comoFoiFeito:
    "HTML, CSS e JavaScript compõem a aplicação. As consultas utilizam APIs REST e os favoritos ficam no localStorage. Funções separadas organizam os seletores, a consulta, a atualização dos favoritos e as opções de exportação e impressão.",
  impacto:
    "Reúne consulta e organização das referências salvas em um fluxo reutilizável no navegador.",
  tecnologias: ["HTML", "CSS", "JavaScript", "APIs REST"],
  pipeline: [
    {
      label: "Marca, modelo e ano",
      icone: "filter",
    },
    {
      label: "Consulta à API",
      icone: "network",
    },
    {
      label: "Referência do veículo",
      icone: "table",
    },
    {
      label: "Favoritos e atualização",
      icone: "layers",
    },
    {
      label: "Exportação",
      icone: "file-check",
    },
  ],
  relacionados: ["coleta-pracas-pedagio"],
};

export default projeto;
