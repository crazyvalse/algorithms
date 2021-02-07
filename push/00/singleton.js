const Singleton = function (name) {
  this.name = name
}

Singleton.prototype.getName = function () {
  return this.name
}

Singleton.getSingleton = function (name) {
  const singleton = new Singleton(name)

  Singleton.getSingleton = function () {
    return singleton
  }

  Object.freeze(Singleton)
  return Singleton.getSingleton(name)
}

const a = Singleton.getSingleton('zac')
const b = Singleton.getSingleton('zac')

Singleton.getSingleton = 1

const c = Singleton.getSingleton('zac')

console.info(a === b)
console.info(c)
