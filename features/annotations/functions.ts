// the return type is infered
const add = (a: number, b: number) => {
  return a + b;
};

// but we must declare the type of the return of a value to ensure that we return the right type
const subtract = (a: number, b: number) => {
  console.log(a + b);
};

// DESTRUCTURING WITH TYPE ANNOTATIONS
const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);

// ANNOTATION ARROUND OBJECTS
const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
