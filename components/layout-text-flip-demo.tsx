"use client";

import { motion } from "motion/react";
import { LayoutTextFlip } from "./ui/layout-text-flip";

export default function LayoutTextFlipDemo() {
  return (
    <div className="mx-8 my-20"> {/* margin lebih besar */}
      <motion.div className="relative flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
        <LayoutTextFlip
          text="Kita Akan Ke"
          words={["Museum Nasional", "Monas", "Blok M"]}
        />
      </motion.div>
      <p className="mt-10 text-center text-base text-neutral-600 dark:text-neutral-400">
        Semogaaa Bisaa kecapaii tujuan yang ada disini yaaa semuanyaa
      </p>
    </div>
  );
}
