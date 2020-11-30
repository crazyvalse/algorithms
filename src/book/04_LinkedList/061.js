// 20201117

function Node(element) {
  this.element = element
  this.next = null
}

function LinkedList() {
  this.head = new Node('head')
  this.find = function (item) {
    let currNode = this.head
    while (currNode.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }

  /**
   * 交换两个索引
   * 1. current.next
   * 2. newNode.next
   * @param newElement
   * @param after
   */
  this.insert = function (newElement, after) {
    let newNode = new Node(newElement)
    let current = this.find(after)

    newNode.next = current.next
    current.next = newNode
  }
  this.remove = function (item) {
    let preNode = this.findPrevious(item)
    if (!(preNode.next === null)) {
      preNode.next = preNode.next.next
    }
  }
  this.display = function () {
    var currNode = this.head
    while (!(currNode.next === null)) {
      console.info(currNode.next.element)
      currNode = currNode.next
    }
  }

  this.findPrevious = function (item) {
    let currNode = this.head
    while (!(currNode.next === null) && currNode.next.element !== item) {
      currNode = currNode.next
    }
    return currNode
  }
}

const cities = new LinkedList()
cities.insert('conway', 'head')
cities.insert('Russellville', 'conway')
cities.insert('alma', 'Russellville')

cities.display()

cities.remove('Russellville')

console.info('-------')
cities.display()
