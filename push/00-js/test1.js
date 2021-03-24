function getSelection() {
  let s = null
  s = 1
  getSelection = function () {
    return s
  }
  return getSelection()
}

console.info(getSelection())
