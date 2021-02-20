const curry = require('./01')
var fn = curry(function (a, b, c) {
  return [a, b, c]
})
test('fn(\'a\', \'b\', \'c\')', () => {
  expect(fn('a', 'b', 'c')).toEqual(['a', 'b', 'c'])
})

test('fn(\'a\', \'b\')(\'c\')', () => {
  expect(fn('a', 'b')('c')).toEqual(['a', 'b', 'c'])
})

test('fn(\'a\')(\'b\')(\'c\')', () => {
  expect(fn('a')('b')('c')).toEqual(['a', 'b', 'c'])
})

test('fn(\'a\')(\'b\', \'c\')', () => {
  expect(fn('a')('b', 'c')).toEqual(['a', 'b', 'c'])
})
