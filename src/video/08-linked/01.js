/*
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：

输入：head = [4,2,1,3]
输出：[1,2,3,4]

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]

你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

 */
/*
先实现链表，快排
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {}

// 节点
class Node {
  constructor(value) {
    this.value = value
    this.next = undefined
  }
}

// 链表
class NodeList {
  constructor(arr) {
    let head = new Node(arr.shift())
    let next = head
    arr.forEach((item) => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}

// 交换
let swap = (p, q) => {
  let temp = p.value
  p.value = q.value
  q.value = temp
}
