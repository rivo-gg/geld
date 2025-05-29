import { printFormat } from "./src/utils/format"
import validate from "./src/validators/iban"
export type { IbanInfo } from "./src/types/iban"

export const iban = {
  isValid: validate,
  printFormat
}
