"use strict"

// Release 1
class FruitTree {

  constructor(name,age,height,harvest, healthy) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.harvest = harvest;
    this.healthy = true;
  }

  grow() {
    let height = Math.random()*2
    this.age++
    if(this.age <= 10) {
      this.height += height;
    }
    if(this.age == 20){
      this.healthy = false;
    }
  }

  produceFruits() {
    var num = getRandomNumber();
    for ( var i =0; i < num; i++) {
      var fruit = new Fruit()
      fruit.fruitQuality()
      this.fruit.push(fruit)
    }
  }

  resetharvest() {
    this.fruit = []
  }

}

class Fruit {

  constructor() {
    this.kualitas = ""
  }

  fruitQuality(){
    var arrQuality = ["good", "bad"]
    this.kualitas = arrQuality[Math.round(Math.random() * 1)]
  }
}

// Release 0
class MangoTree extends FruitTree {
  constructor(age, height, healthy, fruit, maxAge) {
    super(age, height, healthy, fruit)
    this.maxAge = 20
  }
}

class Mango extends Fruit {
  constructor(kualitas) {
    super(kualitas)
  }
}

class AppleTree extends FruitTree{
  constructor(age, height, healthy, fruit, maxAge) {
    super(age, height, healthy, fruit)
    this.maxAge = 15
  }
}

class Apple extends Fruit{
  constructor(kualitas) {
    super(kualitas)
  }
}

class PearTree extends FruitTree{
  constructor(age, height, healthy, fruit, maxAge) {
    super(age, height, healthy, fruit)
    this.maxAge = 10
  }
}

class Pear extends Fruit{
  constructor(kualitas) {
    super(kualitas)
  }
}

function getRandomNumber() {
  return Math.ceil(Math.random()*10);
}

// Release 2
class TreeGrove {
  constructor(pohon) {
    this.pohon = []
  }

  inputTree(name, age, height, fruits, healthy) {
    if (name == 'AppleTree') {
      this.pohon.push(new AppleTree(name, age, height, fruits, healthy))
    }else if (name == 'MangoTree') {
      this.pohon.push(new MangoTree(name,age,height,fruits, healthy))
    }else if (name == 'PearTree') {
      this.pohon.push(new PearTree(name,age,height,fruits,healthy))
    }
  }

  showAge() {
    for (var i = 0; i< this.pohon.length; i++) {
      console.log(`${this.pohon[i]['name']} age is ${this.pohon[i]['age']}`)
    }
  }

  showTrees() {
    console.log(this.pohon)
  }

  mature_trees() {
    console.log('pohon yang berfruit:')
    for (var i = 0; i< this.pohon.length; i++) {
      console.log(`${this.pohon[i]['name']} with qty ${this.pohon[i]['harvest']}`)
    }
  }

  nextYear() {
    for (var i = 0; i< this.pohon.length; i++) {
      this.pohon[i]['age'] += 1;
      this.pohon[i]['height'] += Math.random()*2
    }
  }

  dead_trees() {
    for (var i =0; i < this.pohon.length; i++) {
      if (this.pohon[i]['age'] >= this.pohon[i]['maxAge']) {
        this.pohon[i]['healthy'] = false;
      }
      if(this.pohon[i]['healthy'] == false) {
        console.log('pohon mati:');
        console.log(`${this.pohon[i]['name']} with age ${this.pohon[i]['age']}`);
      }
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)
// show trees age
grove.showAge()
// show trees
grove.showTrees()
// show trees
grove.mature_trees()
// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
// show trees
grove.dead_trees()
