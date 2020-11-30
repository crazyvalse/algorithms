// 1. 字面量写法
// /pattern/flags g/i/m
// var p = /(mjj)+/g
// console.info(p.test('mmjjjjjjjj'))
// console.info(p.exec('mmjjjjjjjj'))

// var c = 'mmsjsjsjsjsjsmmjjjjjmmmmjjjmmjjjjm'

// console.info(c.match(p))
// console.info(c.search(p))


// var time = '3030.20.12'

// console.info(time.replace(/30/g, '300'))
// 2. 构造函数

// var p2 = new RegExp('alex', 'g')
//
// console.info(p2.test('alsealexs'))

var phoneReg = /^\w{2,5}$/g

console.info(phoneReg.test('12'))


var teleReg = /^0\d{2,3}-?\d{7,8}$/g

console.info(teleReg.test('0453-3132601'))
