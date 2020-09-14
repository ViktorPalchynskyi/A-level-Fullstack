//1

var color = prompt("Введите цвет", "");

if ((color === 'red' || color === 'black')) {
   document.write("<div style='background-color: red;'>красный</div>");
   document.write("<div style='background-color: black; color: white;'>черный</div>");
} else if ((color === 'blue' || color === 'green')) {
   document.write("<div style='background-color: blue;'>синий</div>");
   document.write("<div style='background-color: green;'>зеленый</div>");
} else {
   document.write("<div style='background-color: gray;'>Я не понял</div>");
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2 

const userAge = prompt('What is your age?');

if (userAge <= 0 && userAge > 100) {
   console.log('Wrong age. Try againg');
} else {
   console.log(`User age is ${userAge}`);

}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3

const mounth = prompt('Pick your mounth');

switch (mounth) {
   case 'jan':
      console.log('There are 31 days in Januar');
      break;
   case 'feb':
      console.log('There are 28 days in February');
      break;
   case 'march':
      console.log('There are 31 days in March');
      break;
   default:
      console.log('Something goes wrong!');
      break;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4/5

const userAge1 = prompt('What is your age?');

if (userAge <= 0) {
   console.log('Hello little futas!');
} else if (userAge >= 5 && userAge <= 12) {
   console.log('Hello small one! It is good weather today!');
} else if (userAge >= 13 && userAge <= 18) {
   console.log('Hello teenager! It is rainy weather today!');
} else if (userAge >= 19 && userAge <= 29) {
   console.log('Hello young man! It is snow weather today!');
} else if (userAge >= 30 && userAge <= 55) {
   console.log('Hello gentleman! It is hell weather today!');
} else if (userAge >= 56 && userAge <= 90) {
   console.log('Hello old man! It is wonderfull weather today!');
} else {
   console.log('Hello senior developer!');
}

var numbs = [2, 4, 6, 8];

for (let i = 0; i < numbs.length; i++) {
   numbs[i] = numbs[i] ** 2;
}
console.log(numbs);

while (true) {
   var answer = confirm('Are you gay?');
   if (!answer) {
      continue;
   } else {
      break;
   }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//6

const htmlToJson = {
   "tagName": "body",
   "subTags": [{
         "tagName": "div",
         "subTags": [{
               "tagName": "span",
               "text": "Enter a data please:"
            },
            {
               "tagName": "br"
            },
            {
               "tagName": "input",
               "attrs": {
                  "type": "text",
                  "id": "name"
               }
            },
            {
               "tagName": "input",
               "attrs": {
                  "type": "text",
                  "id": "surname"
               }
            }
         ]
      },
      {
         "tagName": "div",
         "subTags": [{
               "tagName": "button",
               "text": "OK",
               "attrs": {
                  "id": "ok"
               }
            },
            {
               "tagName": "button",
               "text": "Cancel",
               "attrs": {
                  "id": "cancel"
               }
            }
         ]
      }
   ]
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//7

var notebook = {
   brand: prompt("Whitch brand do you prefer?"),
   type: "440 G4",
   model: prompt("And what about model?"),
   ram: prompt("How many RAM do you need?"),
   size: "14",
   weight: 1.8,
   resolution: {
      width: 1920,
      height: 1080,
   },
};

var phone = {
   brand: "What phone do you want?",
   model: "Whitch model?",
   ram: 2,
   color: "What color do you like?",
};

var person = {
   name: prompt("I hope your name isn't Donalt"),
   surname: prompt("And surname isn't Trump"),
   married: confirm("Are you married?"),
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//8

while (true) {
   var answer = confirm('Are you gay?');
   if (!answer) {
      continue;
   } else {
      break;
   }
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//9

var userNumber = +prompt("Type your number");

while (isNaN(userNumber) || userNumber <= 0) {
   userNumber = +prompt("Try againg!");
}

for (let i = 1; userNumber - 1 >= i; i++) {
   console.log(i);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//10

let i = 0;

for (i; i >= 0; i++) {
   let randomNumber = Math.random();

   console.log(randomNumber);

   if (randomNumber > 0.9) {
      break;
   }
}
alert(`Number of intrations is ${i+1}`);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//11

let sharpString = '';

for (let i = 1; i <= 10; i++) {

   let fissionRemainder = i % 2;

   if (fissionRemainder === 0) {
      sharpString += '#';
   } else {
      sharpString += ' ';
   }
}
console.log(sharpString);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//12

var numbs = [2, 4, 6, 8];

for (let i = 0; i < numbs.length; i++) {
   numbs[i] = Math.pow(numbs[i], 2);
}
console.log(numbs);