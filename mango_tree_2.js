"use strict"
class FruitTree {

    // Initialize a new MangoTree
    constructor(treeProperties) {
        this.age = treeProperties.age || 0
        this.height = treeProperties.height || 0
        this.type = treeProperties.type
        // Status = 0 it's mean The tree is die
        this.status = treeProperties.status || true
        this.MAX_AGE = treeProperties.maxAge || 25
        this.MAX_GROWING_AGE = treeProperties.maxGrowingAge || 21
        this.MAX_GROWING_RATE = treeProperties.maxGrowingRate || 19
        this.FIRST_HARVEST = treeProperties.firstHarvest || 10
        this.MAX_FRUITS = treeProperties.maxFruits || 20
        this.fruits = []
    }

    // Grow the tree
    grow() {
        if (this.isDie() && this.age >= this.MAX_AGE) {
            this.status = false
            return 'die'
        } else if (this.age <= this.MAX_GROWING_AGE) {
            this.age += 1
            this.height += Randomize.getRandomHeight(this.MAX_GROWING_RATE)
        } else {
            this.age += 1
        }
    }

    getAge() {
        return this.age
    }

    isDie() {
        return this.status == false
            ? true
            : false
    }

    // Produce some fruit
    produceFruits() {
        for (let i = 0; i < Randomize.getRandomNumber(); i++) {
            let fruit = new Apple(this.age)
            this.fruits.push(fruit)
        }
    }
    // Get some fruits
    harvest() {
        let goodCount = 0
        let badCount = 0
        let fruitCount = 0
        console.log(`jumlah buah ${this.type} :  ${this.fruits.length}`);
        for (let i = 0; i < this.fruits.length; i++) {
            if (this.fruits[i].harvestedAt == this.age) {
                if (this.fruits[i].quality == 'Good') {
                    goodCount++
                } else {
                    badCount++
                }
                fruitCount++
            }
        }
        return `Fruits harvested : ${fruitCount} : ${goodCount} Good and ${badCount} Bad`
    }
}

class Fruit {
    // Produce a mango
    constructor(age) {
        this.quality = Randomize.getRandomQuality()
        this.harvestedAt = age
    }
}

class Randomize {
    constructor() {}

    static getRandomHeight(MAX_GROWING_RATE) {
        return Math.random() * MAX_GROWING_RATE
    }

    static getRandomNumber() {
        return this.to_integer(Math.random() * 10)
    }

    static getRandomQuality() {
        return Math.random() > 0.5
            ? 'Good'
            : 'Bad'
    }

    static to_integer(value) {
        return parseInt(value)
    }
}

// Release 1
class AppleTree extends FruitTree {

    produceFruits() {
        for (let i = 0; i < Randomize.getRandomNumber(); i++) {
            let fruit = new Apple(this.age)
            this.fruits.push(fruit)
        }
    }
}

class Apple extends Fruit {}

class ManggoTree extends FruitTree {
    produceFruits() {
        for (let i = 0; i < Randomize.getRandomNumber(); i++) {
            let fruit = new Manggo(this.age)
            this.fruits.push(fruit)
        }
    }
}

class Manggo extends Fruit {}

class PearTree extends FruitTree {
    produceFruits() {
        for (let i = 0; i < Randomize.getRandomNumber(); i++) {
            let fruit = new Pear(this.age)
            this.fruits.push(fruit)
        }
    }
}
class Pear extends Fruit {}

class PinnapleTree extends FruitTree {
    produceFruits() {
        for (let i = 0; i < Randomize.getRandomNumber(); i++) {
            let fruit = new Pinnaaple(this.age)
            this.fruits.push(fruit)
        }
    }
}
class Pinnaaple extends Fruit {}

let growApple = new AppleTree({
    maxAge: 20,
    type: 'AppleTree',
    maxFruits: 8,
    maxGrowingRate: 1,
    firstHarvest: 3,
    maxGrowingAge: 30
})
console.log('The tree is a alive!');
// do {
//   growApple.grow()
//   growApple.produceFruits()
//   console.log(`Year : ${growApple.getAge()} - Height : ${growApple.height.toFixed(2)} | ${growApple.harvest()}`);
//
// } while (growApple.getAge() < growApple.MAX_GROWING_AGE);

// let growPinnaple = new PinnapleTree({maxAge: 3,
//                                     type:'Pinnaaple',
//                                     maxFruits: 3,
//                                     maxGrowingRate: 1,
//                                     firstHarvest: 1,
//                                     maxGrowingAge: 6,
//                                    })
// do {
//  growPinnaple.grow()
//  growPinnaple.produceFruits()
//  console.log(`Year : ${growPinnaple.getAge()} - Height : ${growPinnaple.height.toFixed(2)} | ${growPinnaple.harvest()}`);
//
// } while (growPinnaple.getAge() < growPinnaple.MAX_GROWING_AGE);

// Release 2
class TreeGrove {
    constructor() {
        this.garden = []
    }
    inputTree(treeProperties) {
        // let tree = {}
        // tree.type = treeProperties.type
        // tree.age = treeProperties.age
        // tree.height = treeProperties.height
        // tree.fruits = treeProperties.fruits
        // this.garden.push(tree);
        let treeInGarden
        switch (treeProperties.type) {
          case 'MangoTree':
            treeInGarden = new ManggoTree({
                age: treeProperties.age,
                height: treeProperties.height,
                status: treeProperties.status,
                maxAge: 30,
                type: 'MangoTree',
                maxFruits: 20,
                maxGrowingRate: 1.5,
                firstHarvest: 5,
                maxGrowingAge: 20
            });
            break;
          case 'PearTree':
            treeInGarden = new PearTree({
                age: treeProperties.age,
                height: treeProperties.height,
                status: treeProperties.status,
                maxAge: 25,
                type: 'PearTree',
                maxFruits: 15,
                maxGrowingRate: 1.4,
                firstHarvest: 3,
                maxGrowingAge: 15
            });
            break;
          case 'AppleTree':
            treeInGarden = new PearTree({
              age: treeProperties.age,
              height: treeProperties.height,
              status: treeProperties.status,
              maxAge: 20,
              type: 'AppleTree',
              maxFruits: 8,
              maxGrowingRate: 1,
              firstHarvest: 3,
              maxGrowingAge: 30
            });
            break;
          default:
        }
        this.garden.push(treeInGarden)
    }

    nextYear() {
        for (var i = 0; i < this.garden.length; i++) {
          this.garden[i].grow()
          this.garden[i].produceFruits()
          console.log(`Year : ${this.garden[i].getAge()} - ` +
          `Height : ${this.garden[i].height.toFixed(2)} | ${this.garden[i].harvest()}`);
        }
    }

    showAge() {
      console.log(`-------- We have ${this.garden.length} Tree in the Garden -----------`);
      for (var i = 0; i < this.garden.length; i++) {
        console.log(`${this.garden[i].type},  ${this.garden[i].getAge()} Year Old`)
      }
    }

    matureTrees(){
      console.log('-------------- Mature Tree in The Garden ----------------');
      for (var i = 0; i < this.garden.length; i++) {
        if (this.garden[i].age >= this.garden[i].FIRST_HARVEST) {
          console.log(`We had  ${this.garden[i].age} year old ${this.garden[i].type}, mature at ${this.garden[i].FIRST_HARVEST} `);
        }
      }
    }

    deadTrees(){
      console.log('----------- The dead tree in the garden ): --------------------');
      for (var i = 0; i < this.garden.length; i++) {
        if (this.garden[i].age >= this.garden[i].MAX_AGE) {
          console.log(`${this.garden[i].type}, already die at ${this.garden[i].age}`);
        }
      }
    }
}
let grove = new TreeGrove()

grove.inputTree({type: "MangoTree", age: 3, height: 1.8, fruits: 7, status: true})
grove.inputTree({type: "MangoTree", age: 5, height: 2.4, fruits: 12, status: true})
grove.inputTree({type: "AppleTree", age: 4, height: 1.2, fruits: 5, status: true})
grove.inputTree({type: "PearTree", age: 7, height: 2, fruits: 15, status: true})

grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()



grove.showAge()
grove.matureTrees()
grove.deadTrees()
