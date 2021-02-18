const isValid = require('./01')

test('1 ()', () => {
  expect(isValid('()')).toBe(true)
})

test('2 ()[]{}', () => {
  expect(isValid('()[]{}')).toBe(true)
})

test('3 (]', () => {
  expect(isValid('(]')).toBe(false)
})

test('4 ([)]', () => {
  expect(isValid('([)]')).toBe(false)
})

test('5 {[]}', () => {
  expect(isValid('{[]}')).toBe(true)
})
