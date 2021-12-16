class Vue {
  _events = Object.create(null) // {}
  /**
   * 功能：
   * 1. 先找到 event 数组
   * 2. 往这个数组里push fn
   * 边界检查：
   * fn
   * @param event
   * @param fn
   */
  $on(event, fn) {
    if (!event || typeof fn !== 'function') {
      throw new Error('做个人吧')
    }

    // 1. 先找到 event 数组
    this._events[event] = this._events[event] || []
    this._events[event].push(fn)
  }

  /**
   * 功能:
   * 1. 找到 event 数组
   * 2. 循环调用
   *
   * 边界检查：
   *
   * @param event
   * @param args
   */
  $emit(event, ...args) {
    if (!Array.isArray(this._events[event])) {
      console.warn('没有这个事件', event)
      return
    }
    // 需要做的保证 所有方法能够按顺序正常执行
    // XXX-2 浅拷贝
    const fns = this._events[event].slice()
    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, args)
    }
  }

  /**
   * 移除自定义事件监听器。
        - 如果没有提供参数，则移除所有的事件监听器；
          - _events = Object.create(null)
        - 如果只提供了事件，则移除该事件所有的监听器；
          - event, _events[event] = null
        - 如果同时提供了事件与回调，则只移除这个回调的监听器。
          - _events[event]
          - 找到 fn
          - 从_events[event]移除 _events[event].splice(i, 1)
   * @param event
   * @param fn
   */
  $off(event, fn) {
    // 如果没有提供参数，则移除所有的事件监听器；
    if (!arguments.length) {
      this._events = Object.create(null)
      return
    }

    // 如果只提供了事件，则移除该事件所有的监听器；
    if (!fn) {
      this._events[event] = null
      return
    }

    const fns = this._events[event]
    if (!Array.isArray(fns)) {
      return
    }

    // 如果同时提供了事件与回调，则只移除这个回调的监听器。
    for (let i = 0; i < fns.length; i++) {
      if (fn === fns[i] || fn === fns[i].fn) {
        fns.splice(i, 1)
        break
      }
    }
  }

  /**
   * 1. 监听一个自定义事件 $on(event, fn)
   * ，但是只触发一次。
   * 一旦触发之后，监听器就会被移除。emit(event)
   * 其他的fn全都被保留，但是once需要删除 $off(event, fn)
   * @param event
   * @param fn
   */
  $once(event, fn) {
    const vm = this
    function inner(...args) {
      // XXX-3 删除 - 先删除，避免调用第二次
      vm.$off(event, inner)
      // 先执行 callback
      fn.apply(vm, args)
    }

    inner.fn = fn

    // XXX-1
    this.$on(event, inner)
  }
}

const bus = new Vue()

/*
{
  eventName: [fn, fn, fn, fn]
}
 */

function foo() {
  console.info(2, 'info')
}

bus.$once('info', () => {
  console.info(1, 'info')
})

bus.$once('info', foo)
//
bus.$on('info', () => {
  console.info(3, 'info')
})

bus.$off('info', foo)

bus.$emit('info') // 1, 2, 3

console.info('----------')

bus.$emit('info') // 3

/*
1 info
2 info
3 info
1 error
2 error
3 error
 */
