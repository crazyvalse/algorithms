const numRescueBoats = require('./02')

test('1', () => {
  expect(numRescueBoats([1, 2], 3)).toEqual(1)
})

test('2 ', () => {
  expect(numRescueBoats([3, 2, 2, 1], 3)).toEqual(3)
})

test('3 ', () => {
  expect(numRescueBoats([3, 5, 3, 4], 5)).toEqual(4)
})

test('4 ', () => {
  expect(numRescueBoats([44, 10, 29, 12, 49, 41, 23, 5, 17, 26], 50)).toEqual(6)
})
