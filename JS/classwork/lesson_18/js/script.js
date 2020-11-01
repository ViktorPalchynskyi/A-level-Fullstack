let obj = Math.random() > 0.5 ? Promise.resolve() : [];
console.log(new obj.__proto__.constructor);

