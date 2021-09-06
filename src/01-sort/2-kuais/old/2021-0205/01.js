/*
快速排序
1. const flag = array[0]
2. array[i] < flag left.push(array[i])
3. array[i] > flag right.push(array[i])

边界 array.length < 2
walk(left.concat(flag, walk(right)))
 */
function sort(array) {
  const walk = (array) => {
    if (array.length < 2) {
      return array
    }
    const flag = array[0]
    const left = []
    const right = []
    for (let i = 1, len = array.length; i < len; i++) {
      if (array[i] < flag) {
        left.push(array[i])
      } else {
        right.push(array[i])
      }
    }
    return walk(left).concat(flag, walk(right))
  }
  return walk(array)
}

module.exports = sort
