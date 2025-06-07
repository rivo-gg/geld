import { createHighlighter } from "shiki"

let highlighterPromise: Promise<any> | null = null;

export async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["catppuccin-frappe"],
      langs: ["typescript", "bash", "shellscript", "json", "javascript", "python"]
    });
  }
  return highlighterPromise;
}
