import { cn } from "@rivo-gg/ui/lib/utils"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export function Logo() {
  return <span className={cn("text-2xl", montserrat.className)}>geld</span>
}
