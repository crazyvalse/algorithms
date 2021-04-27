const minCut = require('./01')

test('1', () => {
  expect(minCut('aab')).teBe(1)
})

test('2', () => {
  expect(minCut('a')).teBe(0)
})

test('3', () => {
  expect(minCut('ab')).teBe(1)
})
