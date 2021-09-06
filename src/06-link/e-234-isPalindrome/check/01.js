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
 * 1. 找中点
 * 2. 反转
 * 3. 对比
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const last = findPivot(head)
  const nh = last.next
  last.next = null
  const rh = reverse(nh)
  return compare(head, rh)
}

function compare(l, r) {
  while (l && r) {
    if (l.val !== r.val) {
      return false
    }
    l = l.next
    r = r.next
  }

  return true
}

function reverse(h) {
  let [p, c, n] = [null, h, null]
  while (c) {
    n = c.next
    c.next = p
    p = c
    c = n
  }
  return p
}

function findPivot(head) {
  const hair = new ListNode(null, head)
  let [l, r] = [hair, hair]
  while (r && r.next) {
    l = l.next
    r = r.next.next
  }
  return l
}

module.exports = {
  findPivot,
  reverse,
  compare,
  isPalindrome,
  ListNode
}
