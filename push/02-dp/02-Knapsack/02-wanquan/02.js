function unboundedKnapsack(weights, values, W) {
  var f = [],
    n = weights.length;
  f[-1] = []; //初始化边界
  for (let i = 0; i <= W; i++) {
    f[-1][i] = 0;
  }
  for (let i = 0; i < n; i++) {
    f[i] = [];
    for (let j = 0; j <= W; j++) {
      if (j < weights[i]) {
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i][j - weights[i]] + values[i]);
      }
    }
    console.log(f[i].concat());//调试
  }
  return f[n - 1][W];
}

var a = unboundedKnapsack([3, 2, 2], [5, 10, 20], 5); //输出40
console.log(a);
var b = unboundedKnapsack([2, 3, 4, 7], [1, 3, 5, 9], 10); //输出12
console.log(b);
