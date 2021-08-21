/*
汽车考试
1. 有三辆车
2. 候选人
  - 可注册
  - 可考试
3. 考完后就叫下一个
 */

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Car {
  constructor(name) {
    this.name = name
    this.isValuable = true
  }
}

class Department {
  constructor(length) {
    this.carPool = []
    this.queue = []
    while (length-- > 0) {
      this.carPool.push(new Car('车' + length))
    }
  }

  register(student) {
    this.queue.push(student)
    this.next()
  }

  // 考完之后就下一个
  next() {
    const car = this.carPool.find((c) => c.isValuable)
    if (car && this.queue.length) {
      const student = this.queue.shift()
      this.exam(car, student)
    }
  }

  exam(car, student) {
    car.isValuable = false
    console.info(`${student.name} 开着 ${car.name} 开始考试`)
    setTimeout(() => {
      console.info(`-------- ${car.name} 结束 --------`)
      car.isValuable = true
      this.next()
    }, 10 * Math.random() * 1000)
  }
}

const dp = new Department(3)

let l = 10

while (l-- > 0) {
  dp.register(new Person('考生' + l, l))
}
