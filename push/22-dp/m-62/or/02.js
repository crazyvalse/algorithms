/**
 *
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cart = new Array(n).fill(new Array(n).fill(0))
  const walk = function (m, n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (i === 0 || j === 0) {
          cart[i][j] = 1
        } else {
          cart[i][j] = cart[i - 1][j] + cart[i][j - 1]
        }
      }
    }
    return cart[n - 1][m - 1]
  }
  return walk(m, n)
}

module.exports = uniquePaths
