/*
5 - 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"


其实这道题解题思路最重要的是以下几点：

了解dp[j][i]代表从j->i
dp[j+1][i-1]代表的是子字符串的首->尾
然后就是创建二维数组的过程


我们把这个二维数组进行转换再看看

（这里就只转换一部分）
[
// [0,0], [0,1], [0,2]……
    ↓      ↓     ↓
  [ true, false, true, false, false ],
  [ 0, true, false, true, false ],
  [ 0, 0, true, false, false ],
  [ 0, 0, 0, true, false ],
  [ 0, 0, 0, 0, true ]
]

 */

var longestPalindrome = function (s) {
  let length = s.length
  let res = ''
  //创建二维数组
  let dp = Array.from(new Array(length), () => new Array(length).fill(0))
  //从字符串首部开始
  for (let i = 0; i < length; i++) {
    //从字符串i前开始依次向前查找
    for (let j = i; j >= 0; j--) {
      dp[j][i] = s[i] == s[j] && (i - j < 2 || dp[j + 1][i - 1])
      if (dp[j][i] && i - j + 1 > res.length) {
        res = s.substring(j, i + 1)
      }
    }
  }
  console.log(dp)
  return res
}

console.info(longestPalindrome('asdffdsa'))
let index = 0
