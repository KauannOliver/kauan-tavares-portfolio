import type { Projeto } from "../tipos";

// PENDENTE: [coleta-pracas-pedagio.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [coleta-pracas-pedagio.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "coleta-pracas-pedagio",
  nome: "Coleta de praças de pedágio",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["python"],
  ordem: 30,
  resumo:
    "Extração de tabelas de praças de pedágio por estado e organização dos dados em Excel.",
  problema:
    "Transformar tabelas publicadas em páginas web em arquivos estruturados para consulta e análise.",
  solucao:
    "Conjunto de scripts que consulta páginas por estado, identifica as tabelas e extrai informações como rodovia, localização e referência por eixo, organizando o resultado em planilhas.",
  comoFoiFeito:
    "Requests obtém as páginas, BeautifulSoup interpreta as tabelas HTML e pandas organiza os registros antes de exportá-los para Excel. Os scripts mantêm o mesmo fluxo de coleta para diferentes estados.",
  impacto:
    "Converte o conteúdo das páginas selecionadas em bases tabulares reutilizáveis.",
  tecnologias: ["Python", "Requests", "BeautifulSoup", "pandas"],
  pipeline: [
    {
      label: "Páginas por estado",
      icone: "globe",
    },
    {
      label: "Extração de tabelas",
      icone: "search",
    },
    {
      label: "Normalização dos registros",
      icone: "filter",
    },
    {
      label: "Exportação para Excel",
      icone: "table",
    },
  ],
  automacao: true,
  relacionados: ["consulta-fipe-caminhoes"],
};

export default projeto;
