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
 * 1. 排序
 * 2. 最大的加上最小的
 *  - 如果 大于 limit，l不动 r--
 *  - 如果 小于 limit，l++ r--
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let l = 0
  let r = people.length - 1
  let counter = 0
  people.sort((a, b) => a - b)
  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      l++
    }
    r--
    counter++
  }
  return counter
}

module.exports = numRescueBoats
