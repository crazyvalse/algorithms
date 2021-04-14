const removeDuplicates = require('./26')

test('[1]', () => {
  const array = [1]
  expect(removeDuplicates(array)).toBe(1)
})

test('[1, 2]', () => {
  const array = [1, 2]
  expect(removeDuplicates(array)).toBe(2)
})

test('[1, 1, 2]', () => {
  const array = [1, 1, 2]
  expect(removeDuplicates(array)).toBe(2)
})

test('[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]', () => {
  const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  expect(removeDuplicates(array)).toBe(5)
  expect(array.slice(0, 5)).toEqual([0, 1, 2, 3, 4])
})
