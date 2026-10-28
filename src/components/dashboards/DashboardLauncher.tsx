"use client";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
const DashboardModal = dynamic(() => import("./DashboardModal"));
export function DashboardLauncher({
  nome,
  url,
}: {
  nome: string;
  url: string;
}) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={trigger}
        className="button button-secondary dashboard-launch"
        onClick={() => setOpen(true)}
      >
        Abrir dashboard <ArrowUpRight size={16} />
        <span className="sr-only">: {nome}</span>
      </button>
      {open ? (
        <DashboardModal
          nome={nome}
          url={url}
          returnFocusRef={trigger}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
