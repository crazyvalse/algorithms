// 继承
module.exports = function (Child, Parent) {
  const create = Object.create
    ? Object.create
    : function (prototype) {
        function F() {}
        F.prototype = prototype
        return new F()
      }
  //1. create
  Child.prototype = create(Parent.prototype)
  // 2. constructor
  Child.prototype.constructor = Child
}
