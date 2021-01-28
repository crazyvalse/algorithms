/*
划分交换排序 - 快速排序
 */
module.exports = function (array) {
  // 找到中心点
  const findCenter = (array, left, right) => {
    const flag = array[left]
    let idx = left + 1
    // 找到比flag大的，并与idx交换
    for (let i = idx; i <= right; i++) {
      if (flag > array[i]) {
        ;[array[idx], array[i]] = [array[i], array[idx]]
        idx++
      }
    }
    ;[array[left], array[idx - 1]] = [array[idx - 1], array[left]]
    return idx
  }
  const sort = function (array, left, right) {
    if (array.length < 2) {
      return array
    }
    if (left < right) {
      const center = findCenter(array, left, right)
      sort(array, left, center - 1)
      sort(array, center, right)
    }
  }
  sort(array, 0, array.length - 1)
  return array
}
