const canJump = require('./01')

test('1', () => {
  expect(canJump([2, 3, 1, 1, 4])).toEqual(true)
})

test('2', () => {
  expect(canJump([3, 2, 1, 0, 4])).toEqual(false)
})

test('3', () => {
  expect(canJump([2])).toEqual(true)
})

test('4', () => {
  expect(canJump([])).toEqual(true)
})

test('5', () => {
  expect(
    canJump([25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1, 0, 0])
  ).toEqual(false)
})

test('6', () => {
  expect(canJump([2, 0, 0])).toEqual(true)
})
