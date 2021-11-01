function getWindowProxy () {
  const _window = global
  return new Proxy({}, {
    get(target, key){
      return target[key] || _window[key]
    },
    set (target, key, value) {
      target[key] = value
      return true
    }
  })
}

const win1 = getWindowProxy()
const win2 = getWindowProxy()


;((window) => {
  console.info(window.Math.random());
  window.a = 123
  console.info(window.a);
})(win1)

;((window) => {
  console.info(window.Math.random());
  window.a = 321
  console.info(window.a);
})(win2)
