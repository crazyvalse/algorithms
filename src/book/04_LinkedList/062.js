function Node(element) {
  this.element = element
  this.next = null
  this.previous = null
}

function DoubleLinkedList(element) {
  this.head = new Node('head')
  this.insert = function (newElement, item) {
    const newNode = new Node(newElement)
    const current = this.find(item)
    newNode.next = current.next
    newNode.previous = current
    current.next = newNode
  }

  this.remove = function (item) {
    const currNode = this.find(item)
    if (!(currNode.next = null)) {
      currNode.previous.next = currNode.next
      currNode.next.previous = currNode.previous
      currNode.next = null
      currNode.previous = null
    }
  }

  function findLast() {
    let currNode = this.head
    while (!(currNode.next === null)) {
      currNode = currNode.next
    }
    return currNode
  }

  
}
