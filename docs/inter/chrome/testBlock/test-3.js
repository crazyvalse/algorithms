/*
sum(1)(2) = 3
sum(5)(-1) = 4
 */

function sum(a) {
  return function (b) {
    return a + b
  }
}

console.info(sum(1)(2))
console.info(sum(5)(-1))
