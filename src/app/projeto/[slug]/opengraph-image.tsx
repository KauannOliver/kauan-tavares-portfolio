import { notFound } from "next/navigation";
import { getProjeto, projetosPublicados } from "@/lib/catalogo";
import { getCategoria } from "@/content/categorias";
import { createOg, ogSize } from "@/lib/og";
export const alt = "Projeto de Kauan Tavares";
export const size = ogSize;
export const contentType = "image/png";
export function generateStaticParams() {
  return projetosPublicados.map(({ slug }) => ({ slug }));
}
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projeto = getProjeto(slug);
  if (!projeto) notFound();
  return createOg(
    projeto.nome,
    projeto.resumo,
    getCategoria(projeto.categorias[0])?.cor,
  );
}
