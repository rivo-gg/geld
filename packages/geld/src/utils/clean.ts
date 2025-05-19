export default function clean(iban: string): string {
  return iban.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
}
