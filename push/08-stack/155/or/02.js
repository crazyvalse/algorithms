/*
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) —— 将元素 x 推入栈中。
pop() —— 删除栈顶的元素。
top() —— 获取栈顶元素。
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

// https://leetcode-cn.com/problems/min-stack/solution/chai-zhi-fa-155-zui-xiao-zhan-by-fe-lucifer/

差值法
min:    -3  -3  -3  -4  -4  -4  -5  -5
stack:  0   3   1   -1  6   7   -1  2
real:   -3  0   -2  -4  2   3   -5  -3
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.lastMin = Infinity
  this.stack = []
}

/**
 * 1. 判断 x 与 lastMin 的大小，
 *  - 如果 lastMin 小，stack.push(x - lastMin) 值是大于0
 *  - 如果 lastMin 大，stack.push(x - lastMin) 值是小于0，并更新 lastMin = x
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const data = x - this.lastMin
  this.stack.push(data)
  if (data < 0) {
    this.lastMin = x
  }
}

/**
 * 也需要更新 lastMin
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const data = this.stack.pop()
  if (data < 0) {
    this.lastMin -= data
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const data = this.stack[this.stack.length - 1]
  if (data < 0) {
    return this.lastMin
  }
  return this.stack[this.stack.length - 1] + this.lastMin
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.lastMin
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
