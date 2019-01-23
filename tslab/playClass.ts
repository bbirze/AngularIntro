//=====================================
// Interface Bookable
//
interface Bookable {
    availableDates: [Date]
}
//=====================================
// Interface Cancelable
//
interface Cancelable {
    cancelationFee: number
}
//=====================================
// class Product
//
class Product {
    title: string;
    price: number;
    id: number;

    constructor(id:number) {
        this.id = id
    }

    printDetails() {
        console.log(`Title: ${this.title}`)
        console.log(`Id: ${this.id}`)
        console.log(`Price: ${this.price}`)
    }
}

//=====================================
// class Tour
//     Inherits Product 
//     Implements Bookable and Cancelable
//
class Tour extends Product implements Bookable, Cancelable {
    duration: string;
    availableDates: [Date]
    cancelationFee: number
    
    constructor(id: number, duration: string)  {
        super(id);
        this.duration = duration
    }

    printDetails() {                // override Product.printDetails()
        super.printDetails()
        console.log(`Duration: ${this.duration}`)
    }
}

function printIt(p: Product) {
    p.printDetails()                   // Product printDetails() method
}

var t = new Tour(1, "8 hours")          // create new tour
t.title = "Trip to the Taj Mahal"
t.price = 1200.0
printIt(t)                              // invoke Tour.printDetails() override

console.log()
//=====================================
// class Dining
//     Inherits Product 
//
class Dining extends Product {
    cuisine: string;
    childPrice: number;

    constructor(id: number, childPrice: number, cuisine: string)  {
        super(id);
        this.cuisine = cuisine
        this.childPrice = childPrice
    }

    printDetails() {              // override Product.printDetails()
        super.printDetails()
        console.log(`Cuisine: ${this.cuisine}`)
        console.log(`ChildPrice: ${this.childPrice}`)
    }
}

var d = new Dining(2, 5.25, "Sushi")
d.title = "Blue Fish Sushi"
d.price = 155.0
printIt(d)

console.log()

function cancelBooking(c: Cancelable)  {
    console.log("Canceling booking.  Charges: %d", c.cancelationFee)
}

t.cancelationFee = 100.00
cancelBooking(t)

console.log()

// cancelBooking is a Generic Method
//    takes a type that extens Cancelable and Product
// Tour is a Cancelable, so works fine with type checking
//
function cancelBooking2<T extends Cancelable & Product>(c: T)  {
    console.log("Canceling %s (%d)", c.title, c.id)
    console.log("Price: %d", c.price)
    console.log("Cancelation fee: %d", c.cancelationFee)
    console.log("Total refund: %d", c.price - c.cancelationFee)
}

cancelBooking2(t)
