/*
展示不同的价格
当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
当价格类型为“返场价”时，满 200 - 50，不叠加
当价格类型为“尝鲜价”时，直接打 5 折

预售价 - pre
大促价 - onSale
返场价 - back
尝鲜价 - fresh
 */

function computed(type, price) {
  // 处理预热价
  if (type === 'pre') {
    if (price >= 100) {
      return price - 20
    }
    return price * 0.9
  }

  // 处理大促价
  if (type === 'onSale') {
    if (price >= 100) {
      return price - 30
    }
    return price * 0.8
  }

  // 处理返场价
  if (type === 'back') {
    if (price >= 200) {
      return price - 50
    }
    return price
  }

  // 处理尝鲜价
  if (type === 'fresh') {
    return price * 0.5
  }
}

/*
问题
- 违背了"单一功能"的原则，一个function中 有四个逻辑。维护艰难。
- 违背了"开放封闭"原则。添加新的逻辑需要影响整个函数，有可能问价系统就崩了。
 */
