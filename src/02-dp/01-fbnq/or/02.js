/*
动态规划
 */

function dynFIb(n) {
  let val = []
  for (let i = 0; i <= n; i++) {
    val[i] = 0
  }
  if (n === 1 || n === 2) {
    return 1
  } else {
    val[1] = 1
    val[2] = 2
    for (let i = 3; i <= n; i++) {
      val[i] = val[i - 1] + val[i - 2]
    }
    return val[n - 1]
  }
}

console.info(dynFIb(5))
