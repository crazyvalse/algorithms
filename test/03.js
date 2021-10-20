function foo(grid) {
  const row = grid.length
  const column = grid[0].length
  let result = 0

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      if (grid[r][c]) {
        result = Math.max(result, walk(r, c))
      }
    }
  }

  function walk(r, c) {
    if (!grid[r][c]) {
      return 0
    }
    let sum = 0
    grid[r][c] = 0
    // 上
    if (r - 1 >= 0 && grid[r - 1][c] === 1) {
      sum += walk(r - 1, c)
    }

    // 下
    if (r + 1 < row && grid[r + 1][c] === 1) {
      sum += walk(r + 1, c)
    }

    // 左
    if (c - 1 >= 0 && grid[r][c - 1]) {
      sum += walk(r, c - 1)
    }

    if (c + 1 < column && grid[r][c + 1]) {
      sum += walk(r, c + 1)
    }

    return sum + 1
  }
  return result
}

console.info(
  foo([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
  ])
)
