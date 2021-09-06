const jump = require('./1')

test('1', () => {
  expect(jump(2)).toBe(2)
})

test('2', () => {
  expect(jump(7)).toBe(21)
})

test('3', () => {
  expect(jump(1)).toBe(1)
})

test('4', () => {
  expect(jump(0)).toBe(0)
})
