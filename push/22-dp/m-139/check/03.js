/*
139. 单词拆分

给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：
拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

示例 1：
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。

示例 2：
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。

示例 3：
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 */
/**
 * bfs
 *
 * 队列 - 维护的是 index 符合要求的 index
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length
  const queue = []
  queue.push(0)
  while (queue.length) {
    const index = queue.shift()
    for (let word of wordDict) {
      if (index + word.length <= n && word === s.substr(index, word.length)) {
        if (index + word.length === n) {
          return true
        }
        queue.push(index + word.length)
      }
    }
  }
  return false
}

module.exports = wordBreak
