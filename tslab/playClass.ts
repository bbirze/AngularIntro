
interface Bookable {
    availableDates: [Date];
}
interface Cancelable {
    cancelationFee: number;
}

class Product {
    title: string;
    price: number;
    id: number;

    constructor(id: number) {
        this.id = id;
    }

    printDetails()  {
        console.log(`Title: ${this.title}`);
        console.log(`ID   : ${this.id}`);
        console.log(`Price: ${this.price}`);
    }
}

class Tour extends Product implements Bookable, Cancelable {
    duration: string;
    availableDates: [Date];
    cancelationFee: number;

    constructor(id: number, duration: string)  {
        super(id);
        this.duration = duration;
    }
    printDetails()  {
        super.printDetails();
        console.log(`Duration: ${this.duration}
        `);
    }
}

class Dining extends Product {
    cusine: string;
    childPrice: number;

    constructor(id: number, cusine: string, childPrice: number)  {
        super(id);
        this.cusine = cusine;
        this.childPrice = childPrice;
    }

    printDetails()  {
        super.printDetails();
        console.log(`cusine: ${this.cusine}`);
        console.log(`Child Price: ${this.childPrice}
        `);
    }
}

function test(p: Product)  {
    p.printDetails();
}
function cancelBooking(c: Cancelable) {
    console.log("Canceling booking, Charges: %d \n", c.cancelationFee)
}

var t = new Tour(1, "8 hours");
t.title = "Trip to the Taj Mahal";
t.price = 1200.00;
test(t);

t.cancelationFee = 100.00
cancelBooking(t)

var d = new Dining(2, "Sushi", 6.50);
d.title = "Sushi For All";
d.price = 12.00;
test(d);



