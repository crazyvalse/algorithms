class Singleton {
  constructor(name) {
    this.name = name
  }

  static getInstance(name) {
    const instance = new Singleton(name)
    Singleton.getInstance = function () {
      return instance
    }
    Object.freeze(Singleton) // configurable: false; writable: false;

    return Singleton.getInstance()
  }

  sayMyName() {
    console.info('我叫' + this.name)
  }
}

const a = Singleton.getInstance('A')
const b = Singleton.getInstance('B')

a.sayMyName()
b.sayMyName()

console.info(a === b)

Singleton.getInstance = function (name) {
  return name
}

const c = Singleton.getInstance('C')
console.info(c)
c.sayMyName()
console.info(a === c)
