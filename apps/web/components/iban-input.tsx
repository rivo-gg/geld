import { iban } from "@rivo-gg/geld"
import { Button } from "@rivo-gg/ui/components/button"
import { Input } from "@rivo-gg/ui/components/input"
import { cn } from "@rivo-gg/ui/lib/utils"
import { Send } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

export function IbanInput() {
  const [value, setValue] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isValidIban, setIsValidIban] = useState<boolean | null>(null)

  const submit = (str: string) => {
    if (!str) return

    const isValid = iban.isValid(str)

    setIsValidIban(isValid)
    setSubmitted(true)
    setValue(str)
  }

  useEffect(() => {
    if (value === "") {
      setIsValidIban(false)
      setSubmitted(false)
    }
  }, [value])

  return (
    <div className="relative flex w-96 flex-col items-center gap-6">
      <Input
        className="!bg-input h-12 w-full rounded-xl border border-foreground/20"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Insert an IBAN"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            submit(value)
          }
        }}
        onPaste={(e) => {
          e.preventDefault()
          const pastedValue = e.clipboardData.getData("text")
          setValue(pastedValue)
          submit(pastedValue)
        }}
      />

      <Button
        onClick={() => submit(value)}
        className="!size-8 absolute top-2 right-2"
      >
        <Send className="size-4" />
      </Button>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "absolute top-full mt-2 w-1/3 rounded-md border px-4 py-2 text-center font-medium text-sm shadow-sm backdrop-blur",
              isValidIban
                ? "border-green-500 bg-green-500/10 text-green-600"
                : "border-red-500 bg-red-500/10 text-red-600"
            )}
          >
            {isValidIban ? "Valid IBAN" : "Invalid IBAN"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
