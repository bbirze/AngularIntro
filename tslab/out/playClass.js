var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//=====================================
// class Product
//
var Product = (function () {
    function Product(id) {
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("Id: " + this.id);
        console.log("Price: " + this.price);
    };
    return Product;
}());
//=====================================
// class Tour
//     Inherits Product 
//     Implements Bookable and Cancelable
//
var Tour = (function (_super) {
    __extends(Tour, _super);
    function Tour(id, duration) {
        var _this = _super.call(this, id) || this;
        _this.duration = duration;
        return _this;
    }
    Tour.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration);
    };
    return Tour;
}(Product));
function printIt(p) {
    p.printDetails(); // Product printDetails() method
}
var t = new Tour(1, "8 hours"); // create new tour
t.title = "Trip to the Taj Mahal";
t.price = 1200.0;
printIt(t); // invoke Tour.printDetails() override
console.log();
//=====================================
// class Dining
//     Inherits Product 
//
var Dining = (function (_super) {
    __extends(Dining, _super);
    function Dining(id, childPrice, cuisine) {
        var _this = _super.call(this, id) || this;
        _this.cuisine = cuisine;
        _this.childPrice = childPrice;
        return _this;
    }
    Dining.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Cuisine: " + this.cuisine);
        console.log("ChildPrice: " + this.childPrice);
    };
    return Dining;
}(Product));
var d = new Dining(2, 5.25, "Sushi");
d.title = "Blue Fish Sushi";
d.price = 155.0;
printIt(d);
console.log();
function cancelBooking(c) {
    console.log("Canceling booking.  Charges: %d", c.cancelationFee);
}
t.cancelationFee = 100.00;
cancelBooking(t);
console.log();
// cancelBooking is a Generic Method
//    takes a type that extens Cancelable and Product
// Tour is a Cancelable, so works fine with type checking
//
function cancelBooking2(c) {
    console.log("Canceling %s (%d)", c.title, c.id);
    console.log("Price: %d", c.price);
    console.log("Cancelation fee: %d", c.cancelationFee);
    console.log("Total refund: %d", c.price - c.cancelationFee);
}
cancelBooking2(t);
//# sourceMappingURL=playClass.js.map