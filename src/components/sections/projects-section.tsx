"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { itemVariants, sectionMotionProps } from "../animations/section-motion";

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="w-full bg-neutral-100 px-6 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-24 dark:bg-neutral-900"
      {...sectionMotionProps}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected builds with cinematic polish
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Each project blends narrative beats with responsive mechanics, designed to
            keep players engaged and teams aligned.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-950"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="mt-6 w-fit rounded-full px-5 text-xs uppercase tracking-[0.3em]"
              >
                View Case
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

const projects = [
  {
    title: "Astral Drift",
    category: "Action RPG",
    description:
      "A fast-paced combat loop with layered ability timing, built for clarity at high speed.",
    tags: ["Combat", "VFX", "Balance"],
  },
  {
    title: "Signal North",
    category: "Survival",
    description:
      "A moody survival sandbox with procedural objectives and a tactile crafting flow.",
    tags: ["Systems", "Crafting", "UX"],
  },
  {
    title: "Neon Arcade",
    category: "Multiplayer",
    description:
      "A co-op arena prototype focused on tight netcode feedback and readable chaos.",
    tags: ["Netcode", "UI", "Live Ops"],
  },
];
