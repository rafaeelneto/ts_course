"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    NumbersCollection.prototype.swap = function (index) {
        // swap elements
        var temp = this.data[index];
        this.data[index] = this.data[index + 1];
        this.data[index + 1] = temp;
    };
    NumbersCollection.prototype.compare = function (index) {
        return this.data[index] > this.data[index + 1];
    };
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
