"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    CharactersCollection.prototype.swap = function (index) {
        // swap elements
        var charArray = this.data.split("");
        var temp = charArray[index];
        charArray[index] = charArray[index + 1];
        charArray[index + 1] = temp;
        this.data = charArray.join("");
    };
    CharactersCollection.prototype.compare = function (index) {
        return this.data[index].toLowerCase() > this.data[index + 1].toLowerCase();
    };
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
