// * TUPLES ARE ARRAY-LIKE STRUCURES THE WHERE EACH ELEMENT REPRESENTS SOME PROPERTY OF A RECORD
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//make a array as a tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];

// CONSISTENT ORDER INSIDE OF A ARRAY

// ! * TYPE ALIAS *
type Drink = [string, boolean, number];

const coca: Drink = ["brown", true, 45];
