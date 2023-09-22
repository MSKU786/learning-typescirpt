let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

//built in object
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];

//classes

class Car {}
let car: Car = new Car();

//object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//when to use annotations

// 1 ) fucntion that return any type

const json = '{"x":10, "y":20}';
const cooridinate: { x: number; y: number } = JSON.parse(json);
console.log(cooridinate);

// 2) variable whose type inference not work correctyl

let numbers = [-10, 0, -2];
let fav: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    fav = numbers[i];
  }
}
