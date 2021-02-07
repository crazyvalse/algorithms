const removeDuplicates = require('./26.1')

test('26.1', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
})
