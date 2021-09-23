/*
实现一个LazyMan，可以按照以下方式调用:

LazyMan('Hank');输出:
Hi! This is Hank!

LazyMan('Hank').sleep(10).eat('dinner');输出:
Hi! This is Hank!
//等待10秒..
Wake up after 10s!
Eat dinner~

LazyMan('Hank').eat('dinner').eat('supper');输出:
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan('Hank').sleepFirst(5).eat('supper');输出:
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper~

以此类推。

1. 能够链式调用 return this
2. 每个方法执行是可以自定义顺序的 queue
3. 添加的时候，是同步的 queue.push(afr)
4. 执行的时候，是异步的 Promise.resolve
 */

function LazyMan(name) {
  if (this instanceof LazyMan) {
    this.queue = []
    this.queue.push(function () {
      console.info('Hi! This is ' + name)
    })
    setTimeout(() => this.go())
  } else {
    return new LazyMan(name)
  }
}

LazyMan.prototype.go = async function () {
  while (this.queue.length) {
    const statement = this.queue.shift()
    await statement()
  }
}

LazyMan.prototype.sleep = function (time) {
  this.queue.push(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.info(`Wake up after ${time}s!`)
          resolve()
        }, 1000 * time)
      })
  )
  return this
}

LazyMan.prototype.eat = function (food) {
  this.queue.push(() => {
    console.info(`Eat ${food}~`)
  })
  return this
}

LazyMan.prototype.sleepFirst = function (time) {
  this.queue.unshift(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.info(`Wake up after ${time}s!`)
          resolve()
        }, 1000 * time)
      })
  )
  return this
}

LazyMan('zac').sleepFirst(2).eat('breakfast').sleep(10).eat('dinner').eat('super')
setTimeout(() => {
  console.info(666)
}, 8000)
setTimeout(() => {
  console.info(121212)
}, 12000)
