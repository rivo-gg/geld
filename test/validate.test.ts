const { validate } = require("../src/index");

test("should correctly validate correct iban", () => {
  const iban = "DE12500105170648489890";

  expect(validate.iban(iban)).toBe(true);
});

test("should correctly validate wrong iban", () => {
  const iban = "DE12500105170648489891";

  expect(validate.iban(iban)).toBe(false);
});
