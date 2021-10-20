
/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - If provided then all elements comparisons
 *  will be done through this callback.
 * @property {function(a: *)} visitingCallback - If provided it will be called each time the sorting
 *  function is visiting the next element.
 */

export default class Sort {
  constructor(originalCallbacks) {
    this.callbacks = Sort.initSortingCallbacks(originalCallbacks)
    this.comparator = new Comparator(this.callbacks.compareCallback)
  }

  /**
   * @param {SorterCallbacks} originalCallbacks
   * @returns {SorterCallbacks}
   */
  static initSortingCallbacks(originalCallbacks) {
    const callbacks = originalCallbacks || {}
    const stubCallback = () => {}

    callbacks.compareCallback = callbacks.compareCallback || undefined
    callbacks.visitingCallback = callbacks.visitingCallback || stubCallback

    return callbacks
  }

  sort() {
    throw new Error('sort method must be implemented')
  }
}

export default class MergeSort extends Sort {
  sort(originalArray) {
    // Call visiting callback.
    this.callbacks.visitingCallback(null)

    // If array is empty or consists of one element then return this array since it is sorted.
    if (originalArray.length <= 1) {
      return originalArray
    }

    // Split array on two halves.
    const middleIndex = Math.floor(originalArray.length / 2)
    const leftArray = originalArray.slice(0, middleIndex)
    const rightArray = originalArray.slice(middleIndex, originalArray.length)

    // Sort two halves of split array
    const leftSortedArray = this.sort(leftArray)
    const rightSortedArray = this.sort(rightArray)

    // Merge two sorted arrays into one.
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray)
  }

  mergeSortedArrays(leftArray, rightArray) {
    const sortedArray = []

    // Use array pointers to exclude old elements after they have been added to the sorted array.
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      let minElement = null

      // Find the minimum element between the left and right array.
      if (this.comparator.lessThanOrEqual(leftArray[leftIndex], rightArray[rightIndex])) {
        minElement = leftArray[leftIndex]
        // Increment index pointer to the right
        leftIndex += 1
      } else {
        minElement = rightArray[rightIndex]
        // Increment index pointer to the right
        rightIndex += 1
      }

      // Add the minimum element to the sorted array.
      sortedArray.push(minElement)

      // Call visiting callback.
      this.callbacks.visitingCallback(minElement)
    }

    // There will be elements remaining from either the left OR the right
    // Concatenate the remaining elements into the sorted array
    return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
  }
}
