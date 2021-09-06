@log4class
class Person {
  #bank = 1
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  @reportError
  // @log4method
  sayName() {
    console.info('My name is ' + this.name)
  }

  celebrateBirthday() {
    this.age++
  }

  @reportError
  getDetails() {
    return {
      name: this.name,
      age: this.age
    }
  }
}

function log4class(target) {
  const proto = target.prototype
  const fnNames = Object.getOwnPropertyNames(target.prototype)
  fnNames.forEach((fnName) => {
    const fn = proto[fnName]
    proto[fnName] = function (...args) {
      console.info('before ' + fnName)
      const result = fn.apply(this, args)
      console.info('after ' + fnName)
      return result
    }
  })
  return target
}

function reportError(target, name, descriptor) {
  const oldValue = descriptor.value

  descriptor.value = function (...args) {
    try {
      return oldValue.call(this, args)
    } catch (e) {
      console.info(`Method: ${name}; Args: ${args};`)
      // console.error('--------------', e)
      // return null
      throw e
    }
  }
}

const p = new Person('zac', 20)

p.sayName()
console.info(p.bank)
// console.info(p.getDetails())
