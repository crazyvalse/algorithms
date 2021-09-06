module.exports = shuffle

function shuffle(array) {
  if (!Array.isArray(array)) {
    throw new Error('param is not array: ' + array)
  }
  for (let i = 0; i < array.length; i++) {
    const random = Math.floor(Math.random() * array.length)
    ;[array[i], array[random]] = [array[random], array[i]]
  }
}

const array = [1, 2, 3, 4, 5]
shuffle(array)
console.info(array)
