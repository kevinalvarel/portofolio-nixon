"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { itemVariants, sectionMotionProps } from "../animations/section-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="w-full bg-[radial-gradient(70%_55%_at_80%_0%,_rgba(224,224,224,0.75),_transparent_70%)] px-6 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-24"
      {...sectionMotionProps}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500 dark:text-neutral-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build the next great moment?
          </h2>
          <p className="text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Share your vision and I will help you shape it into a playable, performant
            experience. I respond within 48 hours.
          </p>
          <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-lg dark:border-neutral-800 dark:bg-neutral-950/60">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Base in
            </p>
            <p className="mt-3 text-lg font-semibold">Madiun, Indonesia</p>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              Available for remote collaborations worldwide.
            </p>
          </div>
        </motion.div>

        <motion.form
          className="flex w-full flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:focus:border-neutral-600 dark:focus:ring-neutral-700"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:focus:border-neutral-600 dark:focus:ring-neutral-700"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project"
              className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:focus:border-neutral-600 dark:focus:ring-neutral-700"
              required
            />
          </div>
          <Button
            type="submit"
            className="mt-2 w-full rounded-full px-6 text-xs uppercase tracking-[0.35em]"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </motion.section>
  );
}
