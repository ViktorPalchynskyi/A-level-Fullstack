let func = a => b => a + b;

let func2 = func(7);

console.log(func2(10));
console.log(func2(120));
console.log(func2(4));

const prom = Promise.resolve(5);

prom.then(data => console.log(data * 3), error => console.log(error));


