@log
class Plane {
  @upgrade
  fire() {
    console.info('开枪，哒哒哒')
    return true
  }
}

function log(target) {
  target.prototype.name = 'zac'
}

const p = new Plane()

console.info(p.name)

/**
 * 添加导弹
 * @param target
 * @param name
 * @param descriptor
 * Object.defineProperty(options)
 */
function upgrade(target, name, descriptor) {
  const oldFn = descriptor.value
  descriptor.value = function (...args) {
    console.info('发射导弹')
    const result = oldFn.apply(this, args)
    console.info('投掷砸蛋')
    return result
  }
}

const p = new Plane()
p.fire()
