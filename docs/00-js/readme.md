## 原型

- 每个函数都有一个 prototype 属性，prototype 是函数才有的属性
- 那么什么是原型呢？你可以这样理解：每一个 JavaScript 对象(null 除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
- person 和 Person.prototype 之间是什么关系呢？
  - 每个对象都有一个 `__proto__`属性，这个属性会指向该对象的原型。
  ```js
  console.log(person.__proto__ === Person.prototype)
  ```
- 每个原型都有一个 constructor 属性指向关联的构造函数

```js
Person === Person.prototype.constructor

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) //true
```

- 当读取示例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还差不到，就去找原型的原型，一直找到最顶层为止。
- 当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到 constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性

```js
console.log(person.constructor === Person) // true

person.constructor === Person.prototype.constructor
```

- 继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。

## 原文地址

https://juejin.cn/post/6844903472836395022
