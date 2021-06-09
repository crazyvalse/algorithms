function Dictionary() {
  this.dataStore = []
  this.add = function (key, value) {
    this.dataStore[key] = value
  }

  this.find = function (key) {
    return this.dataStore[key]
  }

  this.remove = function (key) {
    delete this.dataStore[key]
  }

  this.showAll = function () {
    // Object.keys(this.dataStore).forEach((key) => {
    //   console.info(key + ' -> ' + this.dataStore[key])
    // })
  }
}

var pbook = new Dictionary()
pbook.add('Mike', '123')
pbook.add('David', '345')
pbook.add('Cynthia', '456')
console.info("David's extension: " + pbook.find('David'))
pbook.remove('David')
pbook.showAll()
