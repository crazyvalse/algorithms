module.exports = shuffle

/**
 * 遍历，然后打乱
 * 从后面开始遍历
 * @param array
 */
function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new Error()
  }
  for (let i = array.length; i > 0; i--) {
    const next = Math.floor(Math.random() * i)
    swap(array, i - 1, next)
  }
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

const array = [1, 2, 3, 4, 5]
shuffle(array)
console.info(array)
