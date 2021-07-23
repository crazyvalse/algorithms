/*
观察者模式
 */

class Publisher {
  constructor() {
    this.observers = []
    console.info('Publisher created')
  }

  add(observer) {
    console.info('Publisher.add invoked')
    this.observers.push(observer)
  }

  remove(observer) {
    console.info('Publisher.remove')
    this.observers.forEach((item, index) => {
      if (item === observer) {
        this.observers.splice(index, 1)
      }
    })
  }

  notify() {
    console.info('Publisher.notify invoked')
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name
    console.info('Observer ' + this.name + ' created')
  }

  update() {
    console.info('Observer' + this.name + '.update invoked')
  }
}

let a = Reflect.construct(Observer, ['A'])
let b = new Observer('B')
let c = new Observer('C')

const publisher = new Publisher()

publisher.add(a)
publisher.add(b)
publisher.add(c)

publisher.notify()
