// 判断是否是闭环

const hasCycle = (head) => {
  let set = new Set()
  let p = head
  debugger
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
