import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main id="conteudo" className="container not-found">
      <p className="eyebrow">404 / CONEXÃO NÃO ENCONTRADA</p>
      <h1>Este caminho não está no mapa.</h1>
      <p>Explore os projetos publicados para encontrar uma nova conexão.</p>
      <Link href="/#projetos" className="button button-primary">
        <ArrowLeft size={17} />
        Ver projetos
      </Link>
    </main>
  );
}
