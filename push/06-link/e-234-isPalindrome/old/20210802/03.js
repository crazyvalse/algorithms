/*
请判断一个链表是否为回文链表。

示例 1:
输入: 1->2
输出: false

示例 2:
输入: 1->2->2->1
输出: true
进阶：
你能否用O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * FIXME
 * 放到数组中，然后用双指针查看是否符合
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let first = head
  function walk(current) {
    // 找到最后一个节点，只要不为null就继续调用
    if (current.next) {
      return walk(current.next)
    }

    if (current.val !== first.val) {
      return false
    }
    first = first.next
    return true
  }
  return walk(head)
}

module.exports = {
  isPalindrome,
  ListNode
}
