interface Bookable {
    availableDates: [Date];
}
interface Cancelable {
    cancelationFee: number;
}

class ProductGen {
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

class TourGen extends ProductGen implements Bookable, Cancelable {
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

class DiningGen extends ProductGen {
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

function testGen(p: ProductGen)  {
    p.printDetails();
}
function cancelBookingGen<T extends Cancelable & Product>(c: T) {
    console.log("Canceling: %s (%d) ", c.title, c.id)
    console.log("Price    : %d ", c.price)
    console.log("Cancelation Fee: %d ", c.cancelationFee)
    console.log("Total Refund   : %d \n", c.price - c.cancelationFee)
}

var t = new TourGen(1, "8 hours");
t.title = "Trip to the Taj Mahal";
t.price = 1200.00;
testGen(t);

t.cancelationFee = 100.00
cancelBookingGen(t)




