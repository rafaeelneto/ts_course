"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var LinkedListCollection_1 = require("./LinkedListCollection");
var MAIN_DIVIDER = "=====================================";
var MID_DIVIDER = "--------------------------------------";
// ! UNIONS TYPES
// in 'string | number[]' typescript only allow you to access
// commom properties between the two types
// ! TYPE GUARDS
// typeof is used to a primitive type
// instanceof is used with every other value created with a
// constructor function
// ! INHERITANCE
// Abstract classes
var numberCollection = new NumbersCollection_1.NumbersCollection([-1, -23, 1, 9, -3, 10, 0]);
numberCollection.sort();
console.log(numberCollection);
console.log(MAIN_DIVIDER);
var linkedList = new LinkedListCollection_1.LinkedCollection();
linkedList.add(60);
linkedList.add(340);
linkedList.add(-2);
linkedList.add(-543);
linkedList.add(342);
linkedList.add(-213);
linkedList.add(43);
linkedList.sort();
linkedList.print();
