"use strict"

class FruitTree {
  constructor(argumen={})
  {
    this._age = argumen['age'] || 0
    this._max_age = argumen['max_age'] || 20
    this._height = argumen['height'] || 15
    this._diameter = argumen['diameter'] || 0
    this._healthy = argumen['healthy'] || true;
  }

  set max_age(maxAge)
  {
    this._max_age = maxAge
  }
  set age(age) {
    this._age = age;
  }
  set height(height) {
    this._height = height;
  }
  set diameter(diameter) {
    this._diameter = diameter;
  }
  set healthy(healthy) {
    this._healthy = healthy;
  }

  get max_age()
  {
    return this._max_age
  }
  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get diameter() {
    return this._diameter;
  }
  get healthy() {
    return this._healthy;
  }


}

class AppleTree extends FruitTree{
    constructor()
    {
      super()
    }
}

class MangoTree extends FruitTree{
    constructor()
    {
      super()
    }
}

class PearTree extends FruitTree{
    constructor()
    {
      super()
    }
}


class Fruit{
  constructor(argumen={})
  {
    this._diameter = argumen['diameter']
    this._size = argumen['size']
    this._taste = argumen['taste']
  }

  set diameter(diameter)
  {
    this._diameter = diameter
  }
  get diameter()
  {
    return this._diameter
  }
  set size(size)
  {
    this._size = size
  }
  get size()
  {
    return this._size
  }

  set taste(taste)
  {
    this._taste = taste
  }
  get taste()
  {
    return this._taste
  }
}

class Apple extends Fruit{
  constructor()
  {
    super();
  }
}

class Mango extends Fruit{
  constructor()
  {
    super();
  }
}

class Pear extends Fruit{
  constructor()
  {
    super();
  }
}

var fruit = new Fruit()
var apple = new Apple()
var mango = new Mango()
var pear = new Pear()


class TreeGrove {
  constructor()
  {
    this.save_tree = [];
  }

  age()
  {
    for (var i = 0; i < this.save_tree.length; i++) {
      console.log(this.save_tree[i].constructor.name + " : " + this.save_tree[i]._age);
    }
    // return this.save_tree[this.save_tree.length].age;
  }

  add_trees(tree)
  {
      this.save_tree[this.save_tree.length] = tree;
  }

  trees() {
    for (var i = 0; i < this.save_tree.length; i++) {
      // console.log(this.save_tree[i]);
     console.log(`[Year ${this.save_tree[i]._age} Report] Height = ${this.save_tree[i]._height.toFixed(1)} m Diameter = ${this.save_tree[i]._diameter} Healthy = ${this.save_tree[i]._healthy}`);

    }
  }

  get_size()
  {
    return this.save_tree.length
  }

  mature_trees() {
    var save_tree = []
    for(var i=0;i<this.save_tree.length;i++)
    {
      if(this.save_tree[i]._age >= 3 && this.save_tree[i]._age <=15)
      {
        save_tree.push(this.save_tree[i].constructor.name)
      }
    }

    if (save_tree.length === 0) {
      return "No trees mature :'(";
    }
    else {
      return save_tree.join("\n");
    }

  }

  dead_trees() {
    var tree_die = []
    for(var i=0;i<this.save_tree.length;i++)
    {
      if(this.save_tree[i]._age >= this.save_tree[i]._max_age)
      {
        tree_die.push(this.save_tree[i].constructor.name)
      }
    }

    if (tree_die.length === 0) {
      return "All trees still healthy :')";
    }
    else {
      return tree_die.join("\n");
    }

  }
}

function getRand() {
  // return Math.random();
  return Math.round(Math.random()*100)/20

}


var tree = new TreeGrove();

var appleTree = new AppleTree()
  appleTree.age = Math.ceil(getRand() * 9);
  appleTree.max_age = 20;
  appleTree.height = Math.ceil(getRand() * 10);
  appleTree.diameter = getRand().toFixed(2);

var mangoTree = new MangoTree()
  mangoTree.age = Math.ceil(getRand() * 8);
  mangoTree.max_age = 20;
  mangoTree.height = Math.ceil(getRand() * 15);
  mangoTree.diameter = getRand().toFixed(2);

var pearTree = new PearTree()
  pearTree.age = Math.ceil(getRand() * 7);
  pearTree.max_age = 20;
  pearTree.height = Math.ceil(getRand() * 17);
  pearTree.diameter = getRand().toFixed(2);

tree.add_trees(appleTree)
tree.add_trees(mangoTree)
tree.add_trees(pearTree)

console.log("\n");
console.log("Age of tree ");
tree.age();

console.log("\n");
console.log("A list of all the trees :");
tree.trees();

console.log("\n");
console.log("List of mature trees :");
console.log(tree.mature_trees());

console.log("\n");
console.log("List of dead trees :");
console.log(tree.dead_trees());
console.log("\n");
// console.log(`List of dead trees die : ${tree.dead_trees()}`);
