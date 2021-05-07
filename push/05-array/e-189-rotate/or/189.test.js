const fn = require('./189')

test('[1, 2, 3, 4, 5, 6, 7]', () => {
  const array = fn([1, 2, 3, 4, 5, 6, 7], 3)
  expect(array).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('[-1,-100,3,99]', () => {
  const array = fn([-1, -100, 3, 99], 2)
  expect(array).toEqual([3, 99, -1, -100])
})
