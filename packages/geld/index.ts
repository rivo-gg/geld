import validate from "./src/validators/iban";
import { printFormat } from "./src/utils/format";

export const iban = {
  isValid: validate,
  printFormat
};
