/**
 * f[r][c] 表示第 r 行 第 c 列的个数
 *
 * f[r][c] = f[r - 1][c] + f[r][c - 1]
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const f = Array.from({ length: m }, () => Array(n).fill(1))
  for (let r = 1; r < m; r++) {
    for (let c = 1; c < n; c++) {
      f[r][c] = f[r - 1][c] + f[r][c - 1]
    }
  }
  return f[m - 1][n - 1]
}

module.exports = uniquePaths
