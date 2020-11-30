/*
给定一个字符串s和一些长度相同的单词 words，找出s中恰好可以由words中所有单词串联形成的自传的起始位置。
输入：
s = 'barfoothefoobarman'
words= ['foo', 'bar']
words = ['a', 'b', 'c', 'd']
输出：
[0, 9]
 */

/**
 * 1. 把数组中的数据排列组合
 * 1. 同样的流程：从数组中挑出一个item，把他和剩下的字符串做拼接，push到一个array中
 * 2. 同样的输入输出：
 * 3. 截止条件
 * @param array
 */
function foo(words) {
  let result = []
  let num = words.length

  let range = (r, arr) => {
    if (r.length === num) {
      result.push(r)
    } else {
      arr.forEach((item, idx) => {
        let tmp = [].concat(arr)
        tmp.splice(idx, 1)
        range(r.concat(item), tmp)
      })
    }
  }
  range([], words)
  return result
}
console.info(foo(['a', 'b', 'c']))
