/**
 * 1. 构建最大堆
 * 2. 交换头尾两个节点，长度 - 1，currentIndex = 0 继续构建最大堆
 * @param array
 */
function sort(array) {
  if (array.length <= 1) {
    return array
  }
  initHeap(array)
  doSort(array)
  return array
}

/**
 * 组成最大堆之后，把第一和最后交换，然后处理 0 堆
 * @param array
 */
function doSort(array) {
  const n = array.length
  for (let i = n - 1; i >= 0; i--) {
    swap(array, 0, i)
    heapify(array, 0, i)
  }
}

/**
 * 构建最大堆
 * 从最后一个父节点开始向前推进
 * @param array
 */
function initHeap(array) {
  const length = array.length
  const pivot = length >>> 1
  for (let i = pivot; i >= 0; i--) {
    heapify(array, i, length)
  }
}

/**
 * 1. 找到子节点
 * 2. 判断父子大小
 * 3. 选择其中最大的那个
 *
 * 4. 如果父节点小，换句话说 已经交换了
 *  - swap 值
 *  - 处理受影响的子节点
 *
 * 只跟父节点比较
 * @param array 目标数组
 * @param current 需要处理的子树父节点
 * @param length 当前数组长度
 */
function heapify(array, current, length) {
  if (array.length <= 1 || length <= 1) {
    return
  }
  const lc = current * 2 + 1
  const rc = current * 2 + 2
  let c = current
  // 判断左侧的大小
  if (lc < length && array[c] < array[lc]) {
    c = lc
  }
  // 判断右侧的大小
  if (rc < length && array[c] < array[rc]) {
    c = rc
  }

  if (c !== current) {
    swap(array, c, current)
    heapify(array, c, length)
  }
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

module.exports = {
  initHeap,
  heapify,
  sort
}
