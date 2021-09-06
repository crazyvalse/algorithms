/**
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * 1. 顺序查找
 * 2. 分段查找
 *  - 先看 key 与 array[i][0] 的比较，查看key在哪个区间 point
 *  if(array[i][0] === key) {
 *    return true
 *  } else if(array[i][0] < key) {
 *    point = i
 *  }
 * @param array
 * @param key
 */
function search(array, key) {
  let point = null
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === key) {
      return true
    }
    if (array[i][0] < key) {
      point = i
    }
  }

  if (point === null) {
    return false
  }

  for (let i = 0, sub = array[point]; i < sub.length; i++) {
    if (sub[i] === key) {
      return true
    }
  }
  return false
}

const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [7, 8, 9]
const array = [a, b, c]

// console.info(array)

console.info(search(array, 0))

// module.exports = search
