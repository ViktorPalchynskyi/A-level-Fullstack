//1

let persons = [{
      personName: 'Leha',
      personSurName: 'Sosedov'
   }, {
      personName: 'Zeka',
      personSurName: 'Smirnov'
   },
   {
      personName: 'Lena',
      personSurName: 'Tereshkina'
   }
];

persons[persons.length] = {
   personName: 'Tanya',
   personSurName: 'Ivanova'
};

console.log(persons);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2/3/4 

for (let person of persons) {
   console.log(person);
   for (let key in person) {
      if (key === 'personName') {
         console.log(`Peron's name is ${person[key]}`);
         var name = person[key];
      } else {
         console.log(`Peron's surname is ${person[key]}`);
         var surName = person[key];
      }
      person.personFullName = `${name} ${surName}`;
   }
   console.log(`Full name is ${person.personFullName}`);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//5

const jsonPersons = JSON.stringify(persons);

console.log(jsonPersons);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//6

const stringPerson = {
   "personName": "Gosha",
   "personSurName": "Chert",
   "personFullName": "Gosha Chert"
};

persons.push(stringPerson);

console.log(persons);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//7

var str = `<table border='1'>`
for (var i = 0; i < persons.length; i++) {
   str += `<tr><td>${persons[i].personName}</td><td>${persons[i].personSurName}</td></tr>`;
}
str += `</table>`;
console.log(str);
document.write(str);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//8

function avg2(a, b) {
   return (a + b) / 2;
}

console.log(avg2(4, 2));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//9

function sum3(a, b, c = 0) {
   return a + b + c;
}

console.log(sum3(2, 3));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//10

function IntRandom(lower, upper) {
   if (upper === undefined) {
      upper = lower;
      lower = 0;
   }
   return Math.round(Math.random() * (upper - lower) + lower);
}

console.log(IntRandom(7), IntRandom(25, 30));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//11

function sum(...arguments) {
   let sum = 0;

   for (let num of arguments) sum += num;

   return sum;
}


console.log(sum(3, 2, 4, 1, ));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//12


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------