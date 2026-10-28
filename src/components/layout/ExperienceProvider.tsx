"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { LayoutGroup, MotionConfig, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { CategoriaId, Filtros } from "@/content/tipos";
import { filtrosIniciais } from "@/lib/filtros";
import { CategoryPreview } from "@/components/projects/CategoryPreview";

type Departure = {
  slug: string;
  categoria: CategoriaId;
  cor: string;
  rect: { top: number; left: number; width: number; height: number };
};
const Experience = createContext<{
  paused: boolean;
  reduced: boolean;
  filtros: Filtros;
  setFiltros: (value: Filtros | ((value: Filtros) => Filtros)) => void;
  depart: (value: Departure) => void;
}>({
  paused: false,
  reduced: true,
  filtros: filtrosIniciais,
  setFiltros: () => {},
  depart: () => {},
});
export const useExperience = () => useContext(Experience);
export function ExperienceProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [filtros, setFiltros] = useState(filtrosIniciais);
  const [departure, setDeparture] = useState<Departure | null>(null);
  const departureTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    document.documentElement.dataset.motion = paused || reduced ? "off" : "on";
  }, [paused, reduced]);
  useEffect(
    () => () => {
      if (departureTimer.current) clearTimeout(departureTimer.current);
    },
    [],
  );
  const depart = (value: Departure) => {
    if (paused || reduced) return;
    if (departureTimer.current) clearTimeout(departureTimer.current);
    setDeparture(value);
    departureTimer.current = setTimeout(() => setDeparture(null), 2200);
  };
  return (
    <Experience.Provider
      value={{ paused, reduced, filtros, setFiltros, depart }}
    >
      <MotionConfig reducedMotion={paused ? "always" : "user"}>
        <LayoutGroup id="portfolio">
          {children}
          {departure && (
            <motion.div
              aria-hidden="true"
              className="departure-preview"
              layoutId={`preview-${departure.slug}`}
              style={{ ...departure.rect, color: departure.cor }}
            >
              <CategoryPreview categoria={departure.categoria} />
            </motion.div>
          )}
          <button
            className="motion-control"
            onClick={() => setPaused((value) => !value)}
            aria-pressed={paused}
            aria-label={paused ? "Retomar animações" : "Pausar animações"}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
            <span>{paused ? "Retomar" : "Pausar"} animações</span>
          </button>
          <DepartureArrival onArrive={() => setDeparture(null)} />
        </LayoutGroup>
      </MotionConfig>
    </Experience.Provider>
  );
}
function DepartureArrival({ onArrive }: { onArrive: () => void }) {
  const pathname = usePathname();
  const callback = useRef(onArrive);
  useEffect(() => {
    callback.current = onArrive;
  });
  useEffect(() => {
    if (!pathname.startsWith("/projeto/")) return;
    const timer = setTimeout(() => callback.current(), 450);
    return () => clearTimeout(timer);
  }, [pathname]);
  return null;
}
