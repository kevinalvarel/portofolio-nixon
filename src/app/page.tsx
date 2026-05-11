"use client";

import { useEffect, useState } from "react";
import { DesktopParallaxHeroImages } from "@/components/ui/desktop-parallax";
import { MobileParallaxHeroImages } from "@/components/ui/mobile-parallax";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => {
      mediaQuery.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
};

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>

      <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-50 px-6 py-16 sm:px-8 md:justify-start md:px-12 lg:px-20 xl:px-24 dark:bg-neutral-950">
        {isDesktop ? (
          <DesktopParallaxHeroImages className="hidden md:block" images={images} />
        ) : (
          <MobileParallaxHeroImages className="block md:hidden" images={images} />
        )}
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-4 text-center sm:max-w-2xl md:items-start md:text-left lg:max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
            Nixon Grady
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-neutral-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] sm:text-5xl md:text-6xl lg:text-7xl dark:text-neutral-100 dark:drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            Game Programmer
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] sm:text-lg dark:text-neutral-400 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
            Hi, I&apos;m Nixon Grady, a game developer. I craft immersive, systems-driven
            experiences with a strong foundation in gameplay, tooling, and performance.
            I love collaborating on bold ideas. Let&apos;s build something unforgettable.
          </p>
        </div>
      </div>
    </>
  );
}

const images = [
  "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
  "https://assets.aceternity.com/components/3d-globe.webp",
  "https://assets.aceternity.com/components/keyboard-2.webp",
  "https://assets.aceternity.com/components/hero-1.webp",
  "https://assets.aceternity.com/components/hero-2.webp",
  "https://assets.aceternity.com/components/hero-3.webp",
];
