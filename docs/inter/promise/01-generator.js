function* createIterator() {
  let first = yield 1
  let second = yield first + +2
  let last = yield second + 3
}
const iterator = createIterator()

console.info(iterator.next())
console.info(iterator.next(2))
console.info(iterator.next(3))
console.info(iterator.next(2))
console.info(iterator.next())

/*
{ value: 1, done: false }
{ value: 4, done: false }
{ value: 6, done: false }
 */
