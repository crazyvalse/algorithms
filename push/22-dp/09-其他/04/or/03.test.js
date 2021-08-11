const numIslands = require('./03')

test('1', () => {
  const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ]

  expect(numIslands(grid)).toEqual(1)
})

test('2', () => {
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ]

  expect(numIslands(grid)).toEqual(3)
})

test('3', () => {
  const grid = [['1', '0', '1', '1', '0', '1', '1']]
  expect(numIslands(grid)).toEqual(3)
})

test('4', () => {
  const grid = [['1']]
  expect(numIslands(grid)).toEqual(1)
})

test('5', () => {
  const grid = [[]]
  expect(numIslands(grid)).toEqual(0)
})

test('6', () => {
  const grid = [
    ['1', '1', '1'],
    ['1', '0', '1'],
    ['1', '1', '1']
  ]
  expect(numIslands(grid)).toEqual(1)
})
