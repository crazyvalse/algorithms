// // var a
// // {
// //   a = 50
// //   function a() {}
// // }
// //
// // console.info(a)
//
// var a = 10
//
// function f() {
//   console.info(a)
//   if (false) {
//     let a = 2
//   }
// }
//
// f()

// console.info(10 + '20' - 10)
const a = [1, 2, 3]

function getSubarray(a) {
  const n = a.length
  let result = [[]]
  for (let i = 0; i < n; i++) {
    const t = result.map((subarray) => {
      return [...subarray, a[i]]
    })
    result = result.concat(t)
  }
  return result
}

console.info(getSubarray(a))
