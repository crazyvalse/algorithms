const curry = require('./02')

test('测试 curry', () => {
  var fn = curry(function (a, b, c) {
    return [a, b, c]
  })

  expect(fn('a', 'b', 'c')).toEqual(['a', 'b', 'c'])
  expect(fn('a', 'b')('c')).toEqual(['a', 'b', 'c'])
  expect(fn('a')('b')('c')).toEqual(['a', 'b', 'c'])
  expect(fn('a')('b', 'c')).toEqual(['a', 'b', 'c'])
})
