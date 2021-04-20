/**
 *
 *
 * @param {number} column
 * @param {number} row
 * @return {number}
 */
var uniquePaths = function (column, row) {
  const f = Array.from({ length: column }, () => 1)
  for (let r = 1; r < row; r++) {
    for (let c = 1; c < column; c++) {
      f[c] = f[c] + f[c - 1]
    }
  }
  return f[column - 1]
}

module.exports = uniquePaths
