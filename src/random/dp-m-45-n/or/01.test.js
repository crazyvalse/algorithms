const jump = require('./01')

test('1', () => {
  expect(jump([2, 3, 1, 1, 4])).toEqual(2)
})

test('2', () => {
  expect(jump([0])).toEqual(0)
})
