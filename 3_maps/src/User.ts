// * WHEN THE GOAL OF THE FILE IS TO EXPORTS SOMETHING THE FILE START
// * WITH THE CAPITAL LETTER

import { GisFeature } from "./customMap";

import faker from "faker";

export class User implements GisFeature {
  name: string;
  //👇 THIS DECLARATION DOESNT INITIALIZE THE OBJECT
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  content(): string {
    return `<div>
      <h1>${this.name}</h1>
    </div>`;
  }
}
