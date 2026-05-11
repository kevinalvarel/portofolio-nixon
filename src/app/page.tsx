"use client";

import { motion, Variants } from "motion/react";
import { MobileParallaxHeroImages } from "@/components/ui/mobile-parallax";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative grid min-h-screen w-full grid-cols-1 gap-8 overflow-hidden bg-neutral-50 px-6 py-16 sm:px-8 md:grid-cols-2 md:gap-12 md:px-12 lg:px-20 xl:px-24 dark:bg-neutral-950">

      {/* Visual Area (Mobile Tops, Desktop Right) */}
      <div className="order-1 md:order-2 relative flex min-h-[300px] w-full items-center justify-center overflow-hidden md:h-full">
        <MobileParallaxHeroImages
          className="absolute inset-0 md:relative md:inset-auto md:h-full md:w-full"
          images={images}
        />
      </div>

      {/* Content Area (Mobile Bottom, Desktop Left) */}
      <div className="z-10 order-2 md:order-1 flex w-full flex-col justify-center">
        <motion.div
          className="relative flex w-full max-w-2xl flex-col items-center gap-4 text-center sm:max-w-2xl md:items-start md:text-left lg:max-w-6xl"
          variants={textContainerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400"
            variants={textItemVariants}
          >
            Nixon Grady
          </motion.p>
          <motion.h1
            className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] sm:text-5xl md:text-6xl lg:text-7xl dark:text-neutral-100 dark:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]"
            variants={textItemVariants}
          >
            Game Programmer
          </motion.h1>
          <motion.p
            className="max-w-2xl text-base leading-relaxed text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] sm:text-lg dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]"
            variants={textItemVariants}
          >
            Hi, I&apos;m Nixon Grady, a game developer. I craft immersive, systems-driven
            experiences with a strong foundation in gameplay, tooling, and performance.
            I love collaborating on bold ideas. Let&apos;s build something unforgettable.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 pt-4 md:justify-start"
            variants={textItemVariants}
          >
            <Button variant={"default"} className="rounded-full px-7 text-xs uppercase tracking-[0.3em] cursor-pointer">
              View Portfolio
            </Button>
            <Button variant={"outline"} className="rounded-full px-7 text-xs uppercase tracking-[0.3em] cursor-pointer">
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];
