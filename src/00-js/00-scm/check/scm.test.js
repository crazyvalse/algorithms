const scm = require('./scm.js')

test('scm', () => {
  expect(scm(12, 24)).toBe(24)
})
