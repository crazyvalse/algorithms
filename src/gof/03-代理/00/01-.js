const obj = new Proxy(
  {},
  {
    get(target, propkey, receiver) {
      console.info(`getting ${propkey}`)
      return Reflect.get(target, propkey, receiver)
    },
    set(target, propKey, value, receiver) {
      console.info(`setting ${propKey}`)
      return Reflect.set(target, propKey, value, receiver)
    }
  }
)

obj.count = 1
