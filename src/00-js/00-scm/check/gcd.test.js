const gcd = require('./gcd.js')

test('gcd', () => {
  expect(gcd(12, 24)).toBe(12)
})
test('gcd', () => {
  expect(gcd(108, 96)).toBe(12)
})
