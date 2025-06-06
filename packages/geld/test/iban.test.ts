import { describe, it, expect } from "vitest";
import { iban } from "../index";

describe("IBAN Validation", () => {
  it("should validate correct IBANs", () => {
    const validIbans = [
      "DE89370400440532013000",
      "GB29NWBK60161331926819",
      "FR1420041010050500013M02606",
      "NL91ABNA0417164300",
    ];

    for (const validIban of validIbans) {
      expect(iban.isValid(validIban)).toBe(true);
    }
  });

  it("should not validate incorrect IBANs", () => {
    const invalidIbans = [
      "DE89370400440532013001",
      "GB29NWBK6016133192681",
      "FR1420041010050500013M0260699",
      "XX91ABNA0417164300",
      "",
      "NOT-AN-IBAN",
    ];

    for (const invalidIban of invalidIbans) {
      expect(iban.isValid(invalidIban)).not.toBe(true);
    }
  });

  it("should validate IBANs with spaces when clean option is true", () => {
    const formattedIbans = [
      "DE89 3704 0044 0532 0130 00",
      "GB29 NWBK 6016 1331 9268 19",
      "FR14 2004 1010 0505 0001 3M02 606",
    ];

    for (const formattedIban of formattedIbans) {
      expect(iban.isValid(formattedIban, true)).toBe(true);
    }
  });
});

describe("IBAN Formatting", () => {
  it("should format IBANs with default spacing", () => {
    const testCases = [
      {
        input: "DE89370400440532013000",
        expected: "DE89 3704 0044 0532 0130 00",
      },
      {
        input: "GB29NWBK60161331926819",
        expected: "GB29 NWBK 6016 1331 9268 19",
      },
    ];

    for (const { input, expected } of testCases) {
      expect(iban.printFormat(input)).toBe(expected);
    }
  });

  it("should format IBANs with custom separator", () => {
    const testCases = [
      {
        input: "DE89370400440532013000",
        separator: "-",
        expected: "DE89-3704-0044-0532-0130-00",
      },
      {
        input: "GB29NWBK60161331926819",
        separator: "*",
        expected: "GB29*NWBK*6016*1331*9268*19",
      },
    ];

    for (const { input, separator, expected } of testCases) {
      expect(iban.printFormat(input, separator)).toBe(expected);
    }
  });

  it("should clean and format IBANs with special characters", () => {
    const testCases = [
      {
        input: "DE89-3704.0044/0532-0130-00",
        expected: "DE89 3704 0044 0532 0130 00",
      },
      {
        input: "GB29/NWBK.6016-1331.9268.19",
        expected: "GB29 NWBK 6016 1331 9268 19",
      },
    ];

    for (const { input, expected } of testCases) {
      expect(iban.printFormat(input)).toBe(expected);
    }
  });
});
