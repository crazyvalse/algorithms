module.exports = shuffle

/**
 * 遍历，然后打乱
 * 从后面开始遍历
 * @param a
 */
function shuffle(a) {
  if (!Array.isArray(a)) {
    throw new Error('非数组')
  }

  for (let i = a.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random()) * (i - 1)
    ;[a[i], a[index]] = [a[index], a[i]]
  }
}

const array = [1, 2, 3, 4, 5]
shuffle(array)
console.info(array)
