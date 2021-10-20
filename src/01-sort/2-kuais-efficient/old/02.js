/*
快排： 只移动idx
 */

function sort(array) {
  const walk = (array, left, right) => {
    const length = array.length
    if (length < 2) {
      return array
    }
    if (left < right) {
      const pivotIndex = findPivotIndex(array, left, right)
      walk(array, left, pivotIndex)
      walk(array, pivotIndex + 1, right)
    }
  }
  walk(array, 0, array.length - 1)
  return array
}

/**
 * 1. 以 array[0]为flag
 * 2. 遍历数组：如果 flag > array[i] 交换 idx（永远指向下一位） 与 i 的值
 * 3. 最后交换 0 与 idx - 1 的值
 * 4. 返回 idx - 1 这个就是center的位置
 * @param array
 * @param left
 * @param right
 */
function findPivotIndex(array, left, right) {
  const flag = array[left]
  let pointer = left + 1
  // fixme 应该是 <= 因为算的都是下标
  for (let i = left; i <= right; i++) {
    // fixme
    if (flag > array[i]) {
      swap(array, pointer, i)
      pointer++
    }
  }
  swap(array, left, pointer - 1)
  return pointer - 1
}

function swap(array, i, j) {
  ;[array[i], array[j]] = [array[j], array[i]]
}

module.exports = sort
