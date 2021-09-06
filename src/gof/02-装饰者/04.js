class Person {
  constructor(name) {
    this.name = name
  }

  @Resource
  age

  getDetails() {
    console.info(this.name, this.age)
  }
}

function Resource(target, key, descriptor) {
  console.info(target)
}
