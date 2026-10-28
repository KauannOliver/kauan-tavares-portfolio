import type { Projeto } from "../tipos";

// PENDENTE: [sonora-inteligencia-vocal.metadados] Confirmar ano, estado de produção, métricas reais e links públicos.
// PENDENTE: [sonora-inteligencia-vocal.aprendizado] Informar o aprendizado pessoal do projeto.
const projeto: Projeto = {
  slug: "sonora-inteligencia-vocal",
  nome: "Sonora — Inteligência vocal",
  status: "publicado",
  contexto: "pessoal",
  categorias: ["web", "bots-ia"],
  ordem: 38,
  resumo:
    "Síntese de voz e transcrição de áudio em um estúdio com histórico local e exportação.",
  problema:
    "Reunir a geração de voz a partir de texto e a transcrição de arquivos de áudio em uma interface com revisão e histórico.",
  solucao:
    "Estúdio com dois fluxos complementares: Sonora Voice converte texto em áudio com seleção de voz e ajustes de síntese; Sonora Scribe transcreve arquivos, organiza os segmentos e processa lotes. O usuário pode revisar, reproduzir e exportar os resultados, com histórico mantido no navegador.",
  comoFoiFeito:
    "Next.js, React, TypeScript e Tailwind CSS compõem a interface. As rotas de API validam as entradas e integram a síntese ElevenLabs e a transcrição Groq com Whisper Large V3. O navegador mantém os históricos e prepara exportações, incluindo texto consolidado das transcrições. O fluxo trata limites e indisponibilidade dos provedores.",
  impacto:
    "Disponibiliza geração de áudio e transcrição em uma experiência comum, com revisão, histórico e arquivos de saída.",
  tecnologias: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "ElevenLabs",
    "Groq",
    "Whisper Large V3",
  ],
  pipeline: [
    {
      label: "Texto ou arquivo de áudio",
      icone: "upload",
    },
    {
      label: "Validação da entrada",
      icone: "filter",
    },
    {
      label: "Síntese ou transcrição",
      icone: "sparkles",
    },
    {
      label: "Revisão e histórico",
      icone: "layers",
    },
    {
      label: "Exportação do resultado",
      icone: "file-check",
    },
  ],
  destaque: true,
  ordemDestaque: 1,
  subcases: [
    {
      titulo: "Sonora Voice",
      descricao:
        "Texto para voz com seleção, ajustes de síntese, prévia e exportação de áudio.",
    },
    {
      titulo: "Sonora Scribe",
      descricao:
        "Áudio para texto com processamento em lote, segmentos, histórico e exportação consolidada.",
    },
  ],
};

export default projeto;
