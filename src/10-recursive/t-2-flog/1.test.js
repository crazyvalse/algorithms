const jump = require('./1')

test('1', () => {
  expect(jump(2)).toBe(2)
})

test('2', () => {
  expect(jump(3)).toBe(3)
})

test('3', () => {
  expect(jump(4)).toBe(5)
})
