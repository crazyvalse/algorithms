/*
给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。

示例 1：

输入：nums = [1,2,0]
输出：3

示例 2：

输入：nums = [3,4,-1,1]
输出：2

示例 3：

输入：nums = [7,8,9,11,12]
输出：1
 */
/*
给每一项添加 n
当 x > 0 时有效
给 a[x] += n
[1, 2, 0]

1. 用 ai 作为索引 f[ai] = true
const f = []
f[item] = true

2. 找到第一个 f[ai] === undefined

找不到的话 就是数组的长度
 */

function findMin(a) {
  const n = a.length
  const f = []
  for (let i = 0; i < n; i++) {
    if (a[i] > 0) {
      f[a[i]] = true
    }
  }

  for (let i = 1; i < f.length; i++) {
    if (!f[i]) {
      return i
    }
  }

  return a.length
}

console.info(findMin([7, 8, 9, 11, 12]))
