import { Faker, faker, fakerRO } from '@faker-js/faker';

export class Company {
  name: String;
  catchPhrase: String;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      long: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `Our company catch phrase is  ${this.catchPhrase}`;
  }
}
