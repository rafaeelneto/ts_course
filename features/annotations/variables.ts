// RELY ON TYPE INFERENCE AS MUCH AS WE CAN
let apples: number = 5;
let apples2 = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green", "blue"];
let cellPhone: number[] = [1, 2, 4];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) When the funcion returns a type of any
const json = '{"x": "10", "y": "20"}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates.y);

// 2) Delayed initialization
let words = ["red", "green", "blue"];

// let foundWord = false;
// *☝ better implementation
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];

let numberAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
