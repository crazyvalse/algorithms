/*

https://labuladong.gitee.io/algo/2/17/18/
 */
const { arrayToListNode } = require('../../utils')

// 判断回文
let left

function isPalindrome(head) {
  left = head
  return traverse(head)
}

function traverse(right) {
  if (right === null) {
    return true
  }
  // 进入到了最后一项
  let res = traverse(right.next)
  // 从最后一项开始判断
  // 1. 之前的结果； 2. 当前的结果
  res = res && right.val === left.val
  // left 向左移动
  left = left.next
  return res
}

const h = arrayToListNode([1, 2, 3, 2, 1])
console.info(isPalindrome(h))
