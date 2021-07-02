## 1. 判断类型

- typeof 对于原始类型而言，除了 null 都可以正确判断
- typeof 对于对象来说，除了函数都会显示 object，所以说，typeof 不能准确判断变量的类型。
- 可以使用 instanceof 和 Object.prototype.toString.call 来判断

### 2. 类型转换

> ECMAScript 中有 5 中简单数据类型（也称为基本数据类型）: Undefined、Null、Boolean、Number 和 String
> 首先我们要知道，在 JS 中类型转换只有三种情况，分别是：

- 转换为 布尔值
- 转换为 数字
- 转换为 字符串

### 布尔值

- number： 除了 0、-0、NaN 都为 true
- string： 除了空串都为 true
- undefined、null： 都为 false
- 引用类型： true

## 3. 闭包

> 闭包的定义其实很简单：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包

## 4. null 与 undefined 的区别

- undefined：是所有没有赋值变量的默认值，自动赋值
- null：主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址
  - 给一个全局变量赋值为 null，相当于将这个变量的指针对象以及值清空，如果是给对象的属性 赋值为 null，或者局部变量赋值为 null,相当于给这个属性分配了一块空的内存，然后值为 null， JS 会回收全局变量为 null 的对象。
  - 给一个全局变量赋值为 undefined，相当于将这个对象的值清空，但是这个对象依旧存在,如果是给对象的属性赋值 为 undefined，说明这个值为空值

## 5. this

this 的绑定规则总共有五种

- 默认绑定
  - 独立函数调用，默认指向全局对象
  - 严格模式下，不能将全局对象用于默认绑定，this 会绑定到 undefined。
- 隐式绑定
  - 当函数引用有上下文的时候，隐式绑定规则会把函数中的 this 绑定到这个上下文对象上。
- 显式绑定
- new 绑定
- 箭头绑定

### 5.1 隐式绑定例子

```js
// 虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身。
// bar()是一个不带任何修饰的函数调用，应用默认绑定。
function foo() {
  console.log(this.a)
}

var obj = {
  a: 2,
  foo: foo
}

var bar = obj.foo // 函数别名

var a = 'oops, global' // a是全局对象的属性

bar() // "oops, global"
```

### 6 0.1+0.2 为什么不等于 0.3？

0.1 和 0.2 在转换成二进制后会无限循环，由于标准位数的限制后面多余的位数会被截掉，
此时就已经出现了精度的损失，
相加后因浮点数小数位的限制而截断的二进制数字在转换为十进制就会变成 0.30000000000000004

### 7 BigInt

- http://interview.poetries.top/excellent-docs/3-JS%E6%A8%A1%E5%9D%97.html#_1-4-1-tostring-%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%B0%83%E7%94%A8

### 8 判断是否是 promise

```js
function isPromise (val) {
    return (
      typeof val.then === 'function' &&
      typeof val.catch === 'function'
    )
}
```
