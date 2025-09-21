"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-stone-900 px-5 text-white">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 12,
          duration: 0.8,
        }}
        className="text-6xl font-bold"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="max-w-md text-center text-xl"
      >
        Page not found
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
      >
        <Link
          href="/"
          className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-amber-500"
        >
          Return to homepage
        </Link>
      </motion.div>
    </div>
  );
}
