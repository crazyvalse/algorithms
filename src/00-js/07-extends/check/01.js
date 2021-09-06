// 继承
module.exports = function (Child, Parent) {
  const create = Object.create
    ? Object.create
    : function (prototype) {
        function F() {}
        F.prototype = prototype
        return new F()
      }
  Child.prototype = create(Parent.prototype)
  Child.prototype.constructor = Child
}
