// let target = {
//   value: 42
// }
//
// let proxy = new Proxy(target, {
//   get(target, p, receiver) {
//     if (!(p in target)) {
//       throw new TypeError('不存在')
//     }
//     return Reflect.get(target, p, receiver)
//   }
// })
// console.info(target.name)
// console.info(proxy.name)
//
// console.info('value' in target)
// console.info('count' in target)

