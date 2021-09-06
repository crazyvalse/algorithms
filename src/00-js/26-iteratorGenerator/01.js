function IteratorGenerator(A) {
  const n = A.length
  let index = 0
  return {
    next() {
      const done = index >= n
      const value = !done ? A[index++] : undefined
      return {
        done,
        value
      }
    }
  }
}

const it = IteratorGenerator([1, 2, 3])
console.info(it.next())
console.info(it.next())
console.info(it.next())
console.info(it.next())
