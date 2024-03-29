/*
给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。


示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:

输入: s = ""
输出: 0
 */
/*

max
f Array(26)

f[sr]++

while(f[sr] > 1){
  fsl--
  l++
}

 */
function solution(s) {
  let [max, l, r, sri] = [0, 0, 0, 0]
  const pivot = 'a'.charCodeAt()
  const f = Array(26).fill(0)
  while (r < s.length) {
    sri = s[r].charCodeAt() - pivot
    f[sri]++
    while (f[sri] > 1) {
      f[s[l++].charCodeAt() - pivot]--
    }
    r++
    max = Math.max(r - l, max)
  }
  return max
}

console.info(solution('pwwkew'))
