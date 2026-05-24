"use client";

import { motion } from "framer-motion";
import { itemVariants, sectionMotionProps } from "../animations/section-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="w-full bg-[radial-gradient(80%_60%_at_20%_0%,_rgba(243,234,200,0.75),_transparent_70%)] px-6 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-24"
      {...sectionMotionProps}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(96,96,96,0.15),_rgba(243,234,200,0.55))]" />
          <div className="relative flex h-full flex-col justify-end gap-3">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              About the craft
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">Playful systems, grounded UX</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              I prototype fast, test with players, and polish the feel until it clicks.
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col gap-5" variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Designing moments that feel alive
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            I specialize in gameplay loops, performance-minded UI, and cinematic moment
            design. My work blends technical precision with a sense of wonder, turning
            complex systems into intuitive, player-first experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            {aboutHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const aboutHighlights = [
  "Gameplay systems",
  "Tooling + pipeline",
  "Performance tuning",
  "Cinematic UX",
];
