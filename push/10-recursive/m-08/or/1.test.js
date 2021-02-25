const hanota = require('./1')

test('1', () => {
  const A = [2, 1, 0],
    B = [],
    C = []
  hanota(A, B, C)
  expect(C).toEqual([2, 1, 0])
})

test('2', () => {
  const A = [1, 0],
    B = [],
    C = []
  hanota(A, B, C)
  expect(C).toEqual([1, 0])
})

