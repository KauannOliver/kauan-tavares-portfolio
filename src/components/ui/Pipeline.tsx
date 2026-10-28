import { Icon } from "./Icon";
import type { Projeto } from "@/content/tipos";
export function Pipeline({
  steps,
}: {
  steps: NonNullable<Projeto["pipeline"]>;
}) {
  if (!steps.length) return null;
  return (
    <ol className="pipeline" aria-label="Etapas do processo">
      {steps.map((step, index) => (
        <li
          key={`${step.label}-${index}`}
          style={{ "--step": index } as React.CSSProperties}
        >
          <span className="pipeline-icon">
            <Icon nome={step.icone} />
          </span>
          <span>{step.label}</span>
          {index < steps.length - 1 && (
            <span className="pipeline-connection" aria-hidden="true">
              <i />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
