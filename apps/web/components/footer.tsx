import { fadeIn } from "@/data/animations"
import { motion } from "motion/react"
import Link from "next/link"

export function Footer() {
  return (
    <motion.footer
      className="relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-foreground/70">
            &copy;{" "}
            <a
              href="https://rivo.gg/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-white"
            >
              Rivo.gg
            </a>{" "}
            2025 - All rights reserved
          </div>
          <div className="mt-4 text-foreground/70 md:mt-0">
            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              legal notice
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
