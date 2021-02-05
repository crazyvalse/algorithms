/*
快速排序 in-place

sortAndfindPivot()
1. nextPointer 指针永远指向下一位
2. pivot = array[0]
2. if (pivot > array[i])
swap(array, nextPointer ++, i)

最后一步 swap(array, 0, nextPointer - 1)
return nextPointer - 1

walk (array, left, right) {
  if( left < right){
    const pivot = sortAndfindPivot(array)
    walk(array, left, pivot)
    walk(array, pivot + 1, right)
  }
  return walk
}
 */

module.exports = function (array) {
  const swap = (array, a, b) => {
    if (a !== b) {
      ;[array[a], array[b]] = [array[b], array[a]]
    }
  }

  const sortAndFindPivot = (array, left, right) => {
    if (array.length < 2) {
      return array
    }
    let nextPointer = left + 1
    const pivot = array[left]
    // fixme 应该是 <= 因为算的都是下标
    // fixme 应该从 left开始遍历
    for (let i = left; i <= right; i++) {
      if (pivot > array[i]) {
        swap(array, nextPointer++, i)
      }
    }
    swap(array, left, nextPointer - 1)
    return nextPointer - 1
  }

  const walk = (array, left, right) => {
    if (left < right) {
      // 先找到基线
      const pivot = sortAndFindPivot(array, left, right)
      // walk 前面的
      walk(array, left, pivot)
      // walk 后面的
      walk(array, pivot + 1, right)
    }
    return array
  }
  return walk(array, 0, array.length - 1)
}
