function makeCounter() {
  let count = 0

  return function () {
    return count++
  }
}

let counter = makeCounter()
let counter2 = makeCounter()

console.info(counter()) // 0
console.info(counter()) // 1

console.info(counter2()) // ?
console.info(counter2()) // ?
