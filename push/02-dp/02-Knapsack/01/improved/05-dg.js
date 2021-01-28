//by 司徒正美
function knapsack(n, W, weights, values, selected) {
  if (n === 0 || W === 0) {
    //当物品数量为0，或者背包容量为0时，最优解为0
    return 0
  } else {
    //从当前所剩物品的最后一个物品开始向前，逐个判断是否要添加到背包中
    for (var i = n - 1; i >= 0; i--) {
      //如果当前要判断的物品重量大于背包当前所剩的容量，那么就不选择这个物品
      //在这种情况的最优解为f(n-1,C)
      if (weights[i] > W) {
        return knapsack(n - 1, W, weights, values, selected)
      } else {
        var a = knapsack(n - 1, W, weights, values, selected) //不选择物品i的情况下的最优解
        var b = values[i] + knapsack(n - 1, W - weights[i], weights, values, selected) //选择物品i的情况下的最优解
        //返回选择物品i和不选择物品i中最优解大的一个
        if (a > b) {
          selected[i] = 0 //这种情况下表示物品i未被选取
          return a
        } else {
          selected[i] = 1 //物品i被选取
          return b
        }
      }
    }
  }
}
var selected = [],
  ws = [2, 2, 6, 5, 4],
  vs = [6, 3, 5, 4, 6]
var b = knapsack(5, 10, ws, vs, selected)
console.log(b) //15
selected.forEach(function (el, i) {
  if (el) {
    console.log('选择了物品' + i + ' 其重量为' + ws[i] + ' 其价值为' + vs[i])
  }
})
