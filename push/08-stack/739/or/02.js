/**
 * 用单调栈
 * T:     [73, 74, 75, 71, 69, 72, 76, 73]
 *
 * stack: [75, 71, 69, 72]
 *
 * 1. 栈
 *  - 当 array[i] <= stack[stack.length - 1] 说明不是，stack.push(i)
 *  - 相反 新值大于栈中的，说明是
 *    while(stack.length !== 0 && array[i] > stack[stack.length - 1]) {
 *      result[index] = i - index
 *      index = stack.pop()
 *    }
 * @param T
 * @returns {any[]}
 */
const dailyTemperatures = (T) => {
  const result = new Array(T.length).fill(0)
  const stack = []
  let index
  for (let i = 0; i < T.length; i++) {
    while (stack.length !== 0 && T[i] > T[stack[stack.length - 1]]) {
      index = stack.pop()
      result[index] = i - index
    }
    stack.push(i)
  }
  return result
}

module.exports = dailyTemperatures
