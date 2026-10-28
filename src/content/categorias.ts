import type { CategoriaId } from "./tipos";

export const categorias: {
  id: CategoriaId;
  label: string;
  cor: string;
  icone: string;
  ordem: number;
}[] = [
  {
    id: "power-bi",
    label: "Power BI",
    cor: "#F2C811",
    icone: "bar-chart-3",
    ordem: 0,
  },
  {
    id: "power-automate",
    label: "Power Automate",
    cor: "#079AE1",
    icone: "workflow",
    ordem: 1,
  },
  {
    id: "power-apps",
    label: "Power Apps",
    cor: "#B78AFF",
    icone: "layers",
    ordem: 2,
  },
  { id: "web", label: "Web", cor: "#00D4FF", icone: "globe", ordem: 3 },
  { id: "bots-ia", label: "Bots & IA", cor: "#39FF88", icone: "bot", ordem: 4 },
  { id: "python", label: "Python", cor: "#A5C8FF", icone: "code", ordem: 5 },
];
export function getCategoria(id: string) {
  return categorias.find((categoria) => categoria.id === id);
}
