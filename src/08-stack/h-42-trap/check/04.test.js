const trap = require('./04')

test('1 6', () => {
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6)
  // [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  //  0  0  1  0  1  2  1  0  0  1  0  0
})

test('2 229', () => {
  expect(trap([4, 2, 0, 3, 2, 5])).toBe(9)
})

test('3 ', () => {
  expect(trap([4])).toBe(0)
})

test('4 ', () => {
  expect(trap([4, 3])).toBe(0)
})

test('5 ', () => {
  expect(trap([4, 3, 1])).toBe(0)
})
