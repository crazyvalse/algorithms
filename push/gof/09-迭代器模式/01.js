// const array = [1, 2, 3]
// const iterator = array[Symbol.iterator]()
//
// console.info(iterator.next())
// console.info(iterator.next())
// console.info(iterator.next())
// console.info(iterator.next())
//
// const it = foo()
//
// console.info(it.next())
// console.info(it.next())
// console.info(it.next())
// console.info(it.next())

function iteratorGenerator(list) {
  let index = 0
  const length = list.length

  return {
    next: function () {
      const done = index >= length
      const value = !done ? list[index++] : undefined

      return {
        done,
        value
      }
    }
  }
}

const iterator = iteratorGenerator([1, 2, 3, 4])
console.info(iterator.next())
console.info(iterator.next())
console.info(iterator.next())
console.info(iterator.next())
