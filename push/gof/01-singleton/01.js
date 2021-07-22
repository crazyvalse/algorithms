function Singleton(name) {
  this.name = name
}

Singleton.getInstance = function (name) {
  if (!Singleton.instance) {
    Singleton.instance = new Singleton(name)
  }
  return Singleton.instance
}

Singleton.prototype.sayMyName = function () {
  console.info('我叫' + this.name)
}

const a = Singleton.getInstance('A')
const b = Singleton.getInstance('B')

a.sayMyName()
b.sayMyName()
