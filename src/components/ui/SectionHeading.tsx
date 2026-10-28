import type { ReactNode } from "react";
export function SectionHeading({
  numero,
  label,
  title,
  children,
}: {
  numero: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading reveal">
      <div>
        <p className="eyebrow">
          <span>{numero}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children ? <p className="section-description">{children}</p> : null}
    </div>
  );
}
