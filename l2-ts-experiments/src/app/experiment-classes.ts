class Product1 {
    title: string
    price: number
    id: number

    constructor(id: number)  {
        this.id = id
    }

    printDetails() {
        console.log(`\nProduct1: Setting and Printing properties of a class `)
        console.log(`\tTitle: ${this.title}`)
        console.log(`\tID: ${this.id}`)
        console.log(`\tPrice: ${this.price}`)
    }
}

let p1 = new Product1(100)
p1.title = 'Baseball Gloves'
p1.price = 39.95
p1.printDetails()

class Product2 {
 
    constructor(public id: number,
                public title: string,
                public price: number)  {
        this.id = id
    }

    printDetails() {
        console.log(`\nProduct2: Setting and Printing properties of a class `)
        console.log(`\tTitle: ${this.title}`)
        console.log(`\tID: ${this.id}`)
        console.log(`\tPrice: ${this.price}`)
    }
}

let p2 = new Product2(200, 'Winter Socks', 5.95)
p2.printDetails()