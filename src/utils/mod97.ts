export function calculateMod97(input: string): number {
  const endString = input.substring(4) + input.substring(0, 4);
  let final = ''
  for (const char of endString.split('')) {
    const cachedConversion = char.toLowerCase().charCodeAt(0) - 97 + 10
    cachedConversion ? final += cachedConversion : final += char
  }
  return Number(BigInt(final) % 97n)
}
