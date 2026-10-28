"use client";
import { useEffect, useState } from "react";
import { useExperience } from "@/components/layout/ExperienceProvider";
const words = ["Automação", "Desenvolvimento", "Dados", "IA"];
const symbols = "01/{}<>_";
export function ScrambleText() {
  const { reduced, paused } = useExperience();
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (reduced || paused) return;
    let word = 0;
    let tick: ReturnType<typeof setInterval> | undefined;
    const interval = setInterval(() => {
      word = (word + 1) % words.length;
      const value = words[word];
      let step = 0;
      if (tick) clearInterval(tick);
      tick = setInterval(() => {
        step++;
        setText(
          value
            .split("")
            .map((letter, i) =>
              i < step ? letter : symbols[(i + step) % symbols.length],
            )
            .join(""),
        );
        if (step >= value.length && tick) clearInterval(tick);
      }, 32);
    }, 3500);
    return () => {
      clearInterval(interval);
      if (tick) clearInterval(tick);
    };
  }, [reduced, paused]);
  return (
    <span className="scramble" aria-hidden="true">
      <span className="terminal-prompt">~/</span>
      {reduced || paused ? words[0] : text}
      <span className="terminal-caret">_</span>
    </span>
  );
}
