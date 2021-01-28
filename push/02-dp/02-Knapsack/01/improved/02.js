// 补充第 - 1 行
function knapsack(weights, values, W) {
  var n = weights.length
  var f = new Array(n)
  f[-1] = new Array(W + 1).fill(0)
  for (var i = 0; i < n; i++) {
    //注意边界，没有等号
    f[i] = new Array(W).fill(0)
    for (var j = 0; j <= W; j++) {
      //注意边界，有等号
      if (j < weights[i]) {
        //注意边界， 没有等号
        f[i][j] = f[i - 1][j]
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]) //case 3
      }
    }
  }
  return f[n - 1][W]
}
