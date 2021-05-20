function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function arrayToListNode(array) {
  if (array.length === 0) {
    return null
  }
  let hair = new ListNode(array[0])
  let pre = hair
  for (let i = 1; i < array.length; i++) {
    const p = new ListNode(array[i])
    pre.next = p
    pre = p
  }
  return hair
}

function listNodeToArray(head) {
  let it = head
  const array = []
  while (it) {
    array.push(it.val)
    it = it.next
  }
  return array
}

module.exports = {
  ListNode,
  arrayToListNode,
  listNodeToArray
}
