function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.info(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

function extend(child, parent) {
  // child.prototype = Object.create(parent.prototype)
  const create =
    Object.create ||
    function (proto) {
      function F() {}
      F.prototype = proto
      return new F()
    }
  child.prototype = create(parent.prototype)
  child.prototype.constructor = child
}

extend(Child, Parent)

const child = new Child('zac', 10)
console.info(child.name)
child.getName()
