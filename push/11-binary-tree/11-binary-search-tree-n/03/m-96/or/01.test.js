const numTrees = require('./01')

test('1', () => {
  expect(numTrees(3)).toBe(5)
})

test('2', () => {
  expect(numTrees(1)).toBe(1)
})
