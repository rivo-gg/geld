import { EVERY_FOUR_CHARS } from "../constants/format.js"
import clean from "./clean.js"

/**
 * Formats an IBAN for printing with optional separator
 * @param iban The IBAN to format
 * @param separator The separator to use between groups (defaults to space)
 * @returns {string} The formatted IBAN
 */
export function printFormat(iban: string, separator = " "): string {
  return clean(iban).replace(EVERY_FOUR_CHARS, `$1${separator}`)
}
