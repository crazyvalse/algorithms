let target = {
  name: 'target'
}

let proxy = new Proxy(target, {
  set(trapTarget, key, value, receiver) {
    console.info(value)
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value)) {
        throw new TypeError('属性必须是数字')
      }
    }

    return Reflect.set(trapTarget, key, value, receiver)
  }
})
//
// proxy.count = 1
//
// console.info(target.count)
// console.info(proxy.count)
//
// proxy.name = 'proxy'
// console.info(target.name)
// console.info(proxy.name)

proxy.anotherName = 1
