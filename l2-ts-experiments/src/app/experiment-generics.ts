// Part 8: Using Generics
//----------------------------

console.log(`
    Try out Generics!
    ==================`)
class Product { 
    constructor(public id: number,
                public title: string,
                public price: number)  {
    }

    printDetails() {
        console.log(`Product:  `)
        console.log(`   Title: ${this.title}`)
        console.log(`   ID: ${this.id}`)
        console.log(`   Price: ${this.price}`)
    }
}

let bball = new Product(100, 'Baseball Gloves', 39.95)
let golf = new Product(200, 'Golf Club', 129.95)

                    // database of number key to product iinstance
let database = new Map<number, Product>()
database.set(bball.id, bball)
database.set(golf.id, golf)

console.log(`
    Generics: Printing contents of the database `)

database.forEach((p, key) =>  { 
    console.log(`Key is ${key}`)
    p.printDetails()
})

function getOrDefault<K, V> (key: K,
                             map: Map<K, V>,
                             defaultVal: V) : V {
    let data: V = map.get(key)

    if (data === undefined) {
        console.log(`Key: ${key} not found in database`)
        return defaultVal
    } else {
            return data
    }
}

let p3 = getOrDefault(11, database, new Product(0, "Unknown", 0.0))

console.log(`
    Generics: Printing return from getOrDefault `)
p3.printDetails()
