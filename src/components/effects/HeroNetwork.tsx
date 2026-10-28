"use client";
import dynamic from "next/dynamic";
import { Component, useEffect, useState, useRef, type ReactNode } from "react";
import { useExperience } from "@/components/layout/ExperienceProvider";
import { NetworkGraphic } from "./NetworkGraphic";
const NetworkScene = dynamic(() => import("./NetworkScene"), { ssr: false });
class SceneBoundary extends Component<
  { children: ReactNode; onFailure: () => void },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onFailure();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export function HeroNetwork() {
  const { reduced, paused } = useExperience();
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced || paused) return;
    const media = matchMedia("(min-width: 1024px) and (pointer: fine)");
    let settled = false;
    const visible = () => {
      const rect = root.current?.getBoundingClientRect();
      return !!rect && rect.bottom > 0 && rect.top < innerHeight;
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (settled) setEnabled(media.matches && entry.isIntersecting);
    });
    if (root.current) observer.observe(root.current);
    const timer = setTimeout(() => {
      settled = true;
      setEnabled(media.matches && visible());
    }, 2200);
    const update = () => setEnabled(media.matches && visible());
    media.addEventListener("change", update);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, [reduced, paused]);
  return (
    <div
      ref={root}
      className="hero-network"
      data-parallax
      role="img"
      aria-label="Rede conectando Automação, Apps, Web, Dados, Bots e IA"
    >
      <div className="network-corner top-left" />
      <div className="network-corner bottom-right" />
      <span className="network-label">ECOSSISTEMA CONECTADO</span>
      <NetworkGraphic
        showStructure={!(enabled && ready && !reduced && !paused)}
      />
      {enabled && !reduced && !paused ? (
        <div className="network-canvas" aria-hidden="true">
          <SceneBoundary onFailure={() => setReady(false)}>
            <NetworkScene onReady={() => setReady(true)} />
          </SceneBoundary>
        </div>
      ) : null}
      <span className="network-caption">
        <i /> Pessoas. Processos. Sistemas.
      </span>
    </div>
  );
}
