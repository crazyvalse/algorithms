const flatten = function (array) {
  return array.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

module.exports = flatten
