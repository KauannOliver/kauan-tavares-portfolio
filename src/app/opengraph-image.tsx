import { perfil } from "@/content/perfil";
import { createOg, ogSize } from "@/lib/og";
export const alt = "Kauan Tavares — Automação, Desenvolvimento e Dados";
export const size = ogSize;
export const contentType = "image/png";
export default function Image() {
  return createOg(perfil.titulo, perfil.frase);
}
