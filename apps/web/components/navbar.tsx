"use client"

import { nav } from "@/data/nav"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Logo } from "./logo"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="relative z-10 border-gray-800/50 border-b backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
        <nav className="flex items-center space-x-6">
          <div className="hidden items-center space-x-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.target}
                className="text-gray-400 text-sm lowercase transition-colors hover:text-white"
              >
                {item.title}
                {item.icon && (
                  <item.icon className="ml-2 inline-block size-4" />
                )}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-400 hover:text-white"
          >
            <Sun className="hidden size-4.5 dark:flex" />
            <Moon className="flex size-4.5 dark:hidden" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
