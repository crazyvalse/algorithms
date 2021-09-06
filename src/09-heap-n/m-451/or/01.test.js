const frequencySort = require('./01')

test('1', () => {
  expect(frequencySort('tree')).toEqual('eetr')
})

test('2', () => {
  expect(frequencySort('')).toEqual('')
})
test('3', () => {
  expect(frequencySort(null)).toEqual(null)
})
