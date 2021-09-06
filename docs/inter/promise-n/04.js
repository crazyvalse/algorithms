function run(taskDef) {
  const task = taskDef()
  let result = task.next()

  function step() {
    if (!result.done) {
      if (typeof result.value === 'function') {
        result.value(function (err, data) {
          if (err) {
            result = task.throw(err)
            return
          }

          result = task.next(data)
          step()
        })
      } else {
        result = task.next(result.value())
        step()
      }
    }
  }
  step()
}
