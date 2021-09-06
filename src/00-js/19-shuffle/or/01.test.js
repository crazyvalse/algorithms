const shuffle = require('./01')

test('shuffle', () => {
  expect(shuffle([1, 2, 3, 4, 5])).not.toEqual([1, 2, 3, 4, 5])
})
