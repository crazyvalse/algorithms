/*
1块、4块、5块，求总数n块的最小硬币数
 */
const sum = function (A, target) {
  let result = Infinity
  const walk = function (index, cart) {
    if (cart >= target) {
      if (cart === target) {
        result = Math.min(result, index)
      }
      return
    }

    for (let i = 0; i < A.length; i++) {
      walk(index + 1, cart + A[i])
    }
  }
  walk(0, 0)
  return result === Infinity ? 0 : result
}

module.exports = sum
