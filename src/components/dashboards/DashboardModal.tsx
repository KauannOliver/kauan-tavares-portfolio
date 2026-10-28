"use client";
import { useEffect, useRef, useState, useId, type RefObject } from "react";
import { ExternalLink, Maximize2, X } from "lucide-react";
import { powerBiUrlValida } from "@/lib/validacao";
export default function DashboardModal({
  nome,
  url,
  onClose,
  returnFocusRef,
}: {
  nome: string;
  url: string;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [loading, setLoading] = useState(true);
  const [slow, setSlow] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");
  const id = useId();
  useEffect(() => {
    const dialog = ref.current;
    const previous = returnFocusRef.current;
    dialog?.showModal();
    dialog
      ?.querySelector<HTMLButtonElement>('[aria-label="Fechar dashboard"]')
      ?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = original;
      previous?.focus();
    };
  }, [returnFocusRef]);
  useEffect(() => {
    const timer = setTimeout(() => setSlow(true), 15000);
    return () => clearTimeout(timer);
  }, []);
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (ref.current?.requestFullscreen)
        await ref.current.requestFullscreen();
      else setFullscreenError("Use a opção de tela cheia do seu navegador.");
    } catch {
      setFullscreenError("A tela cheia não está disponível neste navegador.");
    }
  }
  return (
    <dialog
      ref={ref}
      className="dashboard-dialog"
      aria-labelledby={id}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      data-lenis-prevent
    >
      <div className="dashboard-dialog-content">
        <header>
          <div>
            <span className="fiction-badge">Dados fictícios</span>
            <h2 id={id}>{nome}</h2>
          </div>
          <div className="dialog-actions">
            <button
              className="icon-button"
              onClick={fullscreen}
              aria-label="Alternar tela cheia"
            >
              <Maximize2 size={19} />
            </button>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label="Fechar dashboard"
            >
              <X size={21} />
            </button>
          </div>
        </header>
        <div className="dashboard-frame">
          {loading ? (
            <div className="dashboard-skeleton" role="status">
              <span className="skeleton-icon" />
              <p>
                {slow
                  ? "O relatório está demorando para responder. Você pode abri-lo em outra aba."
                  : "Carregando dashboard…"}
              </p>
            </div>
          ) : null}
          {powerBiUrlValida(url) ? (
            <iframe
              title={`${nome} — dados fictícios`}
              src={url}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setLoading(false)}
            />
          ) : (
            <p>Endereço do relatório indisponível.</p>
          )}
        </div>
        <footer>
          <p role="status">
            {fullscreenError ||
              "Demonstração com dados fictícios. Relatório hospedado no Power BI."}
          </p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Abrir no Power BI <ExternalLink size={14} />
          </a>
        </footer>
      </div>
    </dialog>
  );
}
