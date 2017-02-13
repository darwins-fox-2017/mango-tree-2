"use strict"

class FruitTree {

  constructor(name, age, height, harvest) {
    this._name      = name
    this._age       = age
    this._height    = height
    this._harvested = harvest
    this._health    = true
  }

  getAge() {
    return this._age
  }

  getHeigth() {
    return this._height
  }

  getFruits() {
    return this._height.length
  }

  getHealthyStatus() {
    return this._health
  }

  static grow() {
    this._age++
    if(this._age <= 10) {
      this._height = getRandomNumber() / 10
    }
    if(this._age === 20){
      this._health = false
    }
  }

  // Produce some mangoes
  produceFruits() {
    for(var n = 0; n <= getRandomNumber() * 10; n++) {
      this._fruits.push(new Mango())
    }
  }

  harvest() {
    this._harvested  = this._fruits.length
    this._goodFruits = 0
    this._badFruits  = 0

    for (var x = 0; x < this._fruits.length; x++) {
      if ( this._fruits[x]['_quality'] == 'good') {
        this._goodFruits++
      }
      if (this._fruits[x]['_quality'] == 'bad') {
        this._badFruits++
      }
    }
      this._fruits = []
  }
}

class Fruits {
  constructor() {
    let status = ['good', 'bad']
    this._quality = status[Math.floor(Math.random() * 2)]
    return this._quality
  }
}

function getRandomNumber() {
  return Math.random()
}

class MangoTree extends FruitTree {
  constructor(age, height, health, harvest, maxAge) {
    super(age, height, health, harvest)
    this.maxAge = 20;
  }
}

class Mango extends Fruits {
  constructor(_quality) {
    super(_quality)
  }
}

class AppleTree extends FruitTree {
  constructor(age, height, health, harvest, maxAge){
    super(age, height, health, harvest)
    this.maxAge = 15
  }
}

class Apple extends Fruits {
  constructor(_quality){
    super(_quality)
  }
}

class PearTree extends FruitTree {
  constructor(age, height, health, harvest, maxAge) {
    super(age, height, health, harvest)
    this.maxAge = 20
  }
}

class Pear extends Fruits {
  constructor(_quality) {
    super(_quality)
  }
}

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
      console.log(`${this.tree[i]['_name']} age is ${this.tree[i]['_age']}`);
    }
  }

  showTrees(){
    console.log(this.tree);
  }

  mature_trees(){
    console.log('pohon yg sedang berbuah : ');
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i]['_name']} dengan quality ${this.tree[i]['_harvested']}`);
    }
  }

  nextYear(){
    for(let i = 0; i < this.tree.length; i++) {
      this.age += 1
    }
  }

  deadTrees(){
    for (let i = 0; i < this.tree.length; i++) {
      if (this.tree[i]['age'] >= this.tree[i]['maxAge']) {
        this.tree[i]['_healthy'] = false;
      }
      if(this.tree[i]['_healthy'] == false) {
        console.log('pohon yang mati:');
        console.log(`${this.tree[i]['_name']} with age ${this.pohon[i]['_age']}`);
      }
    }
  }
}

var grove = new TreeGrove()

grove.inputTree("MangoTree", 5, 3.2, 12,true)
grove.inputTree("AppleTree", 3, 1.5, 5,true)
grove.inputTree("PearTree", 4, 2.5, 15,true)
// show trees age
grove.showAge()
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// next year
grove.nextYear()
//show trees
grove.deadTrees()
