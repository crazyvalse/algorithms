const getAuth = require('./promise')

getAuth().then(() => {
  console.info(1, 'getAuth')
  goType()
})

function goType() {
  console.info(2, 'goType')
}
