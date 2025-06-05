/**
 * @type {import('shiki').Theme}
 */
const myTheme = {
  name: "rivo-gg-geld-dark",
  // Background and default foreground colors
  bg: "#0000", // The editor background
  fg: "#dcdbf5", // The default text color

  // Syntax highlighting rules
  settings: [
    {
      scope: ["comment"],
      settings: {
        foreground: "#6c679c",
        fontStyle: "italic"
      }
    },
    {
      scope: ["string", "string.quoted", "string.regexp"],
      settings: {
        foreground: "#f5a33e" // Orange/Gold for strings
      }
    },
    {
      scope: [
        "constant.numeric",
        "constant.language",
        "constant.character.escape"
      ],
      settings: {
        foreground: "#f5a33e"
      }
    },
    {
      scope: ["keyword", "storage.type", "storage.modifier"],
      settings: {
        foreground: "#a975ff", // Main accent purple for keywords
        fontStyle: "bold"
      }
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call.generic"
      ],
      settings: {
        foreground: "#68d9f4" // Cyan for function names
      }
    },
    {
      scope: [
        "variable",
        "entity.name.variable",
        "support.variable",
        "meta.definition.variable"
      ],
      settings: {
        foreground: "#dcdbf5" // Default light text for variables
      }
    },
    {
      scope: [
        "entity.name.type",
        "entity.other.inherited-class",
        "support.class",
        "support.type"
      ],
      settings: {
        foreground: "#68d9f4",
        fontStyle: "italic"
      }
    },
    {
      scope: "punctuation",
      settings: {
        foreground: "#6c679c" // Muted purple for punctuation
      }
    },
    {
      scope: ["property", "meta.property-name", "meta.object-literal.key"],
      settings: {
        foreground: "#dcdbf5"
      }
    },
    {
      scope: ["keyword.operator"],
      settings: {
        foreground: "#a975ff"
      }
    }
  ]
}

export default myTheme
