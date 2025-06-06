import { clean as cleanIban, mod97 } from "../utils/index.js"
import { ibanData } from "../constants/data.js"
import { TWO_CHARACTER_REGEX } from "../constants/validate.js"

/**
 * Validates an IBAN using the following checks:
 * 1. Country code validation (first 2 characters must be A-Z)
 * 2. Length validation based on country code
 * 3. MOD 97 algorithm validation
 * @param input The IBAN to validate
 * @param clean Whether to clean the IBAN before validation (defaults to false)
 * @returns {boolean} True if the IBAN is valid, false otherwise
 */
export default function validate(input: string, clean = false): boolean {
  const iban = clean ? cleanIban(input) : input

  if (iban.length < 2) {
    return false
  }

  const countryCode = iban.slice(0, 2)
  if (!TWO_CHARACTER_REGEX.test(countryCode)) {
    return false
  }

  const countryInfo = ibanData.find(country => country.code === countryCode)
  if (!countryInfo || iban.length !== countryInfo.length) {
    return false
  }

  return mod97(iban) === 1
}
