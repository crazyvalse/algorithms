/*
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
找到所有在 [1, n] 范围之间没有出现在数组中的数字。
您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

示例:
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
 */
/**
 * 1. 使用map记录每个num出现的次数
 * 2. 遍历map，把 map[key] === 0 的 key 塞进 result 中
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const map = nums.reduce((pre, key) => {
    pre[key] = pre[key] ? pre[key] + 1 : 1
    return pre
  }, {})
  return nums.reduce((pre, key, index) => {
    if (!map[index + 1]) {
      pre.push(index + 1)
    }
    return pre
  }, [])
}

module.exports = findDisappearedNumbers
