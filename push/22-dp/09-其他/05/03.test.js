const solution = require('./03')

test('1', () => {
  expect(
    solution([
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    ])
  ).toEqual(6)
})

test('2', () => {
  expect(solution([[1]])).toEqual(1)
})

test('3', () => {
  expect(solution([[1, 0]])).toEqual(1)
})

test('4', () => {
  expect(solution([[0, 1]])).toEqual(1)
})

test('5', () => {
  expect(solution([[1], [0]])).toEqual(1)
})

test('6', () => {
  expect(solution([[0], [1]])).toEqual(1)
})

test('7', () => {
  expect(solution([[0, 0, 0, 0, 0, 0, 0, 0]])).toEqual(0)
})

test('8', () => {
  expect(solution([[0, 1, 0, 1, 1, 1, 0, 0]])).toEqual(3)
})
