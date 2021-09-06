/*
无事街上走，提壶去打酒。
逢店加一倍，遇花喝一斗。

这一路上，他一共遇到店5次，遇到花10次，已知最后一次遇到的是花，他正好把酒喝光了。
所有方案的个数

递归：
1. 出口
shop === 0 && flower ===0 && total = 0
result++

2. 参数
3. 递归
 */

let counter = 0

function dfs(shop, flower, total) {
  if (shop === 0 && flower === 0 && total === 1) {
    counter++
    return
  }
  if (shop > 0) {
    dfs(shop - 1, flower, total * 2)
  }
  if (flower > 0) {
    dfs(shop, flower - 1, total - 1)
  }
}

dfs(5, 9, 2)
console.info(counter)
