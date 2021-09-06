function Person(name) {
  this.name = name
}

const p = Reflect.construct(Person, ['zac'])
console.info(p.name)
