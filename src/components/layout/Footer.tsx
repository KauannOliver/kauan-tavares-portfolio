import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { perfil } from "@/content/perfil";
export function Footer() {
  return (
    <footer className="site-footer container">
      <Link className="footer-name" href="/">
        Kauan Tavares<span>Automação, Desenvolvimento e Dados</span>
      </Link>
      <span className="footer-note">Conexões que viram soluções.</span>
      <a href={perfil.github} target="_blank" rel="noopener noreferrer">
        GitHub <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}
