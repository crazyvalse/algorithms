function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 * 找第一个元素 作为标准，比它小的数与 pivot 交换，然后 pivot++
 *
 * 最后一步 第一个元素与 pivot 交换位置
 * pivot
 */
const sortAndFindPivot = function (array, left, right) {
  const target = array[left]
  let pivot = left + 1

  for (let i = pivot; i <= right; i++) {
    if (target > array[i]) {
      swap(array, pivot++, i)
    }
  }
  swap(array, left, pivot - 1)
  return pivot
}

/**
 * 1. 先拿到pivot
 * 2. 以pivot为基准，前面是 left, pivot，pivot + 1， right，后面选取pivot的时候需要选择一个有意义的所以不能是 pivot
 * @param array
 */
function sort(array) {
  if (array.length < 2) {
    return array
  }
  const walk = function (left, right) {
    if (left >= right) {
      return
    }
    const pivot = sortAndFindPivot(array, left, right)
    walk(left, pivot - 1)
    walk(pivot, right)
  }
  walk(0, array.length - 1)
  return array
}

module.exports.sortAndFindPivot = sortAndFindPivot
module.exports.sort = sort
