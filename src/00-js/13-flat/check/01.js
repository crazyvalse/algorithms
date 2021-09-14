module.exports = flatten

function flatten(array) {
  if (!Array.isArray(array)) {
    return array
  }
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = [...result, ...flatten(array[i])]
    } else {
      result.push(array[i])
    }
  }
  return result
}
