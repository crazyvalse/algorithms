function unboundedKnapsack(weights, values, W) {
  var n = weights.length,
    f = new Array(W + 1).fill(0)
  for (var i = 0; i < n; ++i) {
    for (j = weights[i]; j <= W; ++j) {
      var tmp = f[j - weights[i]] + values[i]
      f[j] = f[j] > tmp ? f[j] : tmp
    }
  }
  console.log(f) //调试
  return f[W]
}
var a = unboundedKnapsack([3, 2, 2], [5, 10, 20], 5) //输出40
console.log(a)
var b = unboundedKnapsack([2, 3, 4, 7], [1, 3, 5, 9], 10) //输出12
console.log(b)
