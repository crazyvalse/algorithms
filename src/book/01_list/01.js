function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
  this.clear = clear
  this.find = find
  this.toString = toString
  this.insert = insert
  this.append = append
  this.remove = remove
  // this.front = front
  // this.end = end
  // this.prev = prev
  // this.next = next
  // this.hasNext
  // this.hasPrev
  // this.length = length
  // this.currPos = currPos
  // this.moveTo = moveTo
  // this.getElement = getElement
  this.contains = contains

  function append(element) {
    this.dataStore[this.listSize++] = element
  }

  function find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return i
      }
    }
    return -1
  }

  function remove(element) {
    const foundAt = this.find(element)

    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1)
      this.listSize--
      return true
    }

    return false
  }

  function length() {
    return this.listSize
  }

  function toString() {
    return this.dataStore
  }

  function insert(element, after) {
    var insertPos = this.find(after)
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element)
      this.listSize++
      return true
    }
    return false
  }

  function clear() {
    delete this.dataStore
    this.dataStore.length = 0
    this.listSize = this.pos = 0
  }

  function contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) {
        return true
      }
    }
    return false
  }
}

const names = new List()

names.append('zac')
names.append('isaac')
names.append('lodash')
console.info(names.toString())

names.remove('zac')
console.info(names.toString())
