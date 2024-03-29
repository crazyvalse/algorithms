/*
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop()—— 删除栈顶的元素。
top()—— 获取栈顶元素。
getMin() —— 检索栈中的最小元素。

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = []
  this.minStack = [Infinity]
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.data.push(x)
  this.minStack.push(Math.min())
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.data.reduce((pre, cur) => {
    if (pre > cur) {
      pre = cur
    }
    return pre
  }, Infinity)
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack
