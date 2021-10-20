const partition = require('./02')

test('1', () => {
  const s = 'aab'
  expect(partition(s)).toEqual([
    ['a', 'a', 'b'],
    ['aa', 'b']
  ])
})

test('2', () => {
  const s = 'a'
  expect(partition(s)).toEqual([['a']])
})
