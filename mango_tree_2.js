"use strict"

// Release 0 Version 1
// class AppleTree {
//   constructor() {
//     this.age        = 0
//     this.height     = 10
//     this.maxHeight  = 30
//     this.maxAge     = 15
//     this.fruit      = []
//     this.healthy    = true
//   }
//
//   grow() {
//     if (this.age <= this.maxAge) {
//       this.age++
//         if (this.height <= this.maxHeight) {
//           this.height += 5
//         }
//     } else {
//       this.healthy = false
//     }
//   }
//
//   produce() {
//     if (this.healthy === true) {
//       this.fruit.push(new Apple)
//     }
//   }
// }
//
// class Apple {
//   constructor () {
//     this.conditionGamble = ['GOOD', 'BAD']
//     this.sizeGamble = ['small', 'BIG']
//     this.quality  = this.conditionGamble[this.getRandom()]
//     this.size     = this.sizeGamble[this.getRandom()]
//   }
//
//   getRandom() {
//     let random = Math.round(Math.random()*(2-1)+1)-1
//     return random
//   }
// }
// //
// var appleTest = new AppleTree()
// appleTest.grow()
// appleTest.grow()
// appleTest.grow()
// appleTest.produce()
// appleTest.produce()
// appleTest.produce()
// appleTest.produce()
// appleTest.produce()
//
// for (var i = 0; i < appleTest.fruit.length; i++) {
//   console.log(`${appleTest.fruit[i].quality}`);
// }


// Release 0 Version 2
// class AppleTree {
//   constructor(n) {
//     this.age        = n.age
//     this.height     = n.height
//     this.frussit      = n.fruit
//     this.healthy    = true
//   }
//
//   grow() {
//     console.log(`[Year ${this.age} Report] Height: ${this.height} | Fruit: ${this.fruit}`);
//   }
// }

// class Apple extends AppleTree {
//   constructor (n) {
//     super(n)
//   }
//
//   grow() {
//     super.grow()
//   }
// }

// let appleTrees = new AppleTree({age: 1, height: 2, fruit: 1})
// let appleFruits = new Apple({age: 2, height: 3, fruit: 2})
// appleTrees.grow()
// appleFruits.grow()


// Release 1
class FruitTree {
  constructor(age, height, totalFruit, healthy) {
    this.name         = "Fruit Tree"
    this.age          = age || 0
    this.mature       = 3
    this.maxAge       = 20
    this.height       = height || 0
    this.heightGrow   = 10
    this.maxHeight    = 100
    this.maxProduce   = 30
    this.totalFruit   = totalFruit
    this.healthy      = healthy || true
    this.condition    = new Fruit()
    this.fruit        = []
  }

  grow() {
    if (this.maxAge > this.age) {
      this.age++
        if (this.maxHeight >= this.height) {
          this.height += Math.floor(Math.random()*this.heightGrow)
        }
    } else {
      this.healthy = false
    }
  }

  produce() {
    this.fruit = []
    if (this.healthy && this.age >= this.mature) {
      for (let i = 0; i < Math.floor(Math.random()*this.maxProduce); i++) {
        this.fruit.push(this.condition)
      }
    }
    this.totalFruit = this.fruit.length
    // console.log(this.totalFruit);
  }
}

class Fruit {
  constructor() {
    this.quality  = "Good" || "Bad"
    this.size     = "Big" || "Medium" || "Small"
  }
}

class MangoTree extends FruitTree {
  constructor(age, height, totalFruit, healthy, maxAge, mature, maxProduce, heightGrow, maxHeight, fruit) {
    super(age, height, totalFruit, healthy)
    this.name         = "Mango Tree"
    this.mature       = 3
    this.maxAge       = 20
    this.heightGrow   = 5
    this.maxHeight    = 100
    this.maxProduce   = 30
    this.condition    = new Mango()
  }

  grow() {
    super.grow()
  }

  produce() {
    super.produce()
  }
}

class AppleTree extends FruitTree {
  constructor(age, height, totalFruit, healthy, maxAge, mature, maxProduce, heightGrow, maxHeight, fruit) {
    super(age, height, totalFruit, healthy)
    this.name         = "Apple Tree"
    this.mature       = 3
    this.maxAge       = 15
    this.heightGrow   = 7
    this.maxHeight    = 70
    this.maxProduce   = 30
    this.condition    = new Apple()
  }

  grow() {
    super.grow()
  }

  produce() {
    super.produce()
  }
}

class PearTree extends FruitTree {
  constructor(age, height, totalFruit, healthy, maxAge, mature, maxProduce, heightGrow, maxHeight, fruit) {
    super(age, height, totalFruit, healthy)
    this.name         = "Pear Tree"
    this.mature       = 8
    this.maxAge       = 20
    this.heightGrow   = 5
    this.maxHeight    = 80
    this.maxProduce   = 23
    this.condition    = new Pear()
  }

  grow() {
    super.grow()
  }

  produce() {
    super.produce()
  }
}

class Mango extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

class Apple extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

class Pear extends Fruit {
  constructor(quality) {
    super(quality)
  }
}

// Release 2
class TreeGrove {
  constructor() {
    this.treeGroves = []
  }

  inputTree(name, age, height, totalFruit, healthy) {
    let myGrove
    switch (name) {
      case 'MangoTree':
        myGrove = new MangoTree(age, height, totalFruit, healthy)
        break;
      case 'AppleTree':
        myGrove = new AppleTree(age, height, totalFruit, healthy)
        break;
      case 'PearTree':
        myGrove = new PearTree(age, height, totalFruit, healthy)
        break;
      default:
        myGrove = new FruitTree(age, height, totalFruit, healthy)
        // break;
    }
    this.treeGroves.push(myGrove)
  }

  showAge() {
    this.treeGroves.forEach(function (value) {
      console.log(`${value.name} berumur ${value.age}`);
    })
  }

  showTrees() {
    this.treeGroves.forEach(function (value) {
      console.log(value);
    })
  }

  mature_trees() {
    this.treeGroves.forEach(function (value) {
      if (value.totalFruit > 0 && value.healthy) {
        console.log(`${value.name} panen sebanyak ${value.totalFruit} buah`);
      }
    })
  }

  nextYear() {
    this.treeGroves.forEach(function (value) {
      value.grow()
      value.produce()
    })
  }

  dead_trees() {
    this.treeGroves.forEach(function (value) {
      if (value.healthy == false) {
        console.log(`${value.name} sudah mati pada umur ${value.age}`);
      }
    })
  }
}

var trees = new FruitTree()
trees.grow()
trees.grow()
trees.grow()
// console.log(trees);

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7, true) //name, age, height, fruits, healthy
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)
// next year
grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// show trees age
grove.showAge()
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// show dead trees
grove.dead_trees()
// console.log(grove);
