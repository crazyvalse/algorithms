const equationsPossible = require('./02')

test('1', () => {
  expect(equationsPossible(['a==b', 'b!=a'])).toEqual(false)
})

test('2', () => {
  expect(equationsPossible(['b==a', 'a==b'])).toEqual(true)
})

test('3', () => {
  expect(equationsPossible(['a==b', 'b==c', 'a==c'])).toEqual(true)
})

test('4', () => {
  expect(equationsPossible(['a==b', 'b!=c', 'c==a'])).toEqual(false)
})

test('5', () => {
  expect(equationsPossible(['c==c', 'b==d', 'x!=z'])).toEqual(true)
})
