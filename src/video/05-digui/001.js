/**
 * 1. 同样的处理过程 - 从字符串中获得三个小于256的字符，并放到数组中
 * 2. 同样的输入输出 - 数组和字符串
 * 3. 临界点 - 数组长度是4 并且 字符 ===源字符串
 * @param str
 * @returns {Array}
 */

// function recoverIp(ipStr) {
//   const r = []
//
//   const search = (ipNums, str) => {
//     if (ipNums.length === 4 && ipNums.join('') === ipStr) {
//       r.push(ipNums.join('.'))
//     } else if (ipNums.length < 4) {
//       for (let i = 0, len = Math.min(3, str.length); i < len ; i++) {
//         const n = str.substr(0, i + 1)
//         if (parseInt(n) < 256) {
//           search(ipNums.concat([n]), str.substr(i + 1))
//         }
//       }
//     }
//   }
//
//   search([], ipStr)
//   return r
// }

function recoverIp(originalIp) {
  let result = []
  const search = (ipArray, ipString) => {
    let temp
    if (ipArray.length === 4 && ipArray.join('') === originalIp) {
      result.push(ipArray.join('.'))
    } else if (ipArray.length < 4) {
      for (let i = 0, len = Math.min(3, ipString.length); i < len; i++) {
        temp = ipString.substr(0, i + 1)
        if (parseInt(temp) < 256) {
          search(ipArray.concat([temp]), ipString.substr(i + 1))
        }
      }
    }
  }
  search([], originalIp)
  return result
}

console.info(recoverIp('25525511135'))
