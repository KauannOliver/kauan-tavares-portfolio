import type { Projeto } from "../tipos";

// PENDENTE: [extracao-documentacao-operacional.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [extracao-documentacao-operacional.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "extracao-documentacao-operacional",
  nome: "Extração de documentação operacional",
  status: "publicado",
  contexto: "corporativo",
  categorias: ["python"],
  ordem: 28,
  resumo:
    "Navegação e extração de páginas de documentação para arquivos de texto organizados.",
  problema:
    "Reunir o conteúdo de diferentes páginas operacionais em arquivos que possam ser consultados e organizados localmente.",
  solucao:
    "Script que percorre uma lista de páginas após a autenticação, aguarda os elementos de conteúdo e salva os textos extraídos em arquivos separados por assunto.",
  comoFoiFeito:
    "Python e Selenium controlam o navegador Chrome. As esperas explícitas localizam os elementos da página e a escrita em UTF-8 preserva o conteúdo textual e a referência de atualização apresentada na origem.",
  impacto:
    "Disponibiliza uma cópia textual organizada dos conteúdos selecionados para consulta local.",
  tecnologias: ["Python", "Selenium"],
  pipeline: [
    {
      label: "Navegação autenticada",
      icone: "globe",
    },
    {
      label: "Seleção de páginas",
      icone: "layers",
    },
    {
      label: "Extração dos textos",
      icone: "filter",
    },
    {
      label: "Organização em arquivos",
      icone: "file-check",
    },
  ],
  automacao: true,
};

export default projeto;
