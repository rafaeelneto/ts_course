// * CLASSES ARE A BLUEPRINT TO CREATE AN OBJECT WITH FIELDS
// * AND METHODS TO REPRESENT A THING

class Vehicle {
  // TS PROPERTY DEFINITION
  // color: string;

  // FUNCTION GETS CALLED AS SOON AS THE OBJECT IS CREATED
  // constructor(color: string) {
  //   this.color = color;
  // }
  // SHORTCUT TO ASSING THE PROPERTY IN CONSTRUCTOR TO THE INSTACE OF THAT OBJECT
  constructor(public color: string) {}

  public drive(): void {
    console.log("DRIVE");
  }
  public honk(): void {
    console.log("BEEP");
  }
}

const newCivic = new Vehicle("orange");

// INHERITANCE

class Car extends Vehicle {
  // super to call the constructor of the parent class
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("VROOOOM");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();

// MODIFIERS - only to others developers dont have access to specifics methods
// * public (default) - this method can be called any where any time
// * private - this method can only be called by other methods in this class
// * protect - this method can be called by other methods in this classs or any
// * child classes

// ! BLEND WITH INTERFACES TO BUILD STRONG CODE REUSE
