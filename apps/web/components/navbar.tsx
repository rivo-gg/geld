import { nav } from "@/data/nav"
import Link from "next/link"
import { Logo } from "./logo"

export function Navbar() {
  return (
    <header className="relative z-10 border-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Logo />
        <nav className="flex items-center space-x-6">
          <div className="hidden items-center space-x-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target={item.target}
                className="text-foreground/70 text-sm lowercase transition-colors hover:text-foreground"
              >
                {item.title}
                {item.icon && (
                  <item.icon className="ml-2 inline-block size-4" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
