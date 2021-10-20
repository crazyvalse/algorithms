/*
 归并算法
 */

module.exports = sort

function sort(array) {
  const length = array.length

  if (length <= 1) {
    return array
  }

  if (length === 2) {
    return array[0] > array[1] ? [array[1], array[0]] : [array[0], array[1]]
  }
  let left = array.slice(0, Math.floor(length / 2))
  let right = array.slice(Math.floor(length / 2))

  return merge(sort(left), sort(right))
}

function merge(a, b) {
  const result = []
  let ap = 0
  let bp = 0
  while (ap < a.length && bp < b.length) {
    if (a[ap] > b[bp]) {
      result.push(b[bp++])
    } else {
      result.push(a[ap++])
    }
  }
  return result.concat(a.slice(ap)).concat(b.slice(bp))
}
