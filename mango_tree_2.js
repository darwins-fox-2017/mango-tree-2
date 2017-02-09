"use strict"
// Release 0
class FruitTree {
  constructor(umur, tinggi, banyakBuah, kesehatan) {
    this.nama = "Kebun Buah"
    //this.count_umur = 0
    this.umur           = umur
    this.tinggi         = 0
    this.kesehatan      = true
    this.panen          = 0
    this.keranjang      = []
    this.panen          = this.keranjang.length
    // this.good           = 0
    // this.bad            = 0
    this.banyakBuah     = banyakBuah
    this.umur_maksimal  = 20
    this.kondisi        = new Fruit()
    this.mature         = 4
    this.tumbuh_maksimal = 12
    
  }

  grow() {
    this.umur += 1
    if(this.umur === 20) {
      this.kesehatan = false
    } else if (this.umur < 20) {
      this.tinggi += Math.round(Math.random()*100)/ 10 + 1
    }
  }

  produce() {
    let randomNumber = Math.round(Math.random()*100)/ 10 + 1

    for (let i = 0; i < randomNumber; i++) {
      if (this.kesehatan !== false) {
        this.keranjang.push(this.kondisi)
      }
    }
    this.banyakBuah = this.keranjang.length

  }

  harvest() {
    this.good = 0
    this.bad = 0
    this.panen = this.keranjang.length

    if (this.keranjang !== []) {
      for (let j = 0; j < this.keranjang.length; j++) {
        if (this.keranjang[j].kualitas === "Good") {
          this.good++
        } else {
          this.bad++
        }
      }
    }
    this.keranjang = []
  }

}
// ================================================
// function getRandomNumber() {
//   return Math.round(Math.random()*100)/ 10 + 1
// }

// function quality() {
//   if (getRandomNumber() >= 2) {
//     return "Good"
//   } else {
//     return "Bad"
//   }
// }

// =================================================
class Fruit {
  // cek kualitas
  constructor() {
    this.kualitas = "Baik" || "Buruk"
    this.size = "Besar" || "Sedang" || "Kecil" 
  }

}

// =============================

class AppleTree extends FruitTree {

  constructor(umur, tinggi, banyakBuah, kesehatan, umur_maksimal, mature, produksi_maksimal, tumbuh_maksimal,
    tinggi_maksimal) {
    super(umur, tinggi, banyakBuah, kesehatan)
    this.nama = "Pohon Apel"
    this.mature = 8
    this.tumbuh_maksimal = 5
    this.tinggi_maksimal = 72
    this.umur_maksimal = 12
    this.kondisi = new Apple()

  }

  grow() {
    super.grow()
    
  }

  produce() {
    super.produce()

  }

  harvest() {
    super.harvest()
  }
}

class MangoTree extends FruitTree {
  constructor(umur, tinggi, banyakBuah, kesehatan, umur_maksimal, mature, produksi_maksimal, tumbuh_maksimal,
    tinggi_maksimal) {
    super(umur, tinggi, banyakBuah, kesehatan)
    this.nama = "Pohon Mangga"
    this.mature = 8
    this.tinggi_maksimal = 72
    this.tumbuh_maksimal = 8
    this.umur_maksimal = 12
    this.kondisi = new Mango()

  }

  // Grow the tree
  grow() {
    super.grow()
    
  }

  // Produce some mangoes
  produce() {
    super.produce()
  }

  // Get some fruits
  harvest() {
    super.harvest()
  }


}

class PearTree extends FruitTree {
  constructor(umur, tinggi, banyakBuah, kesehatan, umur_maksimal, mature, produksi_maksimal, tumbuh_maksimal,
    tinggi_maksimal) {
    super(umur, tinggi, banyakBuah, kesehatan)
    this.nama = "Pohon Pear"
    this.mature = 8
    this.tinggi_maksimal = 72
    this.tumbuh_maksimal = 8
    this.umur_maksimal = 12
    this.kondisi = new Pear()

  }

  grow() {
    super.grow()
  }

  produce() {
    super.produce()
  }

  
  harvest() {
    super.harvest()
  }

}

// ============================

class Apple extends Fruit {
  // Produce a mango
  constructor(kualitas) {
    super(kualitas)
  }
}

class Mango extends Fruit {
	constructor(kualitas) {
    	super(kualitas)
  }

}

class Pear extends Fruit {
  constructor(kualitas) {
    super(kualitas)
  }
}

// Release 2
class TreeGrove {
  constructor() {
    this.tree_groves = []
      
  }

  inputTree(nama, umur, tinggi, banyakBuah, kesehatan) {
    let Groves
    if(nama === 'Pohon Apel') {
      Groves = new AppleTree(umur, tinggi, banyakBuah, kesehatan)
    } else if(nama === 'Pohon Mangga') {
      Groves = new MangoTree(umur, tinggi, banyakBuah, kesehatan)
    } else if(nama === 'Pohon Pear') {
      Groves = new PearTree(umur, tinggi, banyakBuah, kesehatan)
    } else {
      Groves = new FruitTree(umur, tinggi, banyakBuah, kesehatan)
    }
    this.tree_groves.push(Groves)
  }

  showAge() { 
    this.tree_groves.forEach(function (value) {
      console.log(`${value.nama} berumur : ${value.umur}`)
    })
  }

  showTree() {
    this.tree_groves.forEach(function (value) {
      console.log(value)
    })
  }

  matureTree() {
    this.tree_groves.forEach(function (value){
      if(value.banyakBuah > 0 && value.kesehatan) {
        console.log(`${value.nama} berbuah sebanyak ${value.banyakBuah} buah`)
      }
    })
  }

  nextYear() {
    this.tree_groves.forEach(function (value) {
      value.grow()
      value.produce()
    })
  }

  deadTree() {
    this.tree_groves.forEach(function (value) {
      if(value.kesehatan == false) {
        console.log(`${value.nama} mati pada umur ke ${value.umur}`)
      }
    })
  }

}

let trees = new FruitTree()
trees.grow()
trees.grow()
trees.grow()

let grove = new TreeGrove()

grove.inputTree("Pohon Mangga", 3, 1.5, 7, true) // nama, umur, tinggi, banyak buah, kesehatan
grove.inputTree("Pohon Mangga", 5, 5.5, 16, true) // nama, umur, tinggi, banyak buah, kesehatan
grove.inputTree("Pohon Apel", 7, 2.8, 7, true) 
grove.inputTree("Pohon Pear", 4, 2.5, 9, true) 


grove.nextYear()
grove.showAge()
grove.showTree()
grove.matureTree()
grove.deadTree()

