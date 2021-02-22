function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

/**
 * 1. 返回 pivot - 1
 * 2. 以 array[left] 为 初始 pivot，next = left + 1，
 * 3. 当 pivot > array[i] 的时候交换 swap(array, next, i)
 * 4. 最后 swap(array, left, pivot -1)
 *
 * pivot = array[left]
 * next = left + 1
 * for i = (left + 1),...,(right - 1);
 *  if pivot > array[i]
 *    swap(next, i)
 *
 * swap(left, pivot - 1)
 * return pivot - 1
 */
const sortAndFindPivot = function (array, left, right) {
  if (Array.isArray(array) && array.length < 2) {
    return array
  }
  const pivot = array[left]
  let next = left + 1
  for (let i = left + 1; i <= right; i++) {
    if (pivot > array[i]) {
      swap(array, next, i)
      next++
    }
  }
  swap(array, left, next - 1)
  return next - 1
}

/**
 * 1. 先拿到pivot
 * 2. 以pivot为基准，前面是 left, pivot，pivot + 1， right，后面选取pivot的时候需要选择一个有意义的所以不能是 pivot
 * @param array
 */
function sort(array) {
  const walk = function (array, left, right) {
    if (left < right) {
      const pivot = sortAndFindPivot(array, left, right)
      walk(array, left, pivot)
      walk(array, pivot + 1, right)
    }
    return array
  }
  return walk(array, 0, array.length - 1)
}

module.exports.sortAndFindPivot = sortAndFindPivot
module.exports.sort = sort
