/*
1块、4块、5块，求总数n块的最小硬币数
 */

function minCoinNum(array, n) {
  const f = Array.from({ length: n + 1 }, () => Infinity)
  f[0] = 0
  for (let v = 1; v <= n; v++) {
    for (let i = 0; i < array.length; i++) {
      const previous = v - array[i]
      if (previous >= 0 && f[previous] !== Infinity && f[v] > f[previous] + 1) {
        f[v] = f[previous] + 1
      }
    }
  }
  console.info(f)
  return f[n] === Infinity ? -1 : f[n]
}

console.info(minCoinNum([1, 4, 5], 11))
