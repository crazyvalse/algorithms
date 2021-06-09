const { isArray } = require('./01-checkType')

test('1', () => {
  const value = [1, 23, 34]
  expect(isArray(value)).toEqual(true)
})
