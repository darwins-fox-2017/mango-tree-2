"use strict"
class FruitTree {

    // Initialize a new MangoTree
    constructor(treeProperties) {
        this.age = 0
        this.height = 0
        this.type = treeProperties.type
        // Status = 0 it's mean The tree is die
        this.status = 1
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
            this.status = 0
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
        return this.status == 0
            ? true
            : false
    }

    // Produce some fruit

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
class AppleTree extends FruitTree{
  produceFruits() {
      for (let i = 0; i < Randomize.getRandomNumber(); i++) {
          let fruit = new Apple(this.age)
          this.fruits.push(fruit)
      }
  }
}
class Apple extends Fruit {

}

class PinnapleTree extends FruitTree{
  produceFruits() {
      for (let i = 0; i < Randomize.getRandomNumber(); i++) {
          let fruit = new Pinnaaple(this.age)
          this.fruits.push(fruit)
      }
  }
}
class Pinnaaple extends Fruit {

}

let growApple = new AppleTree({maxAge: 20,
                              type:'Apple',
                              maxFruits: 8,
                              maxGrowingRate: 1,
                              firstHarvest: 3,
                              maxGrowingAge: 30,
                             })
console.log('The tree is a alive!');
do {
  growApple.grow()
  growApple.produceFruits()
  console.log(`Year : ${growApple.getAge()} - Height : ${growApple.height.toFixed(2)} | ${growApple.harvest()}`);

} while (growApple.getAge() < growApple.MAX_GROWING_AGE);

let growPinnaple = new PinnapleTree({maxAge: 3,
                                    type:'Pinnaaple',
                                    maxFruits: 3,
                                    maxGrowingRate: 1,
                                    firstHarvest: 1,
                                    maxGrowingAge: 6,
                                   })
do {
 growPinnaple.grow()
 growPinnaple.produceFruits()
 console.log(`Year : ${growPinnaple.getAge()} - Height : ${growPinnaple.height.toFixed(2)} | ${growPinnaple.harvest()}`);

} while (growPinnaple.getAge() < growPinnaple.MAX_GROWING_AGE);

// Release 2
class TreeGrove {}
