/*
1. 考试部门有三辆车
2. 共有十名考生参加考试
3. 每位考试的考生时间不等
4. 如何利用这三辆车完成
 */

class Car {
  constructor(name) {
    this.name = name
    this.valuable = true
  }
  examine(user) {
    console.info('-------开始-------', this.name)
    this.valuable = false
    return new Promise((resolve) => {
      setTimeout(() => {
        console.info(`car: ${this.name}; user: ${user};`)
        this.valuable = true
        resolve()
      }, Math.random() * 10000)
    })
  }
}

/**
 * 1. 初始化三辆车
 * 2. 如果有车就考试，没车就放到队列当中
 */
class Gov {
  pool = []
  candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor() {
    // 初始化汽车
    let i = 0
    while (i++ < 3) {
      this.pool.push(new Car('车' + i))
      this.go()
    }
  }

  // 开始考试
  /**
   * 1. 找到可以用的车
   */
  go() {
    const car = this.pool.find((car) => car.valuable)
    if (car) {
      const candidate = this.candidates.shift()
      if (candidate) {
        car.examine(candidate).then(() => {
          this.go()
        })
      }
    }
  }
}

new Gov()
