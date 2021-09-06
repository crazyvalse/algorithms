const Resource = require('./Resource')

@Resource
class Component {
  constructor() {
    this.history = Component.history
  }
  mounted() {
    this.history.push('123')
  }
}

const c = new Component()

c.mounted()
console.info(c.history)
