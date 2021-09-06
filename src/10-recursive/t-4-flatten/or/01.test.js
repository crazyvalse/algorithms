const flatten = require('./01')

test('1', () => {
  expect(flatten([1, 2, 3, [4, [5]]])).toEqual([1, 2, 3, 4, 5])
})
