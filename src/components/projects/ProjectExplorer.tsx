"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Terminal, X } from "lucide-react";
import { useExperience } from "@/components/layout/ExperienceProvider";
import { filtrarProjetos, filtrosIniciais, queryFiltros } from "@/lib/filtros";
import type { ProjetoCard as Card } from "@/content/tipos";
import { ProjectCard } from "./ProjectCard";

function TerminalQuery({ query }: { query: string }) {
  const { reduced, paused } = useExperience();
  const [count, setCount] = useState(query.length);
  useEffect(() => {
    if (reduced || paused) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 500, 1);
      setCount(Math.floor(query.length * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [query, reduced, paused]);
  return (
    <div className="sql-terminal">
      <div className="terminal-heading">
        <span>
          <Terminal size={14} /> projetos.sql
        </span>
        <span className="terminal-ready">
          <i /> consulta local
        </span>
      </div>
      <div className="terminal-code" aria-hidden="true">
        <span className="terminal-prompt">❯</span>
        <code>
          {reduced || paused ? query : query.slice(0, count)}
          <span className="terminal-caret">▌</span>
        </code>
      </div>
      <span className="sr-only">
        Filtros atualizados imediatamente. A consulta exibida é apenas
        ilustrativa.
      </span>
    </div>
  );
}
export function ProjectExplorer({
  projetos,
  categorias,
}: {
  projetos: Card[];
  categorias: { id: string; label: string }[];
}) {
  const { filtros, setFiltros, reduced, paused } = useExperience();
  const lista = filtrarProjetos(projetos, filtros);
  const hasFilter = JSON.stringify(filtros) !== JSON.stringify(filtrosIniciais);
  return (
    <>
      <TerminalQuery query={queryFiltros(filtros)} />
      <div className="explorer-controls">
        <div
          className="category-filters"
          role="group"
          aria-label="Filtrar por categoria"
        >
          {[{ id: "todos", label: "Todos" }, ...categorias].map((categoria) => (
            <button
              key={categoria.id}
              aria-pressed={filtros.categoria === categoria.id}
              onClick={() =>
                setFiltros((old) => ({ ...old, categoria: categoria.id }))
              }
            >
              {categoria.label}
            </button>
          ))}
        </div>
        <div className="search-context">
          <div
            className="context-filters"
            role="group"
            aria-label="Filtrar por contexto"
          >
            {[
              ["todos", "Todos"],
              ["corporativo", "Corporativos"],
              ["pessoal", "Pessoais"],
            ].map(([id, label]) => (
              <button
                key={id}
                aria-pressed={filtros.contexto === id}
                onClick={() => setFiltros((old) => ({ ...old, contexto: id }))}
              >
                {label}
              </button>
            ))}
          </div>
          <label className="search-box">
            <Search size={17} />
            <span className="sr-only">Buscar projetos</span>
            <input
              type="search"
              placeholder="Buscar por projeto ou tecnologia"
              value={filtros.busca}
              onChange={(event) =>
                setFiltros((old) => ({ ...old, busca: event.target.value }))
              }
            />
            <kbd aria-hidden="true">⌕</kbd>
          </label>
        </div>
        <div className="results-bar">
          <span role="status" aria-live="polite">
            {lista.length}{" "}
            {lista.length === 1 ? "projeto encontrado" : "projetos encontrados"}
          </span>
          {hasFilter ? (
            <button
              className="clear-filters"
              onClick={() => setFiltros({ ...filtrosIniciais })}
            >
              <X size={13} />
              Limpar filtros
              {filtros.tecnologia ? ` · ${filtros.tecnologia}` : ""}
            </button>
          ) : (
            <span>
              <SlidersHorizontal size={13} /> Explore as conexões
            </span>
          )}
        </div>
      </div>
      {lista.length ? (
        <ul className="project-grid">
          <AnimatePresence
            initial={false}
            mode={reduced || paused ? "sync" : "popLayout"}
          >
            {lista.map((projeto) => (
              <ProjectCard key={projeto.slug} projeto={projeto} />
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <div className="empty-state">
          <Search size={28} />
          <h3>Nenhum projeto encontrado</h3>
          <p>Experimente outro termo ou remova os filtros.</p>
          <button
            className="button button-secondary"
            onClick={() => setFiltros({ ...filtrosIniciais })}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  );
}
