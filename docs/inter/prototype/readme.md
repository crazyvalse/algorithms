
## __proto__

- 原型链就是多个对象通过 __proto__ 的方式连接了起来。
- __proto__ 属性，这是一个访问器属性（即 getter 函数和 setter 函数），通过它可以访问到对象的内部 [[Prototype]] (一个对象或 null )。
- __proto__ 发音 dunder proto，最先被 Firefox使用，后来在 ES6 被列为 Javascript 的标准内建属性。
- 为了更好的支持，推荐使用 Object.getPrototypeOf()

## class

> JS中并不存在类，class 只是语法糖，本质还是函数

```js
class Person {}
Person instanceof Function // true
```
