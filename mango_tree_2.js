"use strict"

// Release 0
function randomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Kelas Pohon
class FruitTree {
  // Release 1
  constructor(age, height, fruits, health) {
    this._age = age
    this._height = height || 0.0
    this._addHeight = randomBetween(100, 200)
    this._fruits = fruits
    this._health = health || false
    this._mature = false
    this.MAX_SIZE_AGE = 10
    this.MAX_HEIGHT = 5
    this.MATURE_AGE = 2
  }

  grow() {
    this._age += 1
    if(this._age === this.MAX_SIZE_AGE)
      this._health = false

    if(this._age === this.MATURE_AGE)
      this._mature = true

    this._height += this._addHeight
  }

  produceFruits() {
    let jumlahProduksi = Math.floor(Math.random() * 15)
    for(let i=0; i<jumlahProduksi; i++) {
      this.pushFruits()
    }
  }

}


// Kelas Buah
class Fruit {
  constructor() {
    let stats = ['good', 'bad']
    this._quality = stats[Math.floor(Math.random() * 2)]
  }
}


// Kelas Pohon Apel
class AppleTree extends FruitTree {
  constructor(age, height, fruits, health) {
    super(age, height, fruits, health)
    this._name = "AppleTree"
    this.MAX_SIZE_AGE = 15
    this.MATURE_AGE = 5
    this.MAX_HEIGHT = 7
    this._addHeight = randomBetween(100, 200) / 100
  }

  // Produksi total dalam 1 periode
  pushFruits() {
    let buah = new Apple
    this._fruits.push(buah)
  }

}

class PearTree extends FruitTree {
  constructor(age, height, fruits, health) {
    super(age, height, fruits, health)
    this._name = "PearTree"
    this.MAX_SIZE_AGE = 10
    this.MATURE_AGE = 2
    this.MAX_HEIGHT = 10
    this._addHeight = randomBetween(100, 200) / 100
  }
  // Produksi total dalam 1 periode
  pushFruits() {
    let buah = new Pear
    this._fruits.push(buah)
  }
}

// Kelas Buah Apel
class Apple extends Fruit {
  constructor() {
    super()
    this._name = 'Apel'
  }
}

class Pear extends Fruit {
  constructor() {
    super()
    this._name = 'Pear'
  }
}

// let PohonApel = new AppleTree()
// console.log(PohonApel)
// PohonApel.grow()
// console.log(PohonApel)

// Release 2
class TreeGrove {
  constructor() {
    this._trees = []
  }
  inputTree(tree, age, height, fruits, health) {
    if(tree === 'AppleTree') {
      let pohon = new AppleTree(age, height, fruits, health)
      this._trees.push(pohon)
    }
    else if(tree === 'PearTree') {
      let pohon = new PearTree(age, height, fruits, health)
      this._trees.push(pohon)
    }
    else {
      console.log("tree not defined yet")
    }
  }

  age() {
    for(let i=0; i<this._trees.length; i++) {
      console.log(this._trees[i]._name + " sudah berumur " + this._trees[i]._age)
    }
  }

  trees() {
    for(let i=0; i<this._trees.length; i++) {
      console.log(this._trees[i])
    }
  }

  mature_tree() {
    for(let i=0; i<this._trees.length; i++) {
      if(this._trees[i]._age >= this._trees[i].MATURE_AGE) {
        console.log(this._trees[i]._name + " sudah bisa berbuah");
      }
    }
  }

  dead_tree() {
    for(let i=0; i<this._trees.length; i++) {
      if(this._trees[i]._health === false)
        console.log(this._trees[i]._name + " sudah mati")
    }
  }



}

let grove = new TreeGrove();
grove.inputTree('PearTree', 15, 4.5, 5, false)
grove.inputTree('PearTree', 9, 4.2, 15, true)
grove.inputTree('AppleTree', 22, 6.8, 10, true)
grove.inputTree('PearTree', 5, 4.5, 12, true)
grove.inputTree('AppleTree', 5, 4.5, 12, true)

// console.log(grove._trees[0]._health)
console.log("---------------AGE ()---------------")
grove.age()
console.log("---------------TREES ()---------------")
grove.trees()
console.log("--------------MATURE TREE()--------------")
grove.mature_tree()
console.log("------------------DEAD TREE()--------------")
grove.dead_tree()
