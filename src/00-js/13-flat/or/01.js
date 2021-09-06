// 第一版
// function flatten(array) {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       result = result.concat(flatten(array[i]))
//     } else {
//       result.push(array[i])
//     }
//   }
//   return result
// }
//

module.exports = function flatten(array) {
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

// console.info(flatten([1, 2, [3, 4, [5]]]))

// 第三版
// console.info(([1, 2, [3, 4, [5]]].flat(Infinity)))
