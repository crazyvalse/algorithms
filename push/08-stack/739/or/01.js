/*
请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

496
901
42
84
 */
/**
 * 思路 - 两层循环
 *  - 遍历数组中的每一项
 *  - 查询后面有没有比这一项大的值
 *  - push
 *
 * const result = []
 * for i = 0,...,length i++
 *  for j = i,...,length j++
 *    if(array[i] < array[j]){
 *      result.push(j - i)
 *    }
 *  if(result.length - 1 !== i) {
 *    result.push(0)
 *  }
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const result = new Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    for (let j = i + 1; j < T.length; j++) {
      if (T[i] < T[j]) {
        result[i] = j - i
        break
      }
    }
  }
  return result
}

module.exports = dailyTemperatures
