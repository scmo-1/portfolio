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
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial={{
        y: "-100%",
        borderBottomRightRadius: 400,
        borderBottomLeftRadius: 400,
      }}
      animate={
        open
          ? { y: 0, borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }
          : {
              y: "-100%",
              borderBottomRightRadius: 400,
              borderBottomLeftRadius: 400,
            }
      }
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 15,
        mass: 0.8,
      }}
      className="absolute top-0 right-0 left-0 z-10 flex flex-col items-center bg-orange-600 text-stone-300 lg:hidden"
    >
      <nav className="my-10 px-5">
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
        </motion.ul>
        <motion.div
          className="mt-10 flex flex-col gap-5 text-xl"
          variants={container}
          initial="hidden"
          animate={open ? "show" : "hidden"}
        >
          <motion.a variants={item} href="mailto:hello@scmo.dev">
            hello@scmo.dev
          </motion.a>
          <motion.a variants={item} href="https://github.com/scmo-1">
            Github
          </motion.a>
          <motion.a
            variants={item}
            href="https://www.linkedin.com/in/simon-olsson-3a7208173/"
          >
            LinkedIn
          </motion.a>
          <motion.a
            variants={item}
            href="https://www.instagram.com/sxolsson/?utm_source=ig_web_button_share_sheet"
          >
            Instagram
          </motion.a>
        </motion.div>
      </nav>
    </motion.div>
  );
}

export default Menu;
