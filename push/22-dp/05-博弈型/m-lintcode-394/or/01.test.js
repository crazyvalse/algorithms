const firstWillWin = require('./01')

test('1', () => {
  expect(firstWillWin(1)).toEqual(true)
})

test('2', () => {
  expect(firstWillWin(4)).toEqual(true)
})

test('3', () => {
  expect(firstWillWin(3)).toEqual(false)
})

test('5', () => {
  expect(firstWillWin(5)).toEqual(true)
})

test('6', () => {
  expect(firstWillWin(0)).toEqual(false)
})
