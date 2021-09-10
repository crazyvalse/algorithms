// const no = require('./01')
//
// let { n, o, d } = require('./01')

import * as no from './01'
import { n, o, d } from './01'

console.info(no)

no.n = 2
no.o.a = 2

no.d() // obj的值能改，但是基本类型不行

console.info('-----------')

console.info(n, o)
d()
// n = 2
// d()
// console.info(n, no.n)
// d() // 无论怎样基本类型是不会变的，但是在当前环境下可变
