/*
二分法查找
1. 先找 pivot
1. 判断a[pivot] === target ? return pivot
if(a[pivot] > target)
r = pivot - 1
else
l = pivot + 1
 */

function search(A, target) {
  const n = A.length
  let l = 0
  let r = n - 1
  while (l <= r) {
    const pivot = l + ((r - l) >>> 1)
    if (A[pivot] === target) {
      return pivot
    } else if (A[pivot] > target) {
      r = pivot - 1
    } else {
      l = pivot + 1
    }
  }
  return -1
}

console.info(search([2, 4, 6, 7], 4))
