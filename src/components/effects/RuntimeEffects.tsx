"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useExperience } from "@/components/layout/ExperienceProvider";

export function RuntimeEffects() {
  const { reduced, paused } = useExperience();
  const pathname = usePathname();
  const cursor = useRef<HTMLDivElement>(null);
  const boot = useRef<HTMLDivElement>(null);
  const [bootVisible, setBootVisible] = useState(false);
  const bootTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (bootTimer.current) clearTimeout(bootTimer.current);
    },
    [],
  );
  useEffect(() => {
    if (reduced || paused) return;
    try {
      if (sessionStorage.getItem("portfolio:boot")) return;
      sessionStorage.setItem("portfolio:boot", "1");
    } catch {
      return;
    }
    const frame = requestAnimationFrame(() => setBootVisible(true));
    bootTimer.current = setTimeout(() => setBootVisible(false), 1200);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [reduced, paused]);
  useEffect(() => {
    if (reduced || paused || !matchMedia("(pointer: fine)").matches) return;
    const element = cursor.current;
    if (!element) return;
    const move = (event: PointerEvent) => {
      element.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
      element.dataset.active = String(
        !!(event.target as Element)?.closest("a,button,input"),
      );
      element.style.opacity = "1";
    };
    const leave = () => {
      element.style.opacity = "0";
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      element.style.opacity = "0";
    };
  }, [reduced, paused]);
  useEffect(() => {
    if (reduced || paused) return;
    let disposed = false;
    let cleanup = () => {};
    const timer = setTimeout(async () => {
      const [{ gsap }, { ScrollTrigger }, { default: Lenis }, { SplitText }] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
          import("gsap/SplitText"),
        ]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const splits: { revert: () => void }[] = [];
      const lenis = matchMedia("(min-width: 1024px) and (pointer: fine)")
        .matches
        ? new Lenis({
            autoRaf: false,
            anchors: true,
            smoothWheel: true,
            duration: 0.8,
          })
        : null;
      const raf = (time: number) => lenis?.raf(time * 1000);
      if (lenis) {
        gsap.ticker.add(raf);
        lenis.on("scroll", ScrollTrigger.update);
      }
      const context = gsap.context(() => {
        gsap.utils
          .toArray<HTMLElement>(".section-heading h2")
          .forEach((element) => {
            if (element.getBoundingClientRect().top <= innerHeight) return;
            const accessibleTitle = element.innerText
              .replace(/\s+/g, " ")
              .trim();
            const split = SplitText.create(element, {
              type: "lines",
              mask: "lines",
              aria: "auto",
              autoSplit: true,
              onSplit: (self) => {
                element.setAttribute("aria-label", accessibleTitle);
                return gsap.from(self.lines, {
                  yPercent: 110,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 92%",
                    once: true,
                  },
                });
              },
            });
            splits.push(split);
          });
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
          if (element.getBoundingClientRect().top > innerHeight)
            gsap.fromTo(
              element,
              { y: 22, clipPath: "inset(0 0 12% 0)" },
              {
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: 0.75,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 94%",
                  once: true,
                },
              },
            );
        });
        gsap.utils.toArray<HTMLElement>(".pipeline").forEach((element) => {
          ScrollTrigger.create({
            trigger: element,
            start: "top 90%",
            once: true,
            onEnter: () => (element.dataset.visible = "true"),
          });
        });
        gsap.utils
          .toArray<HTMLElement>("[data-parallax]")
          .forEach((element) => {
            gsap.to(element, {
              yPercent: 4,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          });
      });
      // Filtering changes the document height; recalculate triggers for sections below the grid.
      let refreshFrame = 0;
      const layoutObserver = new ResizeObserver(() => {
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      });
      const main = document.querySelector("main");
      if (main) layoutObserver.observe(main);
      const dialogObserver = new MutationObserver(() => {
        if (document.querySelector("dialog[open]")) lenis?.stop();
        else lenis?.start();
      });
      dialogObserver.observe(document.body, {
        subtree: true,
        attributes: true,
        attributeFilter: ["open"],
      });
      cleanup = () => {
        layoutObserver.disconnect();
        cancelAnimationFrame(refreshFrame);
        dialogObserver.disconnect();
        context.revert();
        splits.forEach((split) => split.revert());
        gsap.ticker.remove(raf);
        lenis?.destroy();
      };
    }, 1000);
    return () => {
      disposed = true;
      clearTimeout(timer);
      cleanup();
    };
  }, [reduced, paused, pathname]);
  return (
    <>
      <div className="custom-cursor" aria-hidden="true" ref={cursor} />
      {bootVisible && !reduced && !paused ? (
        <div ref={boot} className="boot-log" aria-hidden="true">
          <span>❯ iniciando conexões</span>
          <span>✓ interface pronta</span>
        </div>
      ) : null}
    </>
  );
}
