"use strict"

// Release 0
class AppleTree {
  // Initialize a new AppleTree
  constructor() {
    this.healhty = true
    this.age = 0
    this.height = 0
    this.quantity = []
  }

  // Grow the tree
  grow() {
    this.age++
    this.height += getRandomNumber()
    if (this.age === 7)
      this.healhty = false
  }

  // Produce some Apples
  produceApples() {
    this.goodQualityApple = 0
    this.badQualityApple = 0
    this.harvested = Math.round(Math.random()*10)
    let apple = new Apple()
    for (let i = 0; i < this.harvested; i++) {
      this.quantity.push(apple.checkQuality())
      if ( this.quantity[i] === 1) {
        this.goodQualityApple++
      } else {
        this.badQualityApple++
      }
    }
    this.quantity = []
  }
}

class Apple {
  constructor() {
    this.quality = 1
  }

  checkQuality() {
    // check number if it 1 (good) or 0 (bad)
    if (Math.round(Math.random()) === 1) {
      return this.quality
    } else {
      return this.quality = 0
    }
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)/10
}

var tree = new AppleTree()
console.log(`The tree is alive! :smile:`)
do {
  tree.grow()
  tree.produceApples()
  console.log(`[Year ${tree.age} Report] Height = ${tree.height.toFixed(2)} m | Fruits harvested = ${tree.harvested} (${tree.goodQualityApple} good ${tree.badQualityApple} bad)`)
} while (tree.healhty != false)
console.log(`The tree has met its end`)
