// 判断是否是闭环
/**
 * 快慢指针
 *
 * @param head
 * @returns {boolean}
 */
const hasCycle = (head) => {
  let set = new Set()
  let p = head
  while (p) {
    if (set.has(p)) {
      return true
    }
    set.add(p)
    p = p.next
  }
  return false
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports = {
  hasCycle,
  ListNode
}
