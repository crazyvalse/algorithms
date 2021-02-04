module.exports = function flatten(array) {
  if (!Array.isArray(array)) {
    throw new Error('param is not array!')
  }
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}
