const queue = require('fastq')(worker, 1)

queue.push(1, function (err, result) {
  if (err) {
    throw err
  }
  console.log('the result is', result)
})

queue.push(2, function (err, result) {
  if (err) {
    throw err
  }
  console.log('the result is', result)
})

queue.push(3, function (err, result) {
  if (err) {
    throw err
  }
  console.log('the result is', result)
})

function worker(arg, cb) {
  cb(null, arg * 2)
}
