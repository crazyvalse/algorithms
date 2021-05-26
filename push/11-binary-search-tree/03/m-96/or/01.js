/*
96. 不同的二叉搜索树

给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？
返回满足题意的二叉搜索树的种数。

示例 1：
输入：n = 3
输出：5

示例 2：
输入：n = 1
输出：1

提示：
1 <= n <= 19

https://leetcode-cn.com/problems/unique-binary-search-trees/solution/shou-hua-tu-jie-san-chong-xie-fa-dp-di-gui-ji-yi-h/
 */
/**
 * f: 表示 用连着i个数，所构建的 BST 种类数
 * 左 0 右 i-1
 * 左 1 右 i-2
 * 左 2 右 i-3
 *
 * 左 i 右 0
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const f = Array(n + 1).fill(0)
  f[0] = 1
  f[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      f[i] += f[j] * f[i - j - 1]
    }
  }
  return f[n]
}

module.exports = numTrees
