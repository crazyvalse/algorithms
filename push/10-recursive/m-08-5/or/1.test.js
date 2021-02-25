const multiply = require('./1')

test('1', () => {
  expect(multiply(1, 10)).toEqual(10)
})

test('2', () => {
  expect(multiply(3, 4)).toEqual(12)
})
