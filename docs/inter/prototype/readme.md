## 参考

- http://interview.poetries.top/excellent-docs/3-JS%E6%A8%A1%E5%9D%97.html#_5-2-%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E6%9C%89%E4%BD%95%E5%85%B3%E7%B3%BB

## __proto__

- 原型链就是多个对象通过 __proto__ 的方式连接了起来。
- __proto__ 属性，这是一个访问器属性（即 getter 函数和 setter 函数），
  通过它可以访问到对象的内部 [[Prototype]] (一个对象或 null )。
- __proto__ 发音 dunder proto，最先被 Firefox使用，后来在 ES6 被列为 Javascript 的标准内建属性。
- 为了更好的支持，推荐使用 Object.getPrototypeOf()

## class

> JS中并不存在类，class 只是语法糖，本质还是函数

```js
class Person {}
Person instanceof Function // true
```

## 原型对象和构造函数有何关系

- 在JavaScript中，每当定义一个函数数据类型(普通函数、类)时候，都会天生自带一个prototype属性，这个属性指向函数的原型对象。
- 当函数经过new调用时，这个函数就成为了构造函数，返回一个全新的实例对象，这个实例对象有一个__proto__属性，指向构造函数的原型对象。
