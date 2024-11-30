import { clean, mod97 } from "../utils";

export default function iban(input: string): boolean {
  return mod97(clean(input)) === 1;
}
