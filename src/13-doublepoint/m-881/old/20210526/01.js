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
 * 暴力法
 * 两层遍历
 * 第一层 选一个人
 * 第二层 遍历
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let counter = 0
  for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length && people[i] !== null; j++) {
      if (people[j] !== null && people[i] + people[j] <= limit) {
        people[i] = null
        people[j] = null
        counter++
      }
    }
    if (people[i] !== null) {
      counter++
    }
  }
  return counter
}

module.exports = numRescueBoats
