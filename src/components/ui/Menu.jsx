import React from "react";
import { motion, spring } from "motion/react";
import { delay } from "motion";

function Menu({ open, setOpen }) {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial={{
        x: "100%",
        borderTopLeftRadius: 400,
        borderBottomLeftRadius: 400,
      }}
      animate={
        open
          ? { x: 0, borderTopLeftRadius: 100, borderBottomLeftRadius: 100 }
          : { x: "100%", borderTopLeftRadius: 400, borderBottomLeftRadius: 400 }
      }
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 0.8,
      }}
      className="absolute top-0 right-0 z-10 h-screen w-3/4 bg-orange-600 text-stone-300 md:w-2/4 lg:hidden"
    >
      <nav className="mt-30 px-5">
        <motion.ul
          className="flex flex-col gap-5 text-5xl"
          variants={container}
          initial="hidden"
          animate={open ? "show" : "hidden"}
        >
          <motion.li variants={item}>
            <a onClick={() => setOpen(false)} href="/#about">
              About
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a onClick={() => setOpen(false)} href="/#projects">
              Projects
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a onClick={() => setOpen(false)} href="/#contact">
              Contact
            </a>
          </motion.li>
        </motion.ul>
        <motion.div
          className="mt-10 flex flex-col gap-5 text-xl"
          variants={container}
          initial="hidden"
          animate={open ? "show" : "hidden"}
        >
          <motion.a variants={item} href="">
            hello@scmo.dev
          </motion.a>
          <motion.a variants={item} href="">
            Github
          </motion.a>
          <motion.a variants={item} href="">
            LinkedIn
          </motion.a>
          <motion.a variants={item} href="">
            Instagram
          </motion.a>
        </motion.div>
      </nav>
    </motion.div>
  );
}

export default Menu;
