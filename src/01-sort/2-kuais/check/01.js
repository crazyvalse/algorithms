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
  // 1. 以第一个l为base
  const base = array[l]
  // 2. 设置pivot
  let pivot = l + 1
  let index = pivot
  while (index <= r) {
    // 3. 与 base 比，大的话就调换位置
    if (array[index] < base) {
      // 4. pivot 下移
      swap(array, index, pivot++)
    }
    index++
  }
  // 5. 调整 base的位置
  swap(array, l, pivot - 1)
  // 6. pivot 是base的下一位
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

  // 分治
  const walk = function (l, r) {
    if (l >= r) {
      return
    }
    // 1. 排序后 base 的位置
    const pivot = sortAndFindPivot(array, l, r)
    // 2. 一分为2 继续
    walk(l, pivot - 1)
    //
    walk(pivot, r)
  }
  // 调用
  walk(0, array.length - 1)
  return array
}

module.exports.sortAndFindPivot = sortAndFindPivot
module.exports.sort = sort
