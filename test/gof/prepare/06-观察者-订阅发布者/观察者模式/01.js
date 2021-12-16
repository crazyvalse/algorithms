class Vue {
  constructor(options) {
    if (options.methods) {
      this.initMethods(options.methods)
    }

    if (options.data) {
      this.proxy(options.data)
    }
  }

  /**
   * data
   *  - get
   *  - set
   *  defineProperty()
   * @param data
   */
  proxy(data) {
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

class Observer {
  value = null
  dep = null
  vmCount = 0
  constructor(data) {
    this.value = data
    this.walk(data)
  }

  walk(data) {
    Object.keys(data).forEach((key) => {
      this.defineReactive(data, key, data[key])
    })
  }

  defineReactive(data, key, value) {}
}

class Dep {
  subs = []

  addSub(sub) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update()
    })
  }
}

Dep.target = null
