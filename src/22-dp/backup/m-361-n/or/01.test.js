const bomb = require('./01')

test('1', () => {
  expect(bomb(['0E00', 'E0WE', '0E00'])).toEqual(3)
})

test('2', () => {
  expect(bomb(['0E00', 'EEWE', '0E00'])).toEqual(2)
})
