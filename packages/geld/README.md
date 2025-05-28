# @rivo-gg/geld

A comprehensive TypeScript/JavaScript library for financial operations and validations. Currently featuring IBAN (International Bank Account Number) validation and formatting, with more financial tools planned for future releases.

> 'Geld' means 'money' in German, Dutch and Afrikaans. That's why we chose that name for our financial tools.

## Installation

```bash
npm install @rivo-gg/geld
# or
yarn add @rivo-gg/geld
# or
pnpm add @rivo-gg/geld
```

## Features

- IBAN validation using MOD 97 algorithm
- IBAN formatting for display
- Support for all standard IBAN formats
- Zero dependencies
- TypeScript support

## Usage

```typescript
import { iban } from "@rivo-gg/geld";

// Validate an IBAN
const isValid = iban.isValid("DE89370400440532013000");
console.log(isValid); // true

// Format an IBAN for display (with default space separator)
const formatted = iban.printFormat("DE89370400440532013000");
console.log(formatted); // 'DE89 3704 0044 0532 0130 00'

// Format with custom separator
const customFormatted = iban.printFormat("DE89370400440532013000", "-");
console.log(customFormatted); // 'DE89-3704-0044-0532-0130-00'

// Validate with automatic cleaning (removes spaces and special characters)
const isValidWithCleaning = iban.isValid("DE89 3704 0044 0532 0130 00", true);
console.log(isValidWithCleaning); // true
```

## API Reference

### `iban.isValid(input: string, clean?: boolean): boolean`

Validates an IBAN using the MOD 97 algorithm.

- `input`: The IBAN string to validate
- `clean`: (optional) Whether to clean the IBAN before validation (removes spaces and special characters). Defaults to `false`
- Returns: `boolean` - `true` if the IBAN is valid, `false` otherwise

### `iban.printFormat(iban: string, separator?: string): string`

Formats an IBAN for display purposes.

- `iban`: The IBAN string to format
- `separator`: (optional) The separator to use between groups. Defaults to space (' ')
- Returns: `string` - The formatted IBAN

## License

MIT © [Rivo](LICENSE)
