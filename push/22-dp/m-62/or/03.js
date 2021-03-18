/**
 *
 *
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const cart = new Array(m).fill(1)
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      cart[j] += cart[j - 1]
    }
  }
  return cart[m - 1]
}

module.exports = uniquePaths
