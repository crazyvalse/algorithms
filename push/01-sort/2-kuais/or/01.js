/*
快速排序
 */

/**
 * 1. 选择数组中间数作为技术，并从数组中取出此基础
 * 2. 两个容器，小的放左边，大的放右边
 * 3. 递归处最后合起来理
 * @param array
 */
module.exports = function (array) {
  const sort = (array) => {
    if (array.length < 2) {
      return array
    }

    const flag = array[0]
    const length = array.length
    let left = []
    let right = []

    for (let i = 1, current; i < length; i++) {
      current = array[i]
      if (current > flag) {
        right.push(current)
      } else {
        left.push(current)
      }
    }
    return sort(left).concat(flag, sort(right))
  }
  return sort(array)
}
