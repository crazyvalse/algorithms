const setWindowProp = (prop, value, isDel) => {
  if (value === undefined || isDel) {
    // 删掉 prop
    delete window[prop]
  } else {
    // 赋值
    window[prop] = value
  }
}

class Sandbox {
  name
  proxy = null

  // 沙箱期间新增的全局变量
  addedPropsMap = new Map()

  // 沙箱期间更新的全局变量
  modifiedPropsOriginalValueMap = new Map()

  // 持续记录更新的全局变量的 map，用于在任意时刻做沙箱激活
  currentUpdatedPropsValueMap = new Map()

  /**
   * 根据之前修改的记录重新修改window的属性，即还原沙箱之前的状态
   * 1. 新增的属性
   * 2. 改变的属性
   */
  active() {
    this.currentUpdatedPropsValueMap.forEach((v, p) => setWindowProp(p, v))
  }

  /**
   * 失活
   * 1. 将沙箱期间修改的属性 还原为原先的属性
   * 2. 将沙箱期间新增的全局变量消除
   */
  inactive() {
    this.modifiedPropsOriginalValueMap.forEach((v, p) => setWindowProp(p, v))
    this.addedPropsMap.forEach((_, p) => setWindowProp(p, undefined, true))
  }

  constructor(name) {
    this.name = name
    const fakeWindow = Object.create(null)
    const { addedPropsMap, modifiedPropsOriginalValueMap, currentUpdatedPropsValueMap } = this

    this.proxy = new Proxy(fakeWindow, {
      // 设值
      set(_, prop, value) {
        // 如果 window 上没有这个属性，记录到 新增属性 的map中
        if (!window.hasOwnProperty(prop)) {
          addedPropsMap.set(prop, value)
        } else if (!modifiedPropsOriginalValueMap.has(prop)) {
          // 如果当前window对象有该属性，且未更新过，则记录该属性在window上的初始值
          modifiedPropsOriginalValueMap.set(prop, window[prop])
        }

        // 当前更新的内容
        currentUpdatedPropsValueMap.set(prop, value)
        setWindowProp(prop, value)
        console.info('window.prop', window[prop])
        return true
      },
      get(target, prop) {
        return window[prop]
      }
    })
  }
}
