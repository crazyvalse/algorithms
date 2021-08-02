/**
 * 1. 构建最大堆
 * 2. 交换头尾两个节点，长度 - 1，currentIndex = 0 继续构建最大堆
 * @param array
 */
function sort(array) {
  if (array.length < 2) {
    return array
  }
  initHeap(array)
  doSort(array)
  return array
}

/**
 * 组成最大堆之后，把第一和最后交换，然后处理 0 堆
 *
 * 1. 组成最大堆之后，
 * 2. 交换 头尾
 * 3. 继续构建 从0开始构建
 * @param array
 */
function doSort(array) {
  for (let l = array.length - 1; l >= 0; l--) {
    swap(array, 0, l)
    heapify(array, 0, l)
  }
}

/**
 * 构建最大堆
 * 1. 找到最后一个父节点
 * 2. 从最后一个父节点开始向头构建
 * @param array
 */
function initHeap(array) {
  if (array.length < 2) {
    return
  }
  const pivot = (array.length >> 1) - 1
  for (let i = pivot; i >= 0; i--) {
    heapify(array, i, array.length)
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
  if (array.length < 2 || length < 2) {
    return
  }
  // 1. 找到子节点
  const lc = current * 2 + 1
  const rc = current * 2 + 2

  // 2. 找到最大索引
  let c = current
  if (lc < length && array[lc] > array[c]) {
    c = lc
  }
  if (rc < length && array[rc] > array[c]) {
    c = rc
  }

  // 3. 如果交换了，就交换并且继续处理子节点
  if (current !== c) {
    swap(array, current, c)
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
