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
    // 是数组的话，就插到queue的前面
    if (Array.isArray(n)) {
      queue = [...n, ...queue]
    } else {
      result.push(n)
    }
  }
  return result
}
const a = [1, 2, 3]
a.unshift(4, 5, 6)
console.info(a)
