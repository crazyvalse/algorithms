function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 * 1. 排序并返回pivot
 *  - 以array[left]为基准，小的放左边，大的放右边，最后交换 left 与 pivot
 *  let pivot = left + 1 // 指向下一个
 *  let next = left + 1
 *  pivot 为指针，小的元素交换放到pivot++位置
 *    - if(array[next] < array[left]){
 *      swap(array, pivot++, next)
 *    }
 *
 *
 */
const sortAndFindPivot = function (array, left, right) {
  if (array.length < 2) {
    return array
  }
  let pivot = left + 1
  for (let next = left + 1; next <= right; next++) {
    if (array[next] < array[left]) {
      swap(array, pivot++, next)
    }
  }
  swap(array, pivot - 1, left)
  return pivot - 1
}

/**
 * 1. 先拿到pivot
 * 2. 以pivot为基准，前面是 left, pivot，pivot + 1， right，后面选取pivot的时候需要选择一个有意义的所以不能是 pivot
 * @param array
 */
function sort(array) {
  const walk = function (array, left, right) {
    if (array.length < 2) {
      return array
    }
    const pivot = sortAndFindPivot(array, left, right)
    walk(array, left, pivot)
    walk(array, pivot + 1, right)
    return array
  }
  return walk(array, 0, array.length - 1)
}

module.exports.sortAndFindPivot = sortAndFindPivot
module.exports.sort = sort
