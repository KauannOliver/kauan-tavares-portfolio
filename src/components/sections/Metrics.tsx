"use client";
import { useEffect, useRef } from "react";
import { useExperience } from "@/components/layout/ExperienceProvider";
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { reduced, paused } = useExperience();
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || paused) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 900, 1);
          element.textContent = String(
            Math.round(value * (1 - Math.pow(1 - t, 3))),
          ).padStart(2, "0");
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = String(value).padStart(2, "0");
    };
  }, [value, reduced, paused]);
  return (
    <span ref={ref} aria-hidden="true">
      {String(value).padStart(2, "0")}
    </span>
  );
}
export function Metrics({
  metricas,
  manuais,
}: {
  metricas: {
    projetos: number;
    dashboards: number;
    automacoes: number;
    tecnologias: number;
  };
  manuais: { valor: string; rotulo: string }[];
}) {
  return (
    <section
      className="metrics-section container"
      aria-label="Portfólio em números"
    >
      <div className="metrics-grid">
        {[
          [metricas.projetos, "Projetos publicados"],
          [metricas.dashboards, "Dashboards públicos"],
          [metricas.automacoes, "Automações"],
          [metricas.tecnologias, "Tecnologias conectadas"],
        ].map(([value, label]) => (
          <div className="metric" key={label}>
            <strong>
              <Counter value={Number(value)} />
              <span className="sr-only">{value}</span>
              <span className="metric-dot" aria-hidden="true">
                .
              </span>
            </strong>
            <span>{label}</span>
          </div>
        ))}
        {manuais
          .filter((m) => m.valor && m.rotulo)
          .map((m) => (
            <div className="metric" key={m.rotulo}>
              <strong>{m.valor}</strong>
              <span>{m.rotulo}</span>
            </div>
          ))}
      </div>
      <p className="metrics-note">
        Contagens calculadas a partir dos projetos publicados.
      </p>
    </section>
  );
}
