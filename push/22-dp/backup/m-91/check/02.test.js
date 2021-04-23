const numDecodings = require('./02')

test('1', () => {
  expect(numDecodings('123911')).toEqual(6)
})

test('2', () => {
  expect(numDecodings('999')).toEqual(1)
})

test('3', () => {
  expect(numDecodings('1239')).toEqual(3)
})
