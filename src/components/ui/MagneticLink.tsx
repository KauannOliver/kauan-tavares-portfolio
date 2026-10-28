"use client";
import type { ReactNode } from "react";
import { useExperience } from "@/components/layout/ExperienceProvider";
export function MagneticLink({
  children,
  href,
  className = "",
  ...props
}: {
  children: ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}) {
  const { reduced, paused } = useExperience();
  return (
    <a
      href={href}
      className={`button ${className}`}
      {...props}
      onPointerMove={(event) => {
        if (reduced || paused || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.12}px, ${(event.clientY - rect.top - rect.height / 2) * 0.12}px)`;
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.transform = "";
      }}
    >
      {children}
    </a>
  );
}
