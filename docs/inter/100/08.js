class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    console.info(this.newColor)
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
Chameleon.colorChange('orange')
console.info(freddie.newColor)
