class Heap {
  constructor(data) {
    this.data = data
  }

  // 堆排序
  /**
   * 最大堆 - 子堆的root 是这个堆 最大的值
   * 1. 找到 i 的子节点
   * 2. 比较 i 与子节点的大小
   *  - 如果 i 比子节点小，交换
   *  - 如果 i !== largest 说明当前不是最大的值
   *  swap(array, i, largest)
   *  heapify(array, largets, size)
   *  i === largest 说明当前就是最大的值
   *
   *  边界条件
   *  1. i 没有左右节点
   * @param array
   * @param currentIndex
   * @param length
   */
  static heapify(array, currentIndex, length) {
    if (array.length < 2 || length < 2) {
      return array
    }
    // 1. 找到子节点
    let leftChildIndex = currentIndex * 2 + 1
    let rightChildIndex = currentIndex * 2 + 2
    let largestItemIndex = currentIndex
    // 判断左侧子节点是不是大
    if (leftChildIndex < length && array[leftChildIndex] > array[largestItemIndex]) {
      largestItemIndex = leftChildIndex
    }
    // 判断右侧节点是不是大
    if (rightChildIndex < length && array[rightChildIndex] > array[largestItemIndex]) {
      largestItemIndex = rightChildIndex
    }
    // 如果最大的值不是当前的root，1. 交换位置，把最大的挑出来；2. 处理原节点在子树内的位置
    if (largestItemIndex !== currentIndex) {
      Heap.swap(array, largestItemIndex, currentIndex)
      Heap.heapify(array, largestItemIndex, length)
    }
  }

  static swap(array, a, b) {
    ;[array[a], array[b]] = [array[b], array[a]]
  }

  /**
   * 排序
   * 1. 先把所有的节点都排一次序，做成最大堆
   * 2. 交换 0 与 length - 1
   * 3. 排序 剩下的节点 heapify(array, 0, length - 1 - i)
   */
  sort() {
    if (this.data.length < 2) {
      return this.data
    }

    const array = this.data
    // 1. 做一次全部的排序 最底层不用排，从最后一个有子节点的父节点开始
    // 2. 0号节点也得排
    for (let i = Math.floor((array.length - 2) / 2); i >= 0; i--) {
      Heap.heapify(array, i, array.length)
    }

    // 交换 0 和最后一个，然后排序
    for (let i = 0; i < array.length; i++) {
      Heap.swap(array, 0, array.length - 1 - i)
      Heap.heapify(array, 0, array.length - 1 - i)
    }

    return array
  }
}

module.exports = Heap
