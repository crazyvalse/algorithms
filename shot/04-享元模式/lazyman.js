/*
p.borrow().drive(10).eat(5).drive(3).handBack()

1. return this

借车
开车"10"分钟 -> 10s
吃饭"5"分钟
开车"3"分钟
还车

2. 延时执行 setTimeout

特点
1. 异步执行
2. 有顺序的

await fn() return new Promise()
 */

class Person {
  constructor() {
    this.queue = []
    setTimeout(() => {
      this.go()
    })
  }

  // go 方法需要晚于所有的方法，换句话说 我需要先把所有的方法先放到队列里，再执行go
  async go() {
    while (this.queue.length) {
      const fn = this.queue.shift()
      await fn()
    }
  }

  borrow() {
    this.queue.push(() => {
      console.info('借车')
    })
    return this
  }

  drive(time) {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.info('开车' + time + '分钟')
            resolve()
          }, time * 1000)
        })
    )
    return this
  }

  eat(time) {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.info('吃饭' + time + '分钟')
            resolve()
          }, time * 1000)
        })
    )
    return this
  }

  handBack() {
    this.queue.push(() => {
      console.info('还车')
    })
    return this
  }
}

const p = new Person()
p.borrow().drive(10).handBack().eat(5).drive(3)
setTimeout(() => {
  p.drive(2)
}, 4)
