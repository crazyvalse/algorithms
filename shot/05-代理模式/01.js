/*
app.msg

1. 我们需要把传入的 data methods里面方法 挂载 Vue 这个类中
  - methods
  - method 中的this 指向不对
 */

class Vue {
  constructor(options) {
    if (options.methods) {
      this.initMethods(options.methods)
    }

    if (options.data) {
      this.initData(options.data)
    }
  }

  /**
   * data
   *  - get
   *  - set
   *  defineProperty()
   * @param data
   */
  initData(data) {
    const vm = this
    data = typeof data === 'function' ? data.call(vm) : data
    vm.$data = data
    for (let key in data) {
      if (vm[key]) {
        throw new Error(key + '命名冲突')
      }
      // vm.msg
      Object.defineProperty(vm, key, {
        get() {
          return data[key]
        },
        //vm.msg = 123
        // options.data.msg = 123
        set(newValue) {
          data[key] = newValue
        }
      })
    }
  }

  // methods 里面的方法 浅拷贝到 Vue 类中

  initMethods(methods) {
    const vm = this
    for (let methodName in methods) {
      // 1. 保证 methods[methodName] 是个function
      if (typeof methods[methodName] !== 'function') {
        throw new Error(methodName + '不是个function')
      }

      // 2. methodName 不能跟已有的属性或者方法重名 foo -> $foo
      if (vm[methodName]) {
        throw new Error(methodName + '命名冲突')
      }

      vm[methodName] = methods[methodName].bind(vm)
    }
  }
}

const options = {
  el: '#app',
  data: {
    msg: 'Hello World'
  },
  methods: {
    sayHi() {
      console.info(this)
    }
  }
}

const app = new Vue(options)

app.sayHi() // 调用 options.methods.sayHi()

app.msg = 123

console.info(options.data.msg)

options.data.msg = 456

console.info(app.msg)

// options.methods.sayHi()
