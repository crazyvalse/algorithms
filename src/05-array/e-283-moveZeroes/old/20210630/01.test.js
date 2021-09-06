const moveZeroes = require('./01')

test('1', () => {
  expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
})

test('2', () => {
  expect(moveZeroes([12, 0, 1, 0, 3, 12, 0])).toEqual([12, 1, 3, 12, 0, 0, 0])
})

test('3', () => {
  expect(moveZeroes([2, 1])).toEqual([2, 1])
})
