/*
租车服务
didi
  - 租车
  - 还车

乘客
  - 借车
  - 还车
  - 开车

passenger.borrow().drive(10).eat().drive(5).handBack()

1. 如果没车，就先等待，直到有车

借车
开了十分钟 - 等待十秒
吃了个饭 - 等待5秒
开了五分钟 - 等待3秒
还车
 */
/*
passenger.borrow().drive(10).eat().drive(5).handBack()
1. return this
2. return new Promise()

难点：
1. 延时执行- setTimeout while阻塞
2. 保证顺序执行？
 - queue 把所有的任务全部都压到这个 queue 中，queue中是 fn ,
 - 到时候直接执行 fn()
 - 全部都是异步任务
 - 按照顺序执行
 */

class Person {
  constructor(name) {
    this.queue = []
    this.name = name
    setTimeout(() => {
      this.go()
    })
  }

  async go() {
    while (this.queue.length) {
      const fn = this.queue.shift()
      await fn()
    }
  }

  next() {
    const fn = this.queue.shift()
    if (fn) {
      fn()
    }
  }

  borrow() {
    this.queue.push(() => {
      console.info(`${this.name} 借了车`)
    })
    return this
  }

  drive(time) {
    this.queue.push(
      () =>
        new Promise((resolve) => {
          console.info('--- 开始开车')
          setTimeout(() => {
            console.info('开了' + time + ' 分钟')
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
          console.info('--- 开始吃饭')
          setTimeout(() => {
            console.info('吃饭花了 ' + time + ' 分钟')
            resolve()
          }, time * 1000)
        })
    )
    return this
  }

  handBack() {
    this.queue.push(() => {
      console.info(`${this.name} 还了车`)
    })
    return this
  }
}

const passenger = new Person('zac')
passenger.borrow().drive(10).eat(5).drive(5).handBack()
