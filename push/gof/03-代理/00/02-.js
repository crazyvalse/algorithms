const target = {}
const proxy = new Proxy(target, {})

proxy.name = 'proxy'
console.info(proxy.name)
console.info(target.name)

target.name = 'target'
console.info(proxy.name)
console.info(target.name)
