function run(taskDef) {
  const task = taskDef()
  let result = task.next()

  function step() {
    if (!result.done) {
      result = task.next(result.value)
      step()
    }
  }
  step()
}

run(function* () {
  console.info(1)
  yield 1
  console.info(2)
  yield 2
  console.info(3)
})
