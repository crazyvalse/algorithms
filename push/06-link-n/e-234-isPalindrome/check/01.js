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
 * 链表的方式
 * 1. 找中点
 * 2. 把后面的反转
 * 3. 比较两个链表
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const pivot = findPivot(head)
  const reversedList = reverse(null, pivot.next)
  // 断掉 成为新的链表
  pivot.next = null
  return compare(head, reversedList)
}

// 找到中间的节点
function findPivot(head) {
  let hair = new ListNode(null, head)
  let l = hair
  let r = hair
  while (r && r.next) {
    l = l.next
    r = r.next.next
  }
  return l
}

/**
 * 修改指针
 * 1. 零界条件: 到了最后一个 cur === null return pre
 * 2. 返回条件: 反转后的 head
 * 3. 函数模型
 *
 * 调转指针
 *  - next = current.next
 *  - current.next = pre
 *
 */
function reverse(pre, cur) {
  let next
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

function compare(l1, l2) {
  while (l1 && l2) {
    if (l1.val !== l2.val) {
      return false
    }
    l1 = l1.next
    l2 = l2.next
  }
  return true
}

module.exports = {
  isPalindrome,
  ListNode,
  findPivot,
  reverse
}
