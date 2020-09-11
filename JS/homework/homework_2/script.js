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

// while (true) {
//    var answer = confirm('Are you gay?');
//    if (!answer) {
//       continue;
//    } else {
//       break;
//    }
// }