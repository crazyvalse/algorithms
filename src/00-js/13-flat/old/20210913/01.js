module.exports = function flatten(array) {
  if (!Array.isArray(array)) {
    return array
  }

  let result = []
  for (let i = 0; i < array.length; i++) {
    result = result.concat(Array.isArray(array[i]) ? flatten(array[i]) : array[i])
  }
  return result
}
