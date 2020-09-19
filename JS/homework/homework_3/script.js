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

//6



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//7



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//8


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//9



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//10


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//11


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//12