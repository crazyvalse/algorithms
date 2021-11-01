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
function isPromise(val) {
  return typeof val.then === 'function' && typeof val.catch === 'function'
}
```

### 9. JavaScript 中的数据是如何存储在内存中的？

- 在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是代码空间、栈空间、堆空间。
- 代码空间主要是存储可执行代码的
- 原始类型(Number、String、Null、Undefined、Boolean、Symbol、BigInt)的数据值都是直接保存在“栈”中的，引用类型(Object)的值是存放在“堆”中的。因此在栈空间中(执行上下文)，原始类型存储的是变量的值，而引用类型存储的是其在"堆空间"中的地址，当 JavaScript 需要访问该数据的时候，是通过栈中的引用地址来访问的，相当于多了一道转手流程。
- 在编译过程中，如果 JavaScript 引擎判断到一个闭包，也会在堆空间创建换一个“closure(fn)”的对象（这是一个内部对象，JavaScript 是无法访问的），用来保存闭包中的变量。所以闭包中的变量是存储在“堆空间”中的。

##

- typeof 直接在计算机底层基于数据类型的值（二进制）进行检测
- typeof null 为 object 原因是对象存在在计算机中，都是以 000 开始的二进制存储，所以检测出来的结果是对象
- typeof 普通对象/数组对象/正则对象/日期对象 都是 object
- typeof NaN === 'number'

# 推荐：

- https://juejin.cn/post/7022795467821940773?utm_source=gold_browser_extension
