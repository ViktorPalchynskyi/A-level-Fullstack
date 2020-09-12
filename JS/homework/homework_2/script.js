//1

// var color = prompt("Введите цвет", "");

// if ((color === 'red' || color === 'black')) {
//    document.write("<div style='background-color: red;'>красный</div>");
//    document.write("<div style='background-color: black; color: white;'>черный</div>");
// } else if ((color === 'blue' || color === 'green')) {
//    document.write("<div style='background-color: blue;'>синий</div>");
//    document.write("<div style='background-color: green;'>зеленый</div>");
// } else {
//    document.write("<div style='background-color: gray;'>Я не понял</div>");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2 

// const userAge = prompt('What is your age?');

// if (userAge <= 0 && userAge > 100) {
//    console.log('Wrong age. Try againg');
// } else {
//    console.log(`User age is ${userAge}`);

// }


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//3

// const mounth = prompt('Pick your mounth');

// switch (mounth) {
//    case 'jan':
//       console.log('There are 31 days in Januar');
//       break;
//    case 'feb':
//       console.log('There are 28 days in February');
//       break;
//    case 'march':
//       console.log('There are 31 days in March');
//       break;
//    default:
//       console.log('Something goes wrong!');
//       break;
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4/5


// const userAge = prompt('What is your age?');

// if (userAge <= 0) {
//    console.log('Hello little futas!');
// } else if (userAge >= 5 && userAge <= 12) {
//    console.log('Hello small one! It is good weather today!');
// } else if (userAge >= 13 && userAge <= 18) {
//    console.log('Hello teenager! It is rainy weather today!');
// } else if (userAge >= 19 && userAge <= 29) {
//    console.log('Hello young man! It is snow weather today!');
// } else if (userAge >= 30 && userAge <= 55) {
//    console.log('Hello gentleman! It is hell weather today!');
// } else if (userAge >= 56 && userAge <= 90) {
//    console.log('Hello old man! It is wonderfull weather today!');
// } else {
//    console.log('Hello senior developer!');
// }

// var numbs = [2, 4, 6, 8];

// for (let i = 0; i < numbs.length; i++) {
//    numbs[i] = numbs[i] ** 2;
// }
// console.log(numbs);

// while (true) {
//    var answer = confirm('Are you gay?');
//    if (!answer) {
//       continue;
//    } else {
//       break;
//    }
// } 
var numbs = [2, 4, 6, 8];

for (let i = 0; i < numbs.length; i++) {
   numbs[i] = Math.pow(numbs[i], 2);
}
console.log(numbs);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//8

// while (true) {
//    var answer = confirm('Are you gay?');
//    if (!answer) {
//       continue;
//    } else {
//       break;
//    }
// }