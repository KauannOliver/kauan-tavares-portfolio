"use client";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
const links = [
  ["projetos", "Projetos"],
  ["dashboards", "Dashboards"],
  ["stack", "Stack"],
  ["sobre", "Sobre"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <nav className="container nav-inner" aria-label="Navegação principal">
        <Link href="/" className="brand" aria-label="Kauan Tavares, início">
          <span className="brand-mark">
            k<span>.</span>t
          </span>
          <span>
            Kauan Tavares
            <span className="brand-sub">AUTOMAÇÃO · DEV · DADOS</span>
          </span>
        </Link>
        <button
          className="menu-toggle icon-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="navigation-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div
          id="navigation-links"
          className={`nav-links ${open ? "is-open" : ""}`}
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`${pathname === "/" ? "" : "/"}#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href={`${pathname === "/" ? "" : "/"}#contato`}
            onClick={() => setOpen(false)}
          >
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
