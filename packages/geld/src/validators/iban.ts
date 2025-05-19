import { mod97, clean as cleanIban } from "../utils/index.js";

export default function validate(input: string, clean = false): boolean {
  if (clean) {
   return mod97(cleanIban(input)) === 1;
  }
  return mod97(input) === 1;
}
