const obj = {}

Object.defineProperty(obj, 'a', {
  set(newValue) {
    console.info('----------', newValue)
  },
  get() {
    return 1
  }
})
