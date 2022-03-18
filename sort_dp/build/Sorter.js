"use strict";
// ! ABSTRACT CLASS
// 1 - Cannot be used to create an object directlly
// Cannot be used with new ..
// 2 - Only used as parent class
// 3 - Can contain real implementation for some methods
// 4 - The implemented methods  can refer  to other methods
//  that don't actually  exist yet (we still have to provide
//  names and types for the un-implemented  methods)
// 5 - Can make child classes promise to implement some other methods
Object.defineProperty(exports, "__esModule", { value: true });
// * ! ABSTRACT CLASSES VS INTERFACES ! *
// Interfaces:
// - Sets up a contract between  different classes
// - Use when we have very different objects that we want to work together
// - Promotes loose coupling
// Abstract classes:
// - Sets up a contract between different classes
// - Use when we're trying to build up a definition of an object
// - Strongly couples classes  together
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j)) {
                    // swap elements
                    this.swap(j);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
