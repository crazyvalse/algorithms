/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

/**
 * 1. 根据字母，拿到对应的字符串
 * 2. 把字符串分割成数组
 * 3.
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//   const numbers = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxzy'
//   }
//
//   return digits.split('').reduce(
//     (pre, curr) => {
//       let chars = numbers[curr]
//       if (chars) {
//         if (!pre.length) {
//           pre = ['']
//         }
//         return pre.reduce((r, p) => {
//           chars.split('').forEach((c) => {
//             r.push(p + c)
//           })
//           return r
//         }, [])
//       }
//       return pre
//     },
//     []
//   )
// }

var letterCombinations = function (digits) {
  const numbers = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxzy'
  }

  return digits.split('').reduce((pre, curr) => {
    let chars = numbers[curr]
    if (chars) {
      if (!pre.length) {
        pre = ['']
      }
      for (let i = 0, len = pre.length; i < len; i++) {
        const p = pre[0]
        pre.shift()
        chars.split('').forEach((c) => {
          pre.push(p + c)
        })
      }
      return pre
    }
    return pre
  }, [])
}

console.info(letterCombinations('3123'))
module.exports = letterCombinations
