const person = {
  name: 'zac',
  sayName() {
    console.info(this.name)
  }
}

const descriptor = Object.getOwnPropertyDescriptor(person, 'sayName')

console.info(descriptor.value)
