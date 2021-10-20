/*
472. 连接词
给定一个 不含重复 单词的字符串数组 words ，编写一个程序，返回words 中的所有 连接词 。

连接词 的定义为：一个字符串完全是由至少两个给定数组中的单词组成的。



示例 1：

输入：words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
输出：["catsdogcats","dogcatsdog","ratcatdogcat"]
解释："catsdogcats"由"cats", "dog" 和 "cats"组成;
     "dogcatsdog"由"dog", "cats"和"dog"组成;
     "ratcatdogcat"由"rat", "cat", "dog"和"cat"组成。
示例 2：

输入：words = ["cat","dog","catdog"]
输出：["catdog"]


提示：

1 <= words.length <= 104
0 <= words[i].length <= 1000
words[i] 仅由小写字母组成
0 <= sum(words[i].length) <= 6 * 105
通过次数6,250提交次数15,195
请问您在哪类招聘中遇到此题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/concatenated-words
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * 1. 先构建trie树
 * 2. 判断每个单词是由几个单词构成的
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  if (words.length < 1) {
    return []
  }
  // 构建trie树
  const trie = new Trie(words)
  /**
   * 查找
   * @param word
   */

  const result = []
  // 找到所有由两个单词组成的单词
  for (let word of words) {
    if (trie.check(word)) {
      result.push(word)
    }
  }
  return result
}

/**************** Trie *****************/

function Trie(words) {
  this.children = {}
  for (let word of words) {
    this.insert(word)
  }
}

Trie.prototype.insert = function (word) {
  let node = this.children
  for (let c of word) {
    node[c] = node[c] || {}
    node = node[c]
  }
  node.count = 1
  node.isEnd = true
}

Trie.prototype.search = function (word) {
  let node = this.children
  for (let c of word) {
    if (!node[c]) {
      return false
    }
    node = node[c]
  }
  return node && node.isEnd
}

// 判断当前单词是否是由2个以上单词构成
/**
 * 1. 结束条件
 *  - word === ''
 *    - count > 2 return true
 *
 * 2. 返回值 boolean
 *
 * 3. 过程
 *  - 从word中取出字母，判断是不是在trie中
 *    - 是，继续
 *    - 不是，返回false
 *    - 发现 isEnd 表示已经组成一个词了，counter++ 并进行下一次递归
 *
 * @param word
 * @returns {boolean}
 */
Trie.prototype.check = function (word) {
  const n = word.length
  let dict = this.children
  // 去掉已经判断过的词
  const visited = Array(n).fill(false)
  // 有返回值的一般都是从下往上
  const walk = function (index, cart) {
    if (visited[index]) {
      return false
    }
    if (index === n) {
      return cart > 1
    }
    let node = dict
    let char = null
    for (let i = index; i < n; i++) {
      char = word[i]
      node = node[char]
      // 说明 该字符在组成词中没有
      if (!node) {
        return false
      }
      // 如果是 isEnd，进行下一个词
      if (node.isEnd && walk(i + 1, cart + 1)) {
        return true
      }
    }
    // 遍历完，也没有 isEnd 结尾，说明最后的ch 不构成单词
    visited[index] = true
    return false
  }
  return walk(0, 0)
}

module.exports = findAllConcatenatedWordsInADict
