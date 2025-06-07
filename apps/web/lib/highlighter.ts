import { createHighlighter } from "shiki"


export const highlighter = await createHighlighter({
  themes: ["catppuccin-frappe"],
  langs: ["typescript", "bash", "shellscript", "json", "javascript", "python"]
})