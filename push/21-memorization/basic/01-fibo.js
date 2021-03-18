/*
f0 = 0
f1 = 1
f2 = 1
f3 = 2
 */

function fib(n) {
  const memorization = new Array(n)
  const walk = function (n) {
    if (n === 0 || n === 1) {
      return n
    }
    if (n === 2) {
      return 2
    }
    if (memorization[n]) {
      return memorization[n]
    }
    return (memorization[n] = fib(n - 1) + fib(n - 2))
  }
  return walk(n)
}

console.info(fib(30))
