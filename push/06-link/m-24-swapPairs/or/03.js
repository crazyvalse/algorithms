/*
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例1：
输入：head = [1,2,3,4]
输出：[2,1,4,3]

示例 2：
输入：head = []
输出：[]

示例 3：
输入：head = [1]
输出：[1]
 */
/**
 * 思路：
 * // 调换 l1 和 l2
 * // 如果没有 l2 的话 就 不作处理
 * 1、定义 pre, l1, l2, next
 *
 * @param {ListNode} one
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var swapPairs = function (one) {
  if (one === null || one.next === null) {
    return one
  }
  const two = one.next
  const three = two.next
  one.next = swapPairs(three)
  two.next = one
  return two
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports = {
  swapPairs,
  ListNode
}
