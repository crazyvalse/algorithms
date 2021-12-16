/**
 * 订阅发布者：订阅者把自己想订阅的事件注册到调度中心，当该事件触发时候，发布者发布该事件到调度中心（顺带上下文），由调度中心统一调度订阅者注册到调度中心的处理代码。
 * 例子：Vue.$on $emit $off $once
 */

class Vue {
  _events = Object.create(null)

  /**
   * 1. 先写功能
   *  - 找到event列表
   *    - 有的话：把fn塞进去
   *    - 没有的话：初始化一个列表，把fn塞进去
   * 2. 边界判断
   * @param event 事件名
   * @param fn 回调
   */
  $on(event, fn) {
    if (typeof fn !== 'function') {
      throw new Error(fn + '不是方法')
    }

    this._events[event] = this._events[event] || []
    this._events[event].push(fn)
    return this
  }

  /**
   * 1. 功能
   *  - 找到 event
   *  - for循环调用
   * @param event 事件名
   * @param args 传给fn的参数
   */
  $emit(event, ...args) {
    const events = this._events[event].slice()
    if (Array.isArray(events)) {
      events.forEach((fn) => {
        fn.apply(this, args)
      })
    }
    return this
  }

  /*
  移除自定义事件监听器。
    - 如果没有提供参数，则移除所有的事件监听器；
      - _events = Object.create(null)
    - 如果只提供了事件，则移除该事件所有的监听器；
      - _events[event] = null
    - 如果同时提供了事件与回调，则只移除这个回调的监听器。
      - 从 _events[event] 中找到 fn，并调用 splice(index, 1) 清掉
   */
  $off(event, fn) {
    if (!event) {
      this._events = Object.create(null)
      return this
    }

    if (!fn) {
      this._events[event] = null
      return this
    }

    if (!Array.isArray(this._events[event])) {
      return this
    }

    // 1. 找到 fn
    // 2. 删掉
    let i = this._events[event].length
    const fns = this._events[event]
    while (i--) {
      if (fns[i] === fn) {
        fns.splice(i, 1)
        break
      }
    }
    return this
  }

  /**
   * 监听一个自定义事件，但是只触发一次。
   * 一旦触发之后，监听器就会被移除。
   * $on(event, foo)
   * $off(event, foo)
   * - $emit() 之后 立刻 $off()
   * @returns {Vue}
   */
  $once(event, fn) {
    this.$on(event, function inner(...args) {
      this.$off(event, inner)
      fn.apply(this, args)
    })
    return this
  }
}

const app = new Vue()

/*
 {
    'event' : [fn, fn, fn]
 }
 */
/*
app
  .$on('info', () => {
    console.info('info: ', 1)
  })
  .$on('info', () => {
    console.info('info: ', 2)
  })

app.$on('info', () => {
  console.info('info: ', 3)
})

app.$on('warning', () => {
  console.info('warning: ', 1)
})

app.$on('warning', () => {
  console.info('warning: ', 2)
})

app.$on('warning', () => {
  console.info('warning: ', 3)
})

/!*
  1. 找到 event列表
  2. 调用
 *!/

// 触发所有的 info 方法
app.$emit('info') // info 1 2 3
app.$emit('warning')
console.info('------------')
app.$off('info')
app.$emit('info')

// 定向删除

const foo = function (name) {
  console.info('foo: ', name)
}
console.info('------------')
app.$on('warning', foo)
app.$emit('warning', 'zac')
console.info('------------')
app.$off('warning', foo)
app.$emit('warning', 'zac')
*/

app.$on('once', () => {
  console.info(1, 'once: ')
})

app.$once('once', () => {
  console.info(2, '一次啊 一次')
})
app.$once('once', () => {
  console.info(3, '一次啊2 一次2')
})

app.$on('once', () => {
  console.info(4, 'once: ')
})

app.$emit('once')
console.info('------------')
app.$emit('once')

/*
1,2,3,4
1,4

 */
