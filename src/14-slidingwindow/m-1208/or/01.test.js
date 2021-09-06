const equalSubstring = require('./01')

test('1', () => {
  expect(equalSubstring('abcd', 'bcdf', 3)).toBe(3)
})

test('2', () => {
  expect(equalSubstring('abcd', 'cdef', 3)).toBe(1)
})

test('3', () => {
  expect(equalSubstring('abcd', 'acde', 0)).toBe(1)
})

test('4', () => {
  expect(equalSubstring('krrgw', 'zjxss', 19)).toBe(2)
})
