"use client"
import { highlight } from "@/lib/highlighter"

export asyncfunction CodeBlock() {
  return (
    <code className="bg-transparent text-gray-300 leading-6">
      {await highlight(code, "ts")}
    </code>
  )
}
