/**
 *
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let result = 0
  const walk = function (d, r) {
    if (d === m - 1 && r === n - 1) {
      result++
      return
    }
    if (d >= m || r >= n) {
      return
    }
    walk(d + 1, r)
    walk(d, r + 1)
  }
  walk(0, 0)
  return result
}

module.exports = uniquePaths
