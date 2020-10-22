function* gena(...params) {
   console.log(params);
   yield 1;
   console.log('1');
   yield 2;
   console.log('2');
   yield 3;
   console.log('3');
   return 'all';
}

let iter = gena('param');

function* notFor(end, step = 1, start = 0) {
   for (let i = start; i < end; i += step) {
      yield i;
   }
}

console.log([...notFor(10)]);

function* genaCombined() {
   yield* gena();
   yield* notFor(10);
}

console.log(...genaCombined());