/*
题目2：Word Break II
2.1 问题描述
Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.
Return all such possible sentences.
For example, given
s =“catsanddog”,
dict =[“cat”, “cats”, “and”, “sand”, “dog”].
A solution is[“cats and dog”, “cat sand dog”].
 */
/**
 * result.push(cart.join(' '))
 * @param s
 * @param dict
 */
function solution(s, dict) {
  const result = []
  const walk = function (index, cart) {
    if (index >= s.length) {
      if (s === cart.join('')) {
        result.push(cart.join(' '))
      }
      return
    }

    for (let c = index; c < s.length; c++) {
      for (let i = 0; i < dict.length; i++) {
        const si = s.substr(index, c - index + 1)
        if (si === dict[i]) {
          cart.push(dict[i])
          walk(c + 1, cart)
          cart.pop()
        }
      }
    }
  }
  walk(0, [])
  return result
}

console.info(solution('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))

module.exports = solution
