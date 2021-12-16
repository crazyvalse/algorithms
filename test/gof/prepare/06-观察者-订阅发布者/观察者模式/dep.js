class Dep {
  subs = []

  addSub(fn) {
    if (typeof fn !== 'function') {
      throw new Error('做个人吧')
    }
    this.subs.push(fn)
  }

  notify(...args) {
    this.subs.forEach((fn) => {
      fn.apply(this, args)
    })
  }
}

/*
1. 难以扩展
 */
const dep = new Dep()

dep.addSub((...args) => {
  console.info(1, '发消息了', ...args)
})

dep.addSub(() => {
  console.info(2, '发消息了')
})

dep.addSub(() => {
  console.info(3, '发消息了')
})

dep.notify('我最帅')
