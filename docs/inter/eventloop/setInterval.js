;(function testSetInterval() {
  let i = 0
  const start = Date.now()
  const timer = setInterval(() => {
    i += 1
    i === 5 && clearInterval(timer)
    console.log(`第${i}次开始`, Date.now() - start)
    for (let i = 0; i < 1000000000; i++) {}
    console.log(`第${i}次结束`, Date.now() - start)
  }, 100)
})()
