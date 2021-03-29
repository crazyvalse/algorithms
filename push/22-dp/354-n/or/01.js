console.info(
  [
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3]
  ].sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })
)
