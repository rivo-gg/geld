import { mod97, clean as cleanIban } from "../utils/index.js";

/**
 * Validates an IBAN using the MOD 97 algorithm.
 * @param input The IBAN to validate
 * @param clean Whether to clean the IBAN before validation (defaults to false)
 * @returns {boolean} True if the IBAN is valid, false otherwise
 */
export default function validate(input: string, clean = false): boolean {
  if (clean) {
    return mod97(cleanIban(input)) === 1;
  }
  return mod97(input) === 1;
}
