/*
滚动数组
由于当前行的状态只与前一行有关，因此我们可以使用两个数组
主要是两个指针
 */

function knapsack(weights, values, W) {
  var n = weights.length
  let lastLine = 0,
    currLine
  var f = [new Array(W + 1).fill(0), []]
  for (var i = 0; i < n; i++) {
    currLine = lastLine === 0 ? 1 : 0 // 决定当前复写滚动数组的哪一行
    for (var j = 0; j <= W; j++) {
      if (j >= weights[i]) {
        var a = f[lastLine][j]
        var b = f[lastLine][j - weights[i]] + values[i]
        f[currLine][j] = Math.max(a, b)
      } else {
        f[currLine][j] = f[lastLine][j]
      }
    }
    lastLine = currLine
  }
  return f[currLine][W]
}

// 保险箱中 物品的价值
let values = [4, 5, 10, 11, 13]
// 物品的尺寸
let weights = [3, 4, 7, 8, 9]

// 1. 获得 capacity <= 16 的所有方法
// 总尺寸
let capacity = 16
console.info(knapsack(weights, values, capacity))
