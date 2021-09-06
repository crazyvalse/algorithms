/*
使用 一维数组压缩空间
 */
//by 司徒正美
function knapsack(weights, values, capacity) {
  const length = weights.length
  //
  const dp = new Array(capacity + 1).fill(0)
  for (let i = 0; i < length; i++) {
    for (let w = capacity; w >= weights[i]; w--) {  // 由于都是跟前面的比较，因此需要预留出来，前面的都是上一次的
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i])
    }
  }
  return dp[capacity]
}
const b = knapsack([2, 2, 6, 5, 4], [6, 3, 5, 4, 6], 10)
console.log(b)
