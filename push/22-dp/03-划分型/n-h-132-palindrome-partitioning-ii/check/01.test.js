const minCut = require('./01')

test('1', () => {
  expect(minCut('aab')).toBe(1)
})

test('2', () => {
  expect(minCut('a')).toBe(0)
})

test('3', () => {
  expect(minCut('ab')).toBe(1)
})
