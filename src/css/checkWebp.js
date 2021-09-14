function isSupportedWebp() {
  let isSupported = false
  try {
    isSupported = document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0
  } catch (e) {
    isSupported = false
  }
  isSupportedWebp = function () {
    return isSupported
  }
  return isSupportedWebp()
}
console.info(isSupportedWebp())
console.info(isSupportedWebp())
console.info(isSupportedWebp)
