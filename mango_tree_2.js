"use strict"


function getRandomNumber() {
  return Math.random()
}

class FruitTree {
  constructor(treeDetail){
    this.name = treeDetail["name"]
    this.age = treeDetail["age"]
    this.height = treeDetail["height"]
    this.harvested = 0//treeDetail["harvest"]
    this.alive = true
    this.maxAge = treeDetail["maxAge"]
    this.fruits = []
    this.mature = false
  }

  static produceFruits() {
    let maxFruits = Math.floor(getRandomNumber()*(41)+10)
    for(let i=0; i<maxFruits; i++){
      this.fruits.push(new Fruit())
    }
  }

  static harvest() {
    this.goodFruits = 0
    this.badFruits = 0
    this.harvested = this.fruits.length

    for(let i=0; i<this.harvested; i++){
      if (this.fruits.quality == 'good') {
        this.goodFruits += 1
      }else{
        this.badFruits += 1
      }
    }

    this.fruits = []
  }
}

class Fruit {
  constructor() {
    let status = ['good','bad','good','good','good','good','good','good','good','good','good']
    this.quality = status[Math.floor(getRandomNumber()*11+1)]
  }
}


class MangoTree extends FruitTree{
  constructor(treeDetail){
    super(treeDetail)
    this.matureAge = 10
  }
}

class AppleTree extends FruitTree{
  constructor(treeDetail){
    super(treeDetail)
    this.matureAge = 9
  }
}

class PearTree extends FruitTree{
  constructor(treeDetail){
    super(treeDetail)
    this.matureAge = 7
  }
}

class Mango extends Fruit{
  constructor(qty){
    super(qty)
  }
}

class Apple extends Fruit{
  constructor(qty){
    super(qty)
  }
}

class Pear extends Fruit{
  constructor(qty){
    super(qty)
  }
}

// Release 2
class TreeGrove {
  constructor(){
    this.tree = []
  }

  assignTree(detail){
    switch (detail["name"]) {
      case "MangoTree":
        this.tree.push(new MangoTree(detail))
        break;
      case "AppleTree":
        this.tree.push(new AppleTree(detail))
        break;
      case "PearTree":
        this.tree.push(new PearTree(detail))
        break;
      default:
        console.log("Unknown tree!");
    }
  }

  showTrees(){
    console.log("==============");
    console.log("Available tree");
    console.log("==============");
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`${i+1}. ${this.tree[i].name}`);
    }
  }

  treeGrow(){
    for (let i = 0; i < this.tree.length; i++) {
      console.log(`[Year ${this.tree[i].age} Report for ${this.tree[i].name}] Height = ${this.tree[i].height}`)
      this.tree[i].age++
      if(this.tree[i].age <= this.tree[i].maxAge-2){
        this.tree[i].height += (2-getRandomNumber())*getRandomNumber()
      }else if(this.tree[i].age == this.tree[i].maxAge){
        this.tree[i].alive = false
      }

      if(this.tree[i].age >= this.tree[i].matureAge){
        this.tree[i].mature = true
      }
    }
  }

  age() {
    for(let i=0; i<this.tree.length; i++) {
      console.log(`Your ${this.tree[i].name}\'s tree age is ${this.tree[i].age-1}`)
    }
  }

  mature_trees(){
    console.log("Mature Trees");
    console.log("============");
    for (let j = 0; j < this.tree.length; j++) {
      if(this.tree[j].mature){
        console.log(`- ${this.tree[j].name}`);
      }
    }
  }

  dead_trees(){
    console.log("Dead Trees ");
    console.log("==========");
    for (let j = 0; j < this.tree.length; j++) {
      if(!this.tree[j].alive){
        console.log(`- ${this.tree[j].name}`);
      }
    }
  }

}

let mangoTreeDetail = {
  "name" : "MangoTree",
  "height" : 0.3,
  "age" : 1,
  "maxAge" : 12
}

let appleTreeDetail = {
  "name" : "AppleTree",
  "height" : 0.5,
  "age" : 1,
  "maxAge" : 10
}

let pearTreeDetail = {
  "name" : "PearTree",
  "height" : 0.7,
  "age" : 1,
  "maxAge" : 8
}


var grove = new TreeGrove()

grove.assignTree(mangoTreeDetail)
grove.assignTree(appleTreeDetail)
grove.assignTree(pearTreeDetail)

grove.showTrees()

grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()

grove.treeGrow()
grove.treeGrow()
grove.treeGrow()
grove.treeGrow()

grove.age()
grove.mature_trees()
grove.dead_trees()
