const validateStackSequences = require('./02')

test('1', () => {
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])).toEqual(true)
})

test('2', () => {
  expect(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])).toEqual(false)
})
