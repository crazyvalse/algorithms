# 前端算法

- 一些我遇到的常见题目
- 每个题目都有测试用例

例如:

在 [src/22-dp/06-背包型/m-lintcode-92-backpack](src/22-dp/06-背包型/m-lintcode-92-backpack) 中

[topic](src/22-dp/06-背包型/m-lintcode-92-backpack/or/01.js) :

```js
/*
92 · 背包问题
描述
在n个物品中挑选若干物品装入背包，最多能装多满？假设包的大小为m，每个物品的大小为A[i]
你不可以将物品进行切割。

样例
样例 1:
	输入:  [3,4,8,5], backpack size=10
	输出:  9

样例 2:
	输入:  [2,3,5,7], backpack size=12
	输出:  12

挑战
O(n x m) 的时间复杂度 and O(m) 空间复杂度
如果不知道如何优化空间，O(n x m) 的空间复杂度也可以通过.
 */
/**
 * let max = -Infinity
 * f[m] = 是否能够装大小为m的东西
 * @param size
 * @param a
 */
function backPack(size, a) {
  const f = Array(size + 1).fill(false)
  let max = -Infinity
  f[0] = true
  // 反过来
  for (let i = 0; i < a.length; i++) {
    // 需要一遍遍确认每个size是否可以
    for (let s = size; s > 0; s--) {
      if (s - a[i] >= 0 && f[s - a[i]]) {
        f[s] = true
        max = Math.max(s, max)
      }
    }
  }
  return max === -Infinity ? 0 : max
}

module.exports = backPack
```

[test case](src/22-dp/06-背包型/m-lintcode-92-backpack/or/01.test.js):

```js
const backpack = require('./01')

test('1', () => {
  expect(backpack(10, [3, 4, 8, 5])).toBe(9)
})

test('2', () => {
  expect(backpack(12, [2, 3, 5, 7])).toBe(12)
})

test('3', () => {
  expect(backpack(3, [3, 4, 8, 5])).toBe(3)
})
```

## 算法

在 `src` 目录下是我收集的常见的前端算法题。

- [00-js](./src/00-js) : 包含了常见的手写题。
- [01-sort](./src/01-sort) : 排序
- [05-array](./src/05-array) : 数组相关的算法
- [06-link](./src/06-link) : 链表
- [07-search](./src/07-search) : 二分法搜索
- [08-stack](./src/08-stack) : 栈
- [09-heap](./src/09-heap) : 堆
- [10-recursive](./src/10-recursive) : 递归
- [11-binary-tree](./src/11-binary-tree) : 二叉树
- [12-graph](./src/12-graph) :图
- [13-doublepoint](./src/13-doublepoint) : 双指针
- [14-slidingwindow](./src/14-slidingwindow) : 滑动窗口
- [15-fenzhi](./src/15-fenzhi-n) : 分治算法
- [16-backtracking](./src/16-backtracking) : 回溯法
- [17-dfs](./src/17-dfs) : 深度优先
- [18-bfs](./src/18-bfs) : 广度优先
- [19-unionfind](./src/19-unionfind) : 并查集
- [20-greed](./src/20-greed) : 贪心
- [22-dp](./src/22-dp) : 动态规划
