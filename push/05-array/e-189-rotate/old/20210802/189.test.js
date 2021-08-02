const { rotate,reverse } = require('./189')

test('1 reverse', () => {
  const array = reverse([1, 2, 3, 4, 5, 6, 7], 0, 3)
  expect(array).toEqual([4, 3, 2, 1, 5, 6, 7])
})

test('2 reverse', () => {
  const array = reverse([1, 2, 3, 4, 5, 6, 7], 4, 6)
  expect(array).toEqual([1, 2, 3, 4, 7, 6, 5])
})

test('3', () => {
  const array = rotate([1, 2, 3, 4, 5, 6, 7], 3)
  expect(array).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('4', () => {
  const array = rotate([-1, -100, 3, 99], 2)
  expect(array).toEqual([3, 99, -1, -100])
})
