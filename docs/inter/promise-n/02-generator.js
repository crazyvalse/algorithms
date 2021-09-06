function* createIterator() {
  yield 1
  return 42
  yield 2
}
const it = createIterator()

console.info(it.next())
console.info(it.next())
console.info(it.next())
