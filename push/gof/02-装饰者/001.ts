function classDecorator(target) {
  target.hasDecorator = true
  target.prototype.name = 'zac'
  target.prototype.age = 19
  return target
}

@classDecorator
class Button {}

console.info(Button.hasDecorator)

const b = new Button()

console.info(b.name)
console.info(Object.getPrototypeOf(b))
