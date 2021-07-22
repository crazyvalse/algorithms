const Person = (name, age) => {
  this.name = name
  this.#age = age
}

const p = new Person('zac', 12)
console.info(p.name)
