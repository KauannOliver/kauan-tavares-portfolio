"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { getCategoria } from "@/content/categorias";
import type { ProjetoCard } from "@/content/tipos";
import { useExperience } from "@/components/layout/ExperienceProvider";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectCard({ projeto }: { projeto: ProjetoCard }) {
  const categoria = getCategoria(projeto.categorias[0])!;
  const { reduced, paused, depart } = useExperience();
  return (
    <motion.li
      layout={!reduced && !paused}
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="project-item"
      style={{ "--accent": categoria.cor } as React.CSSProperties}
    >
      <article
        className="project-card"
        onPointerMove={(event) => {
          if (reduced || paused || event.pointerType !== "mouse") return;
          const rect = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          event.currentTarget.style.setProperty("--mx", `${x * 100}%`);
          event.currentTarget.style.setProperty("--my", `${y * 100}%`);
          event.currentTarget.style.transform = `perspective(900px) rotateX(${(y - 0.5) * -5}deg) rotateY(${(x - 0.5) * 5}deg)`;
        }}
        onPointerLeave={(event) => {
          event.currentTarget.style.transform = "";
        }}
      >
        <Link
          className="project-link"
          href={`/projeto/${projeto.slug}`}
          aria-label={`Ver projeto: ${projeto.nome}`}
          onClick={(event) => {
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            const preview =
              event.currentTarget.querySelector(".shared-preview");
            if (!preview) return;
            const { top, left, width, height } =
              preview.getBoundingClientRect();
            depart({
              slug: projeto.slug,
              categoria: categoria.id,
              cor: categoria.cor,
              rect: { top, left, width, height },
            });
          }}
        >
          <div className="project-visual">
            <ProjectPreview slug={projeto.slug} categoria={categoria.id} />
            <span className="project-context">
              {projeto.contexto === "corporativo" ? "Corporativo" : "Pessoal"}
            </span>
            {projeto.powerBiUrl ? (
              <span className="fiction-badge">Dados fictícios</span>
            ) : null}
            <span className="project-open">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <div className="project-copy">
            <div className="card-categories">
              {projeto.categorias.map((id) => (
                <span key={id}>{getCategoria(id)?.label}</span>
              ))}
            </div>
            <h3>{projeto.nome}</h3>
            <p>{projeto.resumo}</p>
            {projeto.tecnologias.length ? (
              <ul className="tech-tags" aria-label="Tecnologias">
                {projeto.tecnologias.slice(0, 4).map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
                {projeto.tecnologias.length > 4 ? (
                  <li
                    className="tech-overflow"
                    aria-label={`${projeto.tecnologias.length - 4} tecnologias adicionais nos detalhes`}
                  >
                    +{projeto.tecnologias.length - 4}
                  </li>
                ) : null}
              </ul>
            ) : null}
          </div>
        </Link>
      </article>
    </motion.li>
  );
}
