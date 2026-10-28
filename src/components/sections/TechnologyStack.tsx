"use client";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { useExperience } from "@/components/layout/ExperienceProvider";
import { filtrosIniciais } from "@/lib/filtros";
type Tech = {
  nome: string;
  icone: string;
  cor: string;
  grupo: string;
  count: number;
};
export function TechnologyStack({ tecnologias }: { tecnologias: Tech[] }) {
  const { setFiltros, reduced, paused } = useExperience();
  const groups = [...new Set(tecnologias.map((tech) => tech.grupo))];
  return (
    <>
      <div className="stack-groups">
        {groups.map((grupo) => (
          <div className="stack-group panel reveal" key={grupo}>
            <h3>{grupo}</h3>
            {tecnologias
              .filter((tech) => tech.grupo === grupo)
              .map((tech) => (
                <button
                  key={tech.nome}
                  className="stack-tech"
                  onClick={() => {
                    setFiltros({ ...filtrosIniciais, tecnologia: tech.nome });
                    document.getElementById("projetos")?.scrollIntoView({
                      behavior: reduced || paused ? "instant" : "smooth",
                    });
                  }}
                  aria-label={`${tech.nome} ${tech.count} ${tech.count === 1 ? "projeto" : "projetos"} — filtrar catálogo`}
                >
                  <span className="tech-icon" style={{ color: tech.cor }}>
                    <Icon nome={tech.icone} size={18} />
                  </span>
                  <span>{tech.nome}</span>
                  <span className="tech-count">{tech.count}</span>
                  <ArrowUpRight size={14} />
                </button>
              ))}
          </div>
        ))}
      </div>
      <div className="marquee" aria-hidden="true">
        <div>
          {[0, 1].map((copy) => (
            <span className="marquee-group" key={copy}>
              {tecnologias.map((tech) => (
                <span key={tech.nome}>
                  <i /> {tech.nome}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
