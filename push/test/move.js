/*
1 2 3 4 5 6 -> 2

5 6 1 2 3 4
- 6 5 4 3 2 1
- 5 6 1 2 3 4
 */
/**
 * 1. 整体 reverse
 * 2. 前半段 reverse
 * 3. 后半段 reverse
 * @param array
 * @param k
 */
const move = function (array, k) {
  const n = array.length
  reverse(array, 0, n - 1)
  reverse(array, 0, k - 1)
  reverse(array, k, n - 1)
}

function reverse(array, l, r) {
  while (l < r) {
    ;[array[l], array[r]] = [array[r], array[l]]
    l++
    r--
  }
}

const array = [1, 2, 3, 4, 5, 6]

move(array, 2)
console.info(array)
