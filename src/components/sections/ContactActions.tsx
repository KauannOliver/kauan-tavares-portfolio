"use client";
import { Github, Linkedin } from "@/components/ui/SocialIcons";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { MagneticLink } from "@/components/ui/MagneticLink";
export function ContactActions({
  email,
  github,
  linkedin,
}: {
  email: string;
  github: string;
  linkedin: string;
}) {
  const [status, setStatus] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("E-mail copiado!");
    } catch {
      setStatus("Não foi possível copiar. Selecione o e-mail abaixo.");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(""), 4000);
  }
  return (
    <div className="contact-actions">
      <div className="contact-buttons">
        <MagneticLink href={`mailto:${email}`} className="button-primary">
          Enviar e-mail <ArrowUpRight size={18} />
        </MagneticLink>
        <button className="button button-secondary" onClick={copy}>
          {status === "E-mail copiado!" ? (
            <Check size={17} />
          ) : (
            <Copy size={17} />
          )}
          Copiar e-mail
        </button>
        <MagneticLink
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          <Linkedin size={17} />
          LinkedIn
        </MagneticLink>
        <MagneticLink
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          <Github size={17} />
          GitHub
        </MagneticLink>
      </div>
      <p className="contact-email">
        <Mail size={14} />
        <span>{email}</span>
      </p>
      <p className="copy-status" role="status" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
