import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedCollection } from "./LinkedListCollection";

const MAIN_DIVIDER = `=====================================`;
const MID_DIVIDER = `--------------------------------------`;

// ! UNIONS TYPES
// in 'string | number[]' typescript only allow you to access
// commom properties between the two types

// ! TYPE GUARDS
// typeof is used to a primitive type
// instanceof is used with every other value created with a
// constructor function

// ! INHERITANCE
// Abstract classes

const numberCollection = new NumbersCollection([-1, -23, 1, 9, -3, 10, 0]);
numberCollection.sort();
console.log(numberCollection);

console.log(MAIN_DIVIDER);

const linkedList = new LinkedCollection();
linkedList.add(60);
linkedList.add(340);
linkedList.add(-2);
linkedList.add(-543);
linkedList.add(342);
linkedList.add(-213);
linkedList.add(43);
linkedList.sort();
linkedList.print();
