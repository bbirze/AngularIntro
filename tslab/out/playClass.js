var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(id) {
        this.id = id;
    }
    Product.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID   : " + this.id);
        console.log("Price: " + this.price);
    };
    return Product;
}());
var Tour = /** @class */ (function (_super) {
    __extends(Tour, _super);
    function Tour(id, duration) {
        var _this = _super.call(this, id) || this;
        _this.duration = duration;
        return _this;
    }
    Tour.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration + "\n        ");
    };
    return Tour;
}(Product));
var Dining = /** @class */ (function (_super) {
    __extends(Dining, _super);
    function Dining(id, cusine, childPrice) {
        var _this = _super.call(this, id) || this;
        _this.cusine = cusine;
        _this.childPrice = childPrice;
        return _this;
    }
    Dining.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("cusine: " + this.cusine);
        console.log("Child Price: " + this.childPrice + "\n        ");
    };
    return Dining;
}(Product));
function test(p) {
    p.printDetails();
}
function cancelBooking(c) {
    console.log("Canceling booking, Charges: %d \n", c.cancelationFee);
}
var t = new Tour(1, "8 hours");
t.title = "Trip to the Taj Mahal";
t.price = 1200.00;
test(t);
t.cancelationFee = 100.00;
cancelBooking(t);
var d = new Dining(2, "Sushi", 6.50);
d.title = "Sushi For All";
d.price = 12.00;
test(d);
//# sourceMappingURL=playClass.js.map