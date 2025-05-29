/**
 * Calculates the MOD 97 checksum for an IBAN.
 * @param input The IBAN to validate
 * @returns {number} The remainder of the MOD 97 operation
 */
export default function mod97(input: string): number {
  const endString = input.substring(4) + input.substring(0, 4)
  let final = ""

  for (const char of endString) {
    if (/[0-9]/.test(char)) {
      final += char
    } else {
      const charValue = char.toLowerCase().charCodeAt(0) - 97 + 10
      if (charValue >= 10 && charValue <= 35) {
        final += charValue
      }
    }
  }

  // Process the number in chunks to avoid BigInt overflow
  const chunkSize = 8
  let remainder = 0

  for (let i = 0; i < final.length; i += chunkSize) {
    const chunk = final.slice(i, i + chunkSize)
    remainder =
      (remainder * Math.pow(10, chunk.length) + Number.parseInt(chunk)) % 97
  }

  return remainder
}
