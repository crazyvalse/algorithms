const paintHouse = require('./01')

test('1', () => {
  expect(
    paintHouse([
      [14, 2, 11],
      [11, 14, 5],
      [14, 3, 10]
    ])
  ).toEqual(10)
})

test('2', () => {
  expect(
    paintHouse([
      [1, 2, 3],
      [1, 4, 6]
    ])
  ).toEqual(3)
})
