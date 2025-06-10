import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="text-foreground/70">
            &copy; 2023 - {new Date().getFullYear()}{" "}
            <a
              href="https://rivo.gg/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-white"
            >
              Rivo
            </a>
            . All rights reserved.
          </div>
          <div className="mt-4 text-foreground/70 md:mt-0">
            <Link
              href="/legal-notice"
              className="transition-colors hover:text-white"
            >
              legal notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
