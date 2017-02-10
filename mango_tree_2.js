"use strict"

//---------------------------------- Release 0-------------------------
class FruitTree {
  // Initialize a new MangoTree
  constructor(name, age, height, harvest) {
    this.name      = name
    this.age       = age
    this.height    = height
    this.harvested = harvest
    this.health    = true
  }

  // Get current states here
  getAge() {
    return this.age
  }

  getHeigth() {
    return this.height
  }

  getFruits() {
    return this.height.length
  }

  getHealthyStatus() {
    return this.health
  }

  // Grow the tree
  static grow() {
    this.age++
    if(this.age <= 10) {
      this.height = getRandomNumber() / 10
    }
    if(this.age === 20){
      this.health = false
    }
  }

  // Produce some mangoes
  produceFruits() {
    for(var n = 0; n <= getRandomNumber() * 10; n++) {
      this.fruits.push(new Mango())
    }
  }

  // Get some fruits
  harvest() {
    this.goodFruits = 0
    this.badFruits  = 0

    this.harvested  = this.fruits.length
    for (var x = 0; x < this.fruits.length; x++) {
      if ( this.fruits[x]['qty'] == 'good') {
        this.goodFruits++
      }else {
        this.badFruits++
      }
    }
      this.fruits = []
  }
}

class Fruits {
  constructor() {
    let status = ['good', 'bad']
    this.qty = status[Math.floor(Math.random() * 2)]
    return this.qty
  }
}

//generate Fruits
function getRandomNumber() {
  return Math.random()
}

class MangoTree extends FruitTree {
  constructor(age, height, health, harvest, maxAge) {
    super(age, height, health, harvest)
    this.maxAge = 10;
  }
}
//------------------------------------------ release 1 ------------------------------------------
class Mango extends Fruits {
  constructor(qty) {
    super(qty)
  }
}

class AppleTree extends FruitTree {
  constructor(age, height, health, harvest, maxAge){
    super(age, height, health, harvest)
    this.maxAge = 15
  }
}

class Apple extends Fruits {
  constructor(qty){
    super(qty)
  }
}

class PearTree extends FruitTree {
  constructor(age, height, health, harvest, maxAge) {
    super(age, height, health, harvest)
    this.maxAge = 10
  }
}

class Pear extends Fruits {
  constructor(qty) {
    super(qty)
  }
}

// -----------------------------------------------Release 2---------------------------------------
class TreeGrove {
  constructor(tree){
    this.tree = [];
  }

  inputTree(name, age, height, harvest, health){
    if(name == 'MangoTree'){
      this.tree.push(new MangoTree(name, age, height, harvest, health))
    }else if (name == 'AppleTree'){
      this.tree.push(new AppleTree(name, age, height, harvest, health))
    }else if (name == 'PearTree') {
      this.tree.push(new PearTree(name, age, height, harvest, health))
    }
  }

  showAge(){
    for(let i = 0; i < this.tree.length; i++){
      console.log(`${this.tree[i]['name']} age is ${this.tree[i]['age']}`);
    }
  }

  showTrees(){
    console.log(this.tree);
  }

  mature_trees(){
    console.log('pohon yg sedang berbuah : ');
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i]['name']} dengan quality ${this.tree[i]['harvested']}`);
    }
  }

  nextYear(){
    // for (var i = 0; i < this.tree.length; i++) {
    //   this.tree[i]['age'] += 1;
    //   this.tree[i]['height'] += Math.random()*2
    // }
    FruitTree.grow()
  }

  deadTrees(){
    console.log('pohon yang mati:');
    for (var i = 0; i < this.tree.length; i++) {
      if (this.tree[i]['age'] >= this.tree[i]['maxAge']) {
        this.tree[i]['healthy'] = false;
      }
      if(this.tree[i]['healthy'] == false) {
        console.log(`${this.tree[i]['name']} with age ${this.tree[i]['age']}`);
      }
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("AppleTree", 20, 1.8, 7,true)
grove.inputTree("MangoTree", 7, 3.2, 15,true)
grove.inputTree("MangoTree", 15, 3.2, 15,true)
grove.inputTree("AppleTree", 4, 1.5, 4,true)
grove.inputTree("PearTree", 3, 2.5, 12,true)
// show trees age
grove.showAge()
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// next year
grove.nextYear()
grove.nextYear()

// // show trees
grove.deadTrees()
