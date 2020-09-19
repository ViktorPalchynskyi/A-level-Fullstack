// const enTranslate = {
//    greeeting: 'Hello',
//    howAreYou: 'How are you?',
//    goodBye: 'Good bye'
// };

// for (key in enTranslate) {
//    console.log(enTranslate[key]);
// }

// const jsonFile = JSON.stringify(enTranslate);
// const jsonFile2 = JSON.parse(jsonFile);


// console.log(jsonFile);
// console.log(jsonFile2);

// const name = 'Vasyan';
// const age = 21;

// const person = {
//    name,
//    age,
//    isInteligent: true
// };

// var person2 = {
//    ...person,
//    some: 'some'
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person2);


// var translations = {
//    greeting: 'Hello',
//    question: 'How are you, dude',
//    bye: 'See you!'
// };

// for (var prop in translations) {
//    console.log(translations[prop]);
// }


// const jsonTranslations = JSON.stringify(translations);

// console.log(jsonTranslations);

// var card = {
//    number: '6413 5146 7313 5167',
//    expire: '03/22',
//    cvv: 512
// }

// var anotherCard = {
//    ...card,
//    status: 'Gold'
// }

// console.log(anotherCard);

// var number = '6413 5146 7313 5167';
// var expire = '03/22';
// var cvv = 590;

// var card = {
//    number,
//    expire,
//    cvv
// }

// console.log(Object.values(card));


// var boxKotiky = [
//    'pers',
//    'pes',
//    'chert'
// ];

// var anotherBox = [...boxKotiky, 'metis'];

// console.log(anotherBox);

var card = {
   number: '6413 5146 7313 5167',
   expire: '03/22',
   cvv: 512
}

var { number: num, expire: exp, cvv: save } = card;

console.log(num);
console.log(exp);
console.log(save);

