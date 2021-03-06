import faker from "faker";
import { GisFeature } from "./customMap";

export class Company implements GisFeature {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  content(): string {
    return `<div>
      <h1>${this.companyName}</h1>
      <h3>${this.catchPhrase}</h3>
    </div>`;
  }
}
