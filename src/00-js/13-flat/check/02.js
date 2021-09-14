module.exports = flatten

// [1,2,[3,[4]], 5]
// [1,2]
function flatten(a) {
  if (!Array.isArray(a)) {
    return a
  }
  let queue = [a]
  const result = []
  while (queue.length) {
    const n = queue.shift()
    if (Array.isArray(n)) {
      queue = [...n, ...queue]
    } else {
      result.push(n)
    }
  }
  return result
}
