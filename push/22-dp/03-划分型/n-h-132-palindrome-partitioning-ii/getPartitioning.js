/**
 * 获得一个 回文速查表
 * @param s
 * @returns {any[][]}
 */
function getIsPartitioning(s) {
  const n = s.length
  const f = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isPartitioning(s, i, j)) {
        f[i][j] = true
      }
    }

    for (let j = i; j >= 0; j--) {
      if (isPartitioning(s, j, i)) {
        f[i][j] = true
      }
    }
  }
  return f
}

function isPartitioning(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false
    }
    l++
    r--
  }
  return true
}

console.info(getIsPartitioning('aab'))
