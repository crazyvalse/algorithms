let target = {
  name: 'zac',
  value: 42
}

let proxy = new Proxy(target, {
  has(target, p) {
    if (p === 'value') {
      // return target[p]
      return Reflect.has(target, p)
    } else {
      return false
    }
  }
})
// console.info(target.name)
console.info('name' in proxy)
console.info('value' in proxy)
// console.info('value' in target)
// console.info('count' in target)
