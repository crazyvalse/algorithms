const findDisappearedNumbers = require('./01')

test('1', () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
})
