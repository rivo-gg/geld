import { printFormat } from "./src/utils/format.js"
import validate from "./src/validators/iban.js"
export type { IbanInfo } from "./src/types/iban.js"

export const iban = {
  isValid: validate,
  printFormat
}
