module.exports = shuffle

/**
 * 遍历，然后打乱
 * @param array
 */
function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new Error()
  }
  for (let i = 0; i < array.length; i++) {
    const next = Math.floor(Math.random() * array.length)
    swap(array, i, next)
  }
}

function swap(array, a, b) {
  ;[array[a], array[b]] = [array[b], array[a]]
}

const array = [1, 2, 3, 4, 5]
shuffle(array)
console.info(array)
