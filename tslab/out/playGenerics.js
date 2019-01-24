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
var ProductGen = /** @class */ (function () {
    function ProductGen(id) {
        this.id = id;
    }
    ProductGen.prototype.printDetails = function () {
        console.log("Title: " + this.title);
        console.log("ID   : " + this.id);
        console.log("Price: " + this.price);
    };
    return ProductGen;
}());
var TourGen = /** @class */ (function (_super) {
    __extends(TourGen, _super);
    function TourGen(id, duration) {
        var _this = _super.call(this, id) || this;
        _this.duration = duration;
        return _this;
    }
    TourGen.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("Duration: " + this.duration + "\n        ");
    };
    return TourGen;
}(ProductGen));
var DiningGen = /** @class */ (function (_super) {
    __extends(DiningGen, _super);
    function DiningGen(id, cusine, childPrice) {
        var _this = _super.call(this, id) || this;
        _this.cusine = cusine;
        _this.childPrice = childPrice;
        return _this;
    }
    DiningGen.prototype.printDetails = function () {
        _super.prototype.printDetails.call(this);
        console.log("cusine: " + this.cusine);
        console.log("Child Price: " + this.childPrice + "\n        ");
    };
    return DiningGen;
}(ProductGen));
function testGen(p) {
    p.printDetails();
}
function cancelBookingGen(c) {
    console.log("Canceling: %s (%d) ", c.title, c.id);
    console.log("Price    : %d ", c.price);
    console.log("Cancelation Fee: %d ", c.cancelationFee);
    console.log("Total Refund   : %d \n", c.price - c.cancelationFee);
}
var t = new TourGen(1, "8 hours");
t.title = "Trip to the Taj Mahal";
t.price = 1200.00;
testGen(t);
t.cancelationFee = 100.00;
cancelBookingGen(t);
//# sourceMappingURL=playGenerics.js.map