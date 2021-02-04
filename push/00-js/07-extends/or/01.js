function extend (child, parent) {
  // child.prototype = Object.create(parent.prototype)
  const create =
    Object.create ||
    function (proto) {
      function F () {}

      F.prototype = proto
      return new F()
    }
  child.prototype = create(parent.prototype)
  child.prototype.constructor = child
}

module.exports = extend
