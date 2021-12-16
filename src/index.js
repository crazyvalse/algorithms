import { h, init } from 'snabbdom'

// init 方法用来创建 patch 函数
const patch = init([])

const MyComponent = (props) => {
  return h('h1', props.title)
}

// 组件的产出是 VNode 123
const prevVnode = MyComponent({ title: 'prev' })
console.info(prevVnode)

// 将 VNode 渲染成真实 DOM
patch(document.getElementById('app'), prevVnode)

document.querySelector('#changeBtn').onclick = function () {
  const nextVnode = MyComponent({ title: 'next' })
  patch(prevVnode, nextVnode)
}

for (let i = 0; i < 123; i++) {
  console.info(i)
}

// 我觉得吧 也还行 可以可以
// 有点道理可以的
