/*
驾校：

 - 注册考生
 - 能考试
 - 只有三辆车

 - 每考完一个，"自动"换下一个

 */

class Person {
  constructor(name) {
    this.name = name
  }
}

class Car {
  constructor(name) {
    this.name = name
    this.isValuable = true
  }
}

class School {
  constructor(length) {
    this.carPool = []
    this.students = []
    while (length-- > 0) {
      this.carPool.push(new Car('车' + length))
    }
  }

  register(student) {
    this.students.push(student)
    this.exam()
  }

  /**
   * 1. 能拿到"可用"的车
   * 2. 如果说有可用的车，并且有考生需要考试的话，就考试
   * 3. 如果说没有车，就等着，直到有车位置
   *
   * 当考完一个考生之后，自动让下一个考生来考试
   */
  exam() {
    // 拿到一辆车
    const car = this.carPool.find((c) => c.isValuable)
    if (car && this.students.length) {
      // 拿到一个学生
      const student = this.students.shift()
      car.isValuable = false
      console.info(`${student.name} 使用 ${car.name} 开始考试`)
      setTimeout(() => {
        console.info(`-----${student.name} 使用 ${car.name} 考完了`)
        car.isValuable = true
        this.exam()
      }, parseInt(10 * Math.random()) * 1000)
    }
  }
}

const s = new School(3)

let l = 10

while (l-- > 0) {
  s.register(new Person('考生' + l))
}
