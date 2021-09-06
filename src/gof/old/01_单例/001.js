/**
 * Created by codingnuts on 2018/3/27.
 */
//1. 缺点：把 instance 暴露出来了
/*var Person = function (name) {
  this.name = name
  this.instance = null
}

Person.prototype.getName = function () {
  console.info(this.name)
}

Person.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Person(name)
  }
  return this.instance
}

var a = Person.getInstance('a')
var b = Person.getInstance('b')
a.getName()
b.getName()

console.info(a)*/

//2. 缺点： 还是可以通过new的方式来获得
/*var Person = function (name) {
  this.name = name
}

Person.prototype.getName = function () {
  console.info(this.name)
}

Person.getInstance = (function () {
  var instance = null
  return function (name) {
    if (!instance) {
      instance = new Person(name)
    }
    return instance
  }
})()

var a = Person.getInstance('a')
var b = Person.getInstance('b')
console.info(a)

console.info(a === b)*/

//目标

/**
 * 1. 首先 IIFE(immediately invoked function expression) 返回的是个 function（_singleton）
 * 2. IIFE 中需要有一个instance
 * 3. 在_singleton中需要判断实例是否初始化了，如果初始化了，返回实例，否则初始化
 *
 */
/*
var Person = (function () {
	var instance;
	var _Singleton = function (name) {
		if (instance) {
			return instance;
		}
		instance = this;
		this.name = name;
	};

	_Singleton.prototype.getName = function () {
		console.info(this.name);
	};

	return _Singleton;
})();


var a = new Person("a");
var b = new Person("b");
a.getName();
b.getName();

console.info(a === b);

*/

// var Singleton = (function () {
//   var instance
//   var singleton = function (name) {
//     this.name = name
//   }
//
//   singleton.prototype.getName = function (name) {
//     console.info(this.name)
//   }
//   return function (name) {
//     if (!instance) {
//       return (instance = new singleton(name))
//     }
//     return instance
//   }
// })()
//
// var a = Singleton('a')
// var b = Singleton('b')
// console.info(a)
// console.info(b)
