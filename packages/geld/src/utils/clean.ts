/**
 * Cleans an IBAN by removing non-alphanumeric characters and converting to uppercase.
 * @param iban The IBAN to clean
 * @returns {string} The cleaned IBAN
 */
export default function clean(iban: string): string {
  return iban.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
}
