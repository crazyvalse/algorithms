const generateParenthesis = require('./01')

test('1', () => {
  expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])
})
