// ARRAYS WHERE EACH ELEMENT IS CONSISTENTE WITH THE TYPE
const carMakers: string[] = ["ford", "mercedes", "fiat"];

const carsByMakers: string[][] = [];

// HELP WITH INFERENCE
const myCar = carMakers[0];

// Prevent incompatible values
carMakers.push(100);

// help with map
carMakers.map((car): string => {
  return car.toUpperCase();
});

// MULTI TYPE ARRAYS
const importantDates = [new Date(), "2020-03-15"];

importantDates.push(100);

// * USE TO REPRESENT A COLLECTION OF RECORDS WITH SOME ARBRITARY ORDER
// Tuples are very similar to arrays
