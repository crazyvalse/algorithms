/*
new Vue({
  data:{
    msg: 'hello world'
  },
  mounted(){
    console.info(this.msg)
  }
})
defineProperty: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 */

class Vue {
  /**
   * 1. 先初始化 function
   * 2. 初始化 data
   * @param options
   */
  constructor(options) {
    if (options.methods) {
      this.initMethods(options.methods)
    }

    if (options.data) {
      this.initData(options.data)
    }
  }

  /**
   * 实现效果是
   * app.sayHi 调用的就是
   *
   * 边界判断
   * @param methods
   */
  initMethods(methods) {
    const vm = this
    for (let key in methods) {
      if (typeof methods[key] !== 'function') {
        console.info(key + '不是function')
      }

      if (key in vm && (key.startsWith('$') || key.startsWith('_'))) {
        console.info(key + '已经定义过了')
      }
      // 经常会把 方法当成 props 传给子组件
      vm[key] = methods[key].bind(vm)
    }
  }

  initData(data) {
    const vm = this
    data = vm.$data = typeof data === 'function' ? data.call(vm) : data
    for (let key in data) {
      if (key in vm && (key.startsWith('$') || key.startsWith('_'))) {
        console.info(key + '已经定义过了')
      }

      Object.defineProperty(vm, key, {
        enumerable: true,
        configurable: true,
        set(v) {
          vm.$data[key] = v
        },
        get() {
          return vm.$data[key]
        }
      })
    }
  }
}

const options = {
  data: {
    msg: 'hello world'
  },
  methods: {
    sayHi() {
      // console.info(this, this.msg)
      console.info(this.msg)
    }
  }
}
/**
 * 1. 解决this的指向 - bind
 * 2. 当我调用 app.sayHi 的时候就是调用 options.methods.sayHi()
 */
// options.methods.sayHi()

const app = new Vue(options)

app.sayHi()
options.data.msg = 123

app.sayHi()

app.msg = 666

app.sayHi()
