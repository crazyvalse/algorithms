const merge = require('./88.1.js')

test('[1, 2, 2, 3, 5, 6]', () => {
  expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6])
})

test('[1]', () => {
  expect(merge([1], 1, [], 0)).toEqual([1])
})
