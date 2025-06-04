import { cn } from "@rivo-gg/ui/lib/utils"
import { Montserrat } from "next/font/google"
import Link from "next/link"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export function Logo() {
  return (
    <Link
      href="/"
      className={cn("text-2xl", montserrat.className)}
    >
      @rivo-gg/geld
    </Link>
  )
}
