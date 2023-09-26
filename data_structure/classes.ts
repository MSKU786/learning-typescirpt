class Vehicle {
  drive(): void {
    console.log('brrr brrrr brrrrrrr');
  }

  honk(): void {
    console.log('pip pipppppppp');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('vrrooooom');
  }

//INstance of vehichle
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

//instance of car
const car = new Car();
car.drive();
