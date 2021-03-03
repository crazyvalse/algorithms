const sum = require('./1')

test('1', () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15)
})
