import { DefaultValueAccessor } from "@angular/forms"

class Product {
 
    constructor(public id: number,
                public title: string,
                public price: number)  {
        this.id = id
    }

    printDetails() {
        console.log(`Product:  `)
        console.log(`\tTitle: ${this.title}`)
        console.log(`\tID: ${this.id}`)
        console.log(`\tPrice: ${this.price}`)
    }
}

let bball = new Product(100, 'Baseball Gloves', 39.95)
let golf = new Product(200, 'Glof Club', 129.95)

let database = new Map<number, Product>()
database.set(bball.id, bball)
database.set(golf.id, golf)

console.log(`\nGenerics: Printing contents of the database `)

database.forEach((p, key) =>  { 
    console.log(`Key is ${key}`)
    p.printDetails()
})

function getOrDefault<K, V> (key: K,
                             map: Map<K, V>,
                             defaultVal: V) : V {
        let data: V = map.get(key)

        if (data === undefined) {
            return defaultVal
        } else {
            return data
        }
}

let p3 = getOrDefault(11, database, new Product(0, "Unknown", 0.0))


console.log(`\nGenerics: Printing return from getOrDefault `)
p3.printDetails()
