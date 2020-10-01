function makeCount() {
   let counter = 0;

   return function () {
      return counter++;
   }
}

let counter = makeCount();

console.log(counter());
console.log(counter());

let arr = [10, 0, -123, 213, 4123];

let newArr = arr.filter(item => item > 0);


console.log(newArr);

function Person(name, age) {
   this.name = name;
   this.age = age;
}

let vasyan = new Person('Vasyan', 12);
let kolyan = new Person('Kolyan', 35);

console.log(vasyan);
console.log(kolyan);