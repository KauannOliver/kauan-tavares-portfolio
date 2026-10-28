"use client";
import { motion } from "framer-motion";
import { CategoryPreview } from "./CategoryPreview";
import { useExperience } from "@/components/layout/ExperienceProvider";
import type { CategoriaId } from "@/content/tipos";
export function ProjectPreview({
  slug,
  categoria,
}: {
  slug: string;
  categoria: CategoriaId;
}) {
  const { reduced, paused } = useExperience();
  return (
    <motion.div
      className="shared-preview"
      layoutId={reduced || paused ? undefined : `preview-${slug}`}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <CategoryPreview categoria={categoria} />
    </motion.div>
  );
}
