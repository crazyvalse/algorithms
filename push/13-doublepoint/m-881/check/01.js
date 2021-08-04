/*
第i个人的体重为people[i]，每艘船可以承载的最大重量为limit。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为limit。

返回载到每一个人所需的最小船数。(保证每个人都能被船载)。


示例 1：

输入：people = [1,2], limit = 3
输出：1
解释：1 艘船载 (1, 2)
示例 2：

输入：people = [3,2,2,1], limit = 3
输出：3
解释：3 艘船分别载 (1, 2), (2) 和 (3)
示例 3：

输入：people = [3,5,3,4], limit = 5
输出：4
解释：4 艘船分别载 (3), (3), (4), (5)
提示：

1 <=people.length <= 50000
1 <= people[i] <=limit <= 30000

 */
/**
 * 1. 每艘船最多可同时载两人
 * 2. 这些人的重量之和最多为limit
 * 3. 返回载到每一个人所需的最小船数 min
 *
 * min++: 每次计算 min++
 * l:
 * r:
 * 前后相加 al + ar <= target
 * l++
 * 正常
 * r--
 * min++
 * @param {number[]} a
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (a, limit) {
  a.sort((a, b) => a - b)
  const n = a.length
  let [l, r] = [0, n - 1]
  let counter = 0
  while (l <= r) {
    if (a[l] + a[r] <= limit) {
      l++
    }
    r--
    counter++
  }
  return counter
}

module.exports = numRescueBoats
