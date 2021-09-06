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

function link2Array(head) {
  let iterator = head
  const array = []
  while (iterator) {
    array.push(iterator.val)
    iterator = iterator.next
  }
  return array
}

function compare(array) {
  let l = 0
  let r = array.length - 1
  while (l < r) {
    if (array[l++] !== array[r--]) {
      return false
    }
  }
  return true
}

/**
 * 放到数组中，然后用双指针查看是否符合
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const array = link2Array(head)
  return compare(array)
}

module.exports = {
  isPalindrome,
  ListNode
}
