import { EVERY_FOUR_CHARS } from "../constants/format";
import clean from "./clean";

/**
 * Formats an IBAN for printing with optional separator
 * @param iban The IBAN to format
 * @param separator The separator to use between groups (defaults to space)
 * @returns {string} The formatted IBAN
 */
export function printFormat(iban: string, separator: string = " "): string {
  return clean(iban).replace(EVERY_FOUR_CHARS, `$1${separator}`);
}
