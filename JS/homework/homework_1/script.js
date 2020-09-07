const STORE_TYPE = 'COFFEE_SHOP';
const STORE_NAME = 'KAROMA_GAVA';

var latteCost = 39.50;
let latteSize = 0.3;
const latteTemperature = 'hot';
var latteToppings = 'none';
let discount = 0.15;

const croissant = {
   cost: 20,
   size: 200,
   toppings: 'chocolate'
};

const ciabatta = {
   cost: 25,
   size: 200,
   toppings: 'chiken'
};

const latte = {
   cost: 39.50,
   size: 0.3,
   temperature: 'hot',
   toppings: 'none'
};

const iceLatte = {
   cost: 44,
   size: 0.5,
   temperature: 'cold',
   toppings: 'banana syrop'
};

const cappuccino = {
   cost: 43,
   size: 0.5,
   temperature: 'hot',
   toppings: 'whipped cream'
};

var fitstClientOrder = iceLatte.cost + cappuccino.cost + ciabatta.cost;

var secondClientOrder = latte.cost + croissant.cost * 2;
var secondClientDicount = secondClientOrder * discount;
let secondClientOrderAfterDicount = (secondClientOrder - secondClientDicount).toFixed(2);

var thirdClientOrder = cappuccino.cost + ciabatta.cost * 2 + croissant.cost;
var thirdClientDicount = thirdClientOrder * discount;
let thirdClientOrderAfterDicount = (thirdClientOrder - thirdClientDicount).toFixed(2);


console.log('Первый клиент заказал на сумму ' + fitstClientOrder + ' грн.');
console.log('Второй клиент заказал на сумму ' + secondClientOrder + ' грн.' + ' с учетом скидки ' + secondClientOrderAfterDicount + ' грн.');
console.log('Третий клиент заказал на сумму ' + thirdClientOrder + ' грн.' + ' с учетом скидки ' + thirdClientOrderAfterDicount + ' грн.');
