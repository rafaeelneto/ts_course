// CREATE A NEW TYPE DESCRIBING THE PROPERTY NAME AND VALUES
// TYPES OF OBJECTS

// const oldCivic = {
//   name: "civic",
//   year: 2000,
//   broken: true,
// };

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(vehicle);
// };

// printVehicle(oldCivic);

// A INTERFACE DEFINE A TYPE THE SAME WAY NUMBER, STRING ETC
// * Start with capital letter
// * its a minimum of properties that a object
// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
//   summary(): string;
// }

// const oldCivic: Vehicle = {
//   name: "civic",
//   year: 2000,
//   broken: true,
//   summary(): string {
//     return `${this.name}`;
//   },
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary);
// };

// printVehicle(oldCivic);

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: 2000,
  sugar: 40,
  summary(): string {
    return `${this.color} sugar: ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(drink);

// INTERFACES AS GATEKEEPING

// ! GENERAL STRATEGY FOR REUSABLE CODE IN TS
// * CREATE FUNCTION THAT ACCEPT ARGUMENTS THAT ARE TYPE WITH INTERFACES
