import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/toaster"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        closeButton
        richColors
      />
    </ThemeProvider>
  )
}
