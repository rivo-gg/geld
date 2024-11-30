const { validate } = require('./src/index.ts');

const testIban = 'DE12500105170648489890'

console.log(validate.iban(testIban)) // true
