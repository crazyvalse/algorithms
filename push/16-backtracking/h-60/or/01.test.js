const getPermutation = require('./01')

test('1', () => {
  expect(getPermutation(3, 3)).toEqual('213')
})

test('2', () => {
  expect(getPermutation(4, 9)).toEqual('2314')
})

test('3', () => {
  expect(getPermutation(3, 1)).toEqual('123')
})
