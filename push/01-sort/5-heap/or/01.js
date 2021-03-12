function sort(array) {
  if (!Array.isArray(array) || array.length < 2) {
    return array
  }

  const lastParentIndex = Math.floor((array.length - 2) / 2)
  for (let i = lastParentIndex; i >= 0; i--) {
    heapify(array, i, array.length)
  }

  for (let i = 0; i < array.length; i++) {
    swap(array, 0, array.length - 1 - i)
    heapify(array, 0, array.length - 1 - i)
  }
  return array
}

/**
 * 1. 确定子节点
 * 2. 找最大索引
 * 3. 交换 然后处理子节点
 * @param array
 * @param currentIndex
 * @param length
 */
function heapify(array, currentIndex, length) {
  if (array.length < 2 || length < 2) {
    return
  }
  let largestItemIndex = currentIndex
  let leftChildIndex = currentIndex * 2 + 1
  let rightChildIndex = currentIndex * 2 + 2
  if (leftChildIndex < length && array[leftChildIndex] > array[largestItemIndex]) {
    largestItemIndex = leftChildIndex
  }
  if (rightChildIndex < length && array[rightChildIndex] > array[largestItemIndex]) {
    largestItemIndex = rightChildIndex
  }

  if (largestItemIndex !== currentIndex) {
    swap(array, currentIndex, largestItemIndex)
    heapify(array, largestItemIndex, length)
  }
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

module.exports = {
  heapify,
  sort
}

console.info(sort([2, 3, 4, 6, 9, 1, 6]))
