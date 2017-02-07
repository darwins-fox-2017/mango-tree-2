"use strict"

// Release 1
class FruitTree {
  // Initialize a new Fruit Tree
  constructor(treeElement) {
    this.treeName = treeElement['name'] || ""
    this.alias = treeElement['alias'] || ""
    this.treeAge = treeElement['age'] || 0
    this.height = treeElement['height'] || 0
    this.fruits = treeElement['fruits'] || 0
    this.healthy = treeElement['healthy'] || true
    this.maxAge = treeElement['maxAge'] || 25
    this.matureTree = treeElement['matureTree'] || 2
    this.deadTree = treeElement['deadTree'] || 20
    this.quantity = []
  }

  // Grow the tree
  grow() {
    this.treeAge++
    this.height += getRandomNumber()
    if (this.treeAge === this.maxAge)
      this.healhty = false
  }

  // Produce some Apples
  produceFruits() {
    this.goodQualityFruit = 0
    this.badQualityFruit = 0
    this.harvested = Math.round(Math.random()*10)
    let fruit = new Fruit()
    for (let i = 0; i < this.harvested; i++) {
      this.quantity.push(fruit.checkQuality())
      if ( this.quantity[i] === 1) {
        this.goodQualityFruit++
      } else {
        this.badQualityFruit++
      }
    }
    //this.quantity = []
  }
}

class Fruit {
  constructor() {}

  checkQuality() {
    // check number if it 1 (good) or 0 (bad)
    if (Math.round(Math.random()) === 1) {
      return 1
    } else {
      return 0
    }
  }
}

class AppleTree extends FruitTree {
  constructor(treeElement) {
    super(treeElement)
    this.maxAge = 17
    this.matureTree = 3
    this.deadTree = 15
  }

  produceFruits() {
    this.goodQualityFruit = 0
    this.badQualityFruit = 0

    let apple = new Apple()

    for (let i = 0; i < this.fruits; i++) {
      this.quantity.push(apple.checkQuality())
      if ( this.quantity[i] === 1) {
        this.goodQualityFruit++
      } else {
        this.badQualityFruit++
      }
    }
    //this.quantity = []
    console.log(`[Year ${this.treeAge} Report] Height = ${this.height.toFixed(2)} m | Fruits harvested = ${this.fruits} (${this.goodQualityFruit} good ${this.badQualityFruit} bad)`)
  }
}

class Apple extends Fruit {
  checkQuality() {
    // check number if it 1 (good) or 0 (bad)
    if (Math.round(Math.random()) === 1) {
      return 1
    } else {
      return 0
    }
  }
}

class MangoTree extends FruitTree {
  constructor(treeElement) {
    super(treeElement)
    this.maxAge = 1
    this.matureTree = 2
    this.deadTree = 20
  }

  produceFruits() {
    this.goodQualityFruit = 0
    this.badQualityFruit = 0

    let mango = new Mango()

    for (let i = 0; i < this.fruits; i++) {
      this.quantity.push(mango.checkQuality())
      if ( this.quantity[i] === 1) {
        this.goodQualityFruit++
      } else {
        this.badQualityFruit++
      }
    }
    //this.quantity = []
    console.log(`[Year ${this.treeAge} Report] Height = ${this.height} m | Fruits harvested = ${this.fruits} (${this.goodQualityFruit} good ${this.badQualityFruit} bad)`)
  }
}

class Mango extends Fruit {
  checkQuality() {
    // check number if it 1 (good) or 0 (bad)
    if (Math.round(Math.random()) === 1) {
      return 1
    } else {
      return 0
    }
  }
}

class PearTree extends FruitTree {
  constructor(treeElement) {
    super(treeElement)
    this.maxAge = 1
    this.matureTree = 5
    this.deadTree = 20
  }

  produceFruits() {
    this.goodQualityFruit = 0
    this.badQualityFruit = 0

    let pear = new Pear()

    for (let i = 0; i < this.fruits; i++) {
      this.quantity.push(pear.checkQuality())
      if ( this.quantity[i] === 1) {
        this.goodQualityFruit++
      } else {
        this.badQualityFruit++
      }
    }
    //this.quantity = []
    console.log(`[Year ${this.treeAge} Report] Height = ${this.height.toFixed(2)} m | Fruits harvested = ${this.fruits} (${this.goodQualityFruit} good ${this.badQualityFruit} bad)`)
  }
}

class Pear extends Fruit {
  checkQuality() {
    // check number if it 1 (good) or 0 (bad)
    if (Math.round(Math.random()) === 1) {
      return 1
    } else {
      return 0
    }
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)/10
}

// Release 2
class TreeGrove {
  constructor() {
    this.groveTree = []
  }

  inputTree(treeElement) {
    let tree = {}

    switch (treeElement.name) {
      case 'AppleTree':
        tree = new AppleTree({
          name : treeElement['name'],
          alias : treeElement['alias'],
          age : treeElement['age'],
          height : treeElement['height'],
          fruits : treeElement['fruits'],
          healthy : treeElement['healthy']
        })
        tree.produceFruits()
        break

      case 'MangoTree':
        tree = new MangoTree({
          name : treeElement['name'],
          alias : treeElement['alias'],
          age : treeElement['age'],
          height : treeElement['height'],
          fruits : treeElement['fruits'],
          healthy : treeElement['healthy']
        })
        tree.produceFruits()
        break

      case 'PearTree':
        tree = new PearTree({
          name : treeElement['name'],
          alias : treeElement['alias'],
          age : treeElement['age'],
          height : treeElement['height'],
          fruits : treeElement['fruits'],
          healthy : treeElement['healthy']
        })
        tree.produceFruits()
        break
    }
    this.groveTree.push(tree)
  }

  nextYear() {
    console.log()
    console.log('================= Tree Prediction on Next Year  ====================')
    for (let i=0; i < this.groveTree.length; i++) {
      this.groveTree[i].grow()
      console.log(`Tree condition on next year [Height Report ${this.groveTree[i].height.toFixed(2)} m`)
    }
  }

  showAge() {
    console.log()
    console.log('=================== Age Report on Tree Grove  =======================')
    for (let i=0; i < this.groveTree.length; i++) {
      console.log(`[Age Report ${this.groveTree[i].treeAge} Year]`)
    }
  }

  showTrees() {
    console.log()
    console.log('==================== Total Tree on The Grove  ======================')
    this.showtrees = {}
    for (let i=0; i < this.groveTree.length; i++) {
      if ( this.showtrees[this.groveTree[i].treeName] === undefined ) this.showtrees[this.groveTree[i].treeName] = 0
      this.showtrees[this.groveTree[i].treeName] += 1
    }

    for (var x in this.showtrees) {
      console.log(`Jumlah Pohon ${x} adalah ${this.showtrees[x]}`)
    }
  }

  mature_trees() {
    console.log()
    console.log('==================== Mature Tree on The Grove  ======================')
    for (let i=0; i < this.groveTree.length; i++) {
      console.log(`[Current Age ${this.groveTree[i].treeAge} Year], Mature at ${this.groveTree[i].matureTree}`)
    }
  }

  dead_trees() {
    console.log()
    console.log('==================== Dead Tree on The Grove  ======================')
    for (let i = 0; i < this.groveTree.length; i++) {
      if (this.groveTree[i].treeAge >= this.groveTree[i].deadTree)
        console.log(`[Current Age is ${this.groveTree[i].treeAge} Year], Your ${this.groveTree[i].treeName} named ${this.groveTree[i].alias} is now dead`)
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree({ name : "MangoTree", alias : "Cassandra", age : 3, height : 1.8, fruits : 7, healthy : true}) //name, age, height, fruits, healthy
grove.inputTree({ name : "MangoTree", alias : "Cassanova", age : 5, height : 2.4, fruits : 12, healthy : true})
grove.inputTree({ name : "AppleTree", alias : "Athena", age : 4, height : 1.2, fruits : 5, healthy : true})
grove.inputTree({ name : "PearTree", alias : "Alexandria", age : 7, height : 2, fruits : 15, healthy : true})
grove.inputTree({ name : "PearTree", alias : "Bossanova", age : 20, height : 9, fruits : 15, healthy : true})
// console.log(grove.groveTree)
// next year
grove.nextYear()

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// show dead trees
grove.dead_trees()
