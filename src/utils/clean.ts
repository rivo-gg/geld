export function cleanIBAN(iban: string): string {
  return iban.replace(/[\s-]/g, '').toUpperCase();
}
