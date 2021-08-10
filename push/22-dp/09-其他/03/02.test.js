const solution = require('./02')

test('1', () => {
  expect(
    solution([
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0]
    ])
  ).toEqual(16)
})

test('2', () => {
  expect(solution([[1]])).toEqual(4)
})

test('3', () => {
  expect(solution([[1, 0]])).toEqual(4)
})

test('4', () => {
  expect(solution([[0, 1]])).toEqual(4)
})

test('5', () => {
  expect(solution([[1], [0]])).toEqual(4)
})

test('6', () => {
  expect(solution([[0], [1]])).toEqual(4)
})

test('7', () => {
  expect(
    solution([
      [0, 0],
      [1, 0]
    ])
  ).toEqual(4)
})
