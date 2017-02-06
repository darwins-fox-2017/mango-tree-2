"use strict"

// Release 0
class AppleTree {
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.max_fruits = 20;
    this.fruits = 0;
    this.harvested = 0;
    this.health = true;
  }

  getAge() {
    return this.umur;
  }

  getHeight(){
    return this.tinggi
  }

  getFruits(){
    return this.fruits
  }

  getHealthyStatus(){
    return this.health
  }

  grow() {
    var tinggi=Math.random();
    this.umur++;
    if(this.umur<=10){
      this.tinggi+=tinggi;
    }
    if(this.umur>=20) {
      this.health=false;
    }
    this.fruits = Math.floor((Math.random() * 9) + 1);
  }

  harvest() {
    var good = Math.floor((Math.random() * this.fruits) + 1);
    var bad = this.fruits - good;
    return this.fruits+' ('+good+' good, '+bad+' bad)';
  }
}

class Apple {
  constructor(isGood) {
    this.isGood = isGood;
  }

  isGood() {
    return this.isGood;
  }
}

class MangoTree {
  constructor() {
    this.umur = 0;
    this.tinggi = 0;
    this.max_fruits = 20;
    this.fruits = 0;
    this.harvested = 0;
    this.health = true;
  }

  getAge() {
    return this.umur;
  }

  getHeight(){
    return this.tinggi;
  }

  getFruits(){
    return this.fruits;
  }

  getHealthyStatus(){
    return this.health;
  }

  grow() {
    var tinggi=Math.random();
    this.umur++;
    if(this.umur<=10){
      this.tinggi+=tinggi;
    }
    if(this.umur>=20) {
      this.health=false;
    }
    this.fruits = Math.floor((Math.random() * 9) + 1);
  }

  harvest() {
    var good = Math.floor((Math.random() * this.fruits) + 1);
    var bad = this.fruits - good;
    return this.fruits+' ('+good+' good, '+bad+' bad)';
  }
}

class Mango {
  constructor(isGood) {
    this.isGood = isGood;
  }

  isGood() {
    return this.isGood;
  }
}

// Release 1
class FruitTree {
  constructor(growth, fruiting_time, max_fruits, max_growth, treeName, fruit_name, life_time) {
    this.growth = growth;
    this.umur = 0;
    this.tinggi = 0;
    this.fruiting_time = fruiting_time;
    this.max_fruits = max_fruits;
    this.max_growth = max_growth;
    this.fruits = 0;
    this.harvested = 0;
    this.health = true;
    this.fruit_name = fruit_name;
    this.treeName = treeName;
    this.life_time = life_time
  }

  getAge() {
    return this.umur;
  }

  getHeight(){
    return this.tinggi;
  }

  getFruits(){
    return this.fruits;
  }

  isFruitingTime(){
    return this.umur >= this.fruiting_time;
  }

  getHealthyStatus(){
    return this.health;
  }

  grow() {
    this.umur++;
    if(this.umur<=this.max_growth){
      this.tinggi+=this.growth;
    }
    if(this.umur>=this.life_time) {
      this.health=false;
    }
    if(this.umur>=this.fruiting_time)
    this.fruits = Math.floor((Math.random() * 9) + 1);
  }

  harvest() {
    var good = Math.floor((Math.random() * this.fruits) + 1);
    var bad = this.fruits - good;
    return this.fruits+' ('+good+' good, '+bad+' bad)';
  }
}

class Fruit {
  constructor(isGood) {
    this.isGood = isGood;
  }

  isGood() {
    return this.isGood;
  }
}

// Release 2
class TreeGrove {
  constructor(FruitTree) {
    this.FruitTree = FruitTree;
  }

  age() {
    var ages = [];
    for(var i = 0; i , i < this.FruitTree.length; i++) {
      ages.push(this.FruitTree[i].getAge())
    }
  }
  return age();
}

trees() {
  return FruitTree;
}

mature_trees() {
  var trees = [];
  for(var i=0; i<this.FruitTree[i]; i++) {
    if(!this.FruitTree[i].isFruitingTime())
    trees.push(this.FruitTree[i].getAge())
  }
  return trees;
}

dead_trees() {
  var trees = [];
  for(var i = 0; i < FruitTree.length; i++) {
    if(!this.FruitTree[i].getHealthyStatus())
    trees.push(this.FruitTree[i])
  }
  return trees;
}

var grove = new TreeGrove()
// input your trees data !
grove.inputTree("MangoTree", 3, 1.8, 7,true) //name, age, height, fruits, healthy
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)
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
