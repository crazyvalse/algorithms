/*
选择排序
1. 每次找到最小的那个放到第一位，然后以此类推
2. 两个for循环
i. for 计算起始i
ii.  for 比较，并swap
 */

module.exports = function (array) {
  const sort = (array) => {
    const length = array.length
    let min = null
    for (let i = 0; i < length; i++) {
      min = i
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[i]) {
          min = j
        }
      }
      if (min !== i) {
        [array[min], array[i]] = [array[i], array[min]]
      }
    }
    return array
  }

  return sort(array)
}
