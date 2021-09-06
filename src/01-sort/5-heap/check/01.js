/**
 * 1. 构建最大堆
 * 2. 交换头尾两个节点，长度 - 1，currentIndex = 0 继续构建最大堆
 * @param array
 */
function sort(a) {
  if (a.length < 2) {
    return a
  }
  initHeap(a)
  doSort(a)
  return a
}

/**
 * 组成最大堆之后，把第一和最后交换，然后处理 0 堆
 *
 * 1. 组成最大堆之后，
 * 2. 交换 头尾
 * 3. 继续构建 从0开始构建
 * @param a
 */
function doSort(a) {
  // 1. 当前已经是最大堆了，换句话讲 a0 已经是最大值
  // 2. 交换 a0 与 al
  // 3. 以 a0 重新构建
  // 4. 把 length 减小
  const n = a.length
  for (let length = n - 1; length > 0; length--) {
    swap(a, 0, length)
    heapify(a, 0, length)
  }
}

/**
 * 构建最大堆
 * 1. 找到最后一个父节点
 * 2. 从最后一个父节点开始向头构建
 * @param a
 */
function initHeap(a) {
  // 从最后一个父节点开始构建
  const n = a.length
  const lastParentIndex = Math.ceil(n / 2) - 1
  for (let i = lastParentIndex; i >= 0; i--) {
    heapify(a, i, n)
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
 * @param a 目标数组
 * @param current 需要处理的子树父节点
 * @param length 当前数组长度
 */
function heapify(a, current, length) {
  if (a.length < 2 || length < 2) {
    return
  }

  // 1. 先找子节点
  const l = current * 2 + 1
  const r = current * 2 + 2

  // 2. 判断节点大小
  let c = current
  if (l < length && a[c] < a[l]) {
    c = l
  }

  if (r < length && a[c] < a[r]) {
    c = r
  }

  // 3. 如果已经交换的，swap
  // 4. 处理交换了的节点树
  if (c !== current) {
    swap(a, c, current)
    heapify(a, c, length)
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
