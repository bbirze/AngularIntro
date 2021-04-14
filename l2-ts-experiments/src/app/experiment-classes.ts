// Part 6: Creating and Using Classes
//-----------------------------------

console.log(`
    Fun with Classes!
    ==================`)
class Product1 {
    title: string
    price: number
    id: number

    constructor(id: number)  {
        this.id = id            // explicitly  set all fields
    }

    printDetails() {
        console.log(`\nProduct1: Setting and Printing properties of a class `)
        console.log(`   Title: ${this.title}`)
        console.log(`   ID: ${this.id}`)
        console.log(`   Price: ${this.price}`)
    }
}

let p1 = new Product1(100)      // explicitly  set all fields
p1.title = 'Baseball Gloves'
p1.price = 39.95
p1.printDetails()

class Product2 {
                                // define fields in constructor
    constructor(public id: number,
                public title: string,
                public price: number)  {
    }

    printDetails() {
        console.log(`\nProduct2: Setting and Printing properties of a class `)
        console.log(`   Title: ${this.title}`)
        console.log(`   ID: ${this.id}`)
        console.log(`   Price: ${this.price}`)
    }
}

let p2 = new Product2(200, 'Winter Socks', 5.95)
p2.printDetails()