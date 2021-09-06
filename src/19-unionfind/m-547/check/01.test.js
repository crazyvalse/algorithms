const findCircleNum = require('./01')

test('1', () => {
  const grid = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 1]
  ]

  expect(findCircleNum(grid)).toEqual(1)
})

test('2', () => {
  const grid = [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
  ]

  expect(findCircleNum(grid)).toEqual(3)
})

test('3', () => {
  const grid = [
    [1, 0],
    [0, 1]
  ]
  expect(findCircleNum(grid)).toEqual(2)
})

test('4', () => {
  const grid = [[1]]
  expect(findCircleNum(grid)).toEqual(1)
})

test('5', () => {
  const grid = [[]]
  expect(findCircleNum(grid)).toEqual(1)
})

test('6', () => {
  const grid = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]
  expect(findCircleNum(grid)).toEqual(1)
})

test('7', () => {
  const grid = [
    [1, 0, 0, 1],
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 1, 1]
  ]
  expect(findCircleNum(grid)).toEqual(1)
})
