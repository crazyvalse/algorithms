/*
1块、4块、5块，求总数n块的最小硬币数

f: 当前钱数最小的硬币数

f.fill(target + 1)

f[0] = 0
f[1] = Math.min(f[1 - A[i]] + 1, f[1])


 */
const sum = function (A, target) {
  const n = A.length
  const f = new Array(target + 1).fill(target + 1)
  f[0] = 0

  for (let v = 0; v <= target; v++) {
    for (let i = 0; i < n; i++) {
      if (f[v - A[i]] !== target + 1 && f[v - A[i]] + 1 < f[v]) {
        f[v] = f[v - A[i]] + 1
      }
    }
  }

  return f[target] === target + 1 ? 0 : f[target]
}

module.exports = sum
