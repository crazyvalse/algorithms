function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 * 找第一个元素 作为标准，比它小的数与 pivot 交换，然后 pivot++
 *
 * 最后一步 第一个元素与 pivot 交换位置
 * pivot
 */
function sortAndFindPivot(array, l, r) {
  const base = array[l]
  let pivot = l + 1
  let index = pivot
  while (index <= r) {
    if (array[index] < base) {
      swap(array, index, pivot++)
    }
    index++
  }
  swap(array, l, pivot - 1)
  return pivot
}

/**
 * pivot 是 上一次排序基准值，是下一次排序的上线，和下线 + 1
 * 1. 先拿到pivot
 * 2. 以pivot为基准，前面是 left, pivot，pivot + 1， right，后面选取pivot的时候需要选择一个有意义的所以不能是 pivot
 * @param array
 */
function sort(array) {
  if (array.length < 2) {
    return array
  }

  const walk = function (l, r) {
    if (l >= r) {
      return
    }
    const pivot = sortAndFindPivot(array, l, r)

    walk(l, pivot - 1)
    walk(pivot, r)
  }
  walk(0, array.length - 1)
  return array
}

module.exports.sortAndFindPivot = sortAndFindPivot
module.exports.sort = sort
