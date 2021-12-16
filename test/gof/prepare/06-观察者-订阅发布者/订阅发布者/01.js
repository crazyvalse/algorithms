/**
 * 订阅-发布者者
 */
class Vue {
  _events = Object.create(null)

  /**
   * 原理： 把函数塞到数组当中
   * 健壮性: fn 得是个方法才行
   * @param event
   * @param fn
   * @returns {Vue}
   */
  $on(event, fn) {
    if (typeof fn !== 'function') {
      throw new Error(fn + '不是个方法！你做个人吧！！')
    }

    // 1. 查看_events中有没有数组，没有的话 初始化一个
    this._events[event] = this._events[event] || []

    // 2. 往数组中添加回调
    this._events[event].push(fn)

    return this
  }

  /**
   * 取出 fn 挨个调用
   *
   * 边界检查
   * @param event
   * @param args
   * @returns {Vue}
   */
  $emit(event, ...args) {
    if (!this._events[event]) {
      console.warn(event + '猝！')
      return this
    }

    // 浅拷贝，不然once的时候，序号就不对了
    const fns = this._events[event].slice()
    for (let i = 0, l = fns.length; i < l; i++) {
      // 调用
      if (args) {
        fns[i].apply(this, args)
      } else {
        fns[i].call(this)
      }
    }

    return this
  }

  /*
  - 如果没有提供参数，则移除所有的事件监听器；
    - 移除所有的事件？ - this._events = Object.create(null)
  - 如果只提供了事件，则移除该事件所有的监听器；
    - this._events[event] = [] / null / .length = 0
  - 如果同时提供了事件与回调，则只移除这个回调的监听器。
    - 找到这个fn，然后从event中删除
    while(this._events[event]){
     if(=== fn) {
      splice(index, 1)
     }
    }
   */
  $off(event, fn) {
    // 没有
    if (!arguments.length) {
      this._events = Object.create(null)
      return this
    }

    // 如果没有的话，不操作
    if (!this._events[event]) {
      return this
    }

    // 如果没有fn
    if (!fn) {
      this._events[event] = null
      return this
    }

    // 如果有 fn 的话
    let i = this._events[event].length
    const fns = this._events[event]
    while (i--) {
      if (fn === fns[i]) {
        fns.splice(i, 1)
        break
      }
    }

    return this
  }

  /**
   * 执行一次，迅速off
   * @param event
   * @param fn
   */
  $once(event, fn) {
    const vm = this
    // 为了能删除 on 方法
    function on() {
      vm.$off(event, on)
      fn.apply(vm, arguments)
    }

    vm.$on(event, on)
  }
}

const app = new Vue()

// 注册一个 info 事件 是不是 就是把这些匿名函数放到了一个数组当中，当emit的时候，把数组拿出来，然后遍历调用呢？
/*
{
  'info': [
    () => {
  console.info('info: ', 1)
},
() => {
  console.info('info: ', 2)
}
  ]
}
 */
/*app.$on('info', () => {
  console.info('info: ', 1)
})

app.$on('info', () => {
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

// 触发所有的 info 方法
app.$emit('info') // info 1 2 3
app.$emit('warning')

app.$off('warning')
app.$emit('warning')*/

// app.$once('once', () => {
//   console.info('go 1')
// })
//
// app.$once('once', () => {
//   console.info('go 2')
// })
//
// app.$emit('once')
// app.$emit('once')

/*
info: 1
info: 2
info: 3
warning: 1
warning: 2
warning: 3
 */
