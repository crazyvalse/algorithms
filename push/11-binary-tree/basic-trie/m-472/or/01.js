/*
472. 连接词
给定一个 不含重复 单词的字符串数组 words ，编写一个程序，返回 words 中的所有 连接词 。

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
  function search(word) {
    let node = trie.children,
      len = word.length,
      connect = 0
    // 递归查找，此单词是否为连接词 dfs(几个单词连接, 当前查找的索引, 当前前缀树)
    function dfs(num, index, curr) {
      // 如果已经找到一条路径，确定 word 为连接词，终止所有递归
      if (connect > 1) return

      // 如果当前节点不存在，终止递归
      if (curr === undefined) return

      // 如果已经找到了 word 的最后一个字母，而且恰好为一个单词的结束，那么终止递归，
      // 并且更新 connect
      if (curr.isEnd === true && index === len - 1 && num + 1 > 1) {
        return (connect = num + 1)
      }
      // 如果当前 curr 为一个单词的结束点，并且 index !== len - 1，
      // 继续递归以下一个字母为开头的词是否存在，从字典树根节点开始
      if (curr.isEnd === true && index !== len - 1) {
        dfs(num + 1, index + 1, node.children[arr[index + 1]])
        /*
          注意此处的回溯，即使找到了可能为一种连接词路径的时候，也要继续此时当前的
          进度继续查找，要搜索所有可能性
        */
        dfs(num, index + 1, curr.children[arr[index + 1]])
      }
      if (curr.isEnd === false) {
        dfs(num, index + 1, curr.children[arr[index + 1]])
      }
    }

    dfs(0, 0, node.children[word[0]])

    return connect > 1
  }

  const result = []
  // 找到所有由两个单词组成的单词
  for (let word of words) {
    if (search(word)) {
      result.push(word)
    }
  }
  return result
}

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

module.exports = findAllConcatenatedWordsInADict
