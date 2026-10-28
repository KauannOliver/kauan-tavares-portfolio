import type { Projeto } from "../tipos";

// PENDENTE: [viagem-automatizada.metadados] Confirmar ano, estado de produção, métricas reais e links adicionais.
// PENDENTE: [viagem-automatizada.narrativa] Informar: problema, comoFoiFeito, impacto, aprendizado.
const projeto: Projeto = {
  slug: "viagem-automatizada",
  nome: "Viagem Automatizada",
  status: "publicado",
  automacao: true,
  contexto: "corporativo",
  categorias: ["power-automate"],
  ordem: 0,
  resumo:
    "Busca, valida e integra informações para criar viagens no Protheus e iniciar a emissão de documentos.",
  tecnologias: ["Power Automate", "TOTVS Protheus", "CT-e", "MDF-e"],
  pipeline: [
    {
      label: "Coleta em múltiplas fontes",
      icone: "circle",
    },
    {
      label: "Tratamento e validação",
      icone: "circle",
    },
    {
      label: "Criação da viagem no Protheus",
      icone: "circle",
    },
    {
      label: "Emissão do CT-e",
      icone: "circle",
    },
    {
      label: "Manifesto (MDF-e)",
      icone: "circle",
    },
    {
      label: "Viagem pronta",
      icone: "circle",
    },
  ],
  destaque: true,
  ordemDestaque: 0,
  solucao:
    "Busca informações em diferentes fontes, trata e valida os dados, insere a viagem no ERP TOTVS Protheus e já inicia automaticamente a emissão de CT-e, manifesto (MDF-e) e demais documentos. Implantado em diversas operações e para diferentes clientes, com novos clientes entrando no processo.",
  subcases: [
    {
      titulo: "Cliente do setor de celulose",
      descricao: "",
    },
    {
      titulo: "Cliente do setor de mineração (A)",
      descricao: "",
    },
    {
      titulo: "Cliente do setor de mineração (B)",
      descricao: "",
    },
  ],
  relacionados: ["controle-viagem-celulose", "controle-viagem-mineracao"],
};

export default projeto;
