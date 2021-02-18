const decodeString = require('./01')

test('1 3[a]2[bc]', () => {
  expect(decodeString('3[a]2[bc]')).toEqual('aaabcbc')
})

test('2 3[a2[c]]', () => {
  expect(decodeString('3[a2[c]]')).toEqual('accaccacc')
})

test('3 2[abc]3[cd]ef', () => {
  expect(decodeString('2[abc]3[cd]ef')).toEqual('abcabccdcdcdef')
})

test('4 3[a]2[bc]', () => {
  expect(decodeString('abc3[cd]xyz')).toEqual('abccdcdcdxyz')
})

test('4 "10[leetcode]"', () => {
  expect(decodeString('10[leetcode]')).toEqual('leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode')
})
