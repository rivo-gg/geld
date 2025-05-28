import validate from "./src/validators/iban";
import { printFormat } from "./src/utils/format";
export type { IbanInfo } from "./src/types/iban";

export const iban = {
  isValid: validate,
  printFormat,
};
