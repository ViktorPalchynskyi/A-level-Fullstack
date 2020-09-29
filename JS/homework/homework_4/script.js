//1

// function isLink(link) {
//    if (link !== ' ' && link.length >= 10) {
//       return link;
//    } else {
//       return null;
//    }
// }

// function isNumber(number) {
//    if (!isNaN(number)) {
//       return number;
//    } else {
//       return null;
//    }
// }

// function createImage(link, angle) {

//    if (isLink(link) && isNumber(angle)) {
//       let image = document.createElement('img');
//       image.classList.add('myimg');
//       image.setAttribute('src', link);
//       image.setAttribute('alt', 'random image');

//       image.style.transform = `rotate(${angle}deg)`;

//       document.body.appendChild(image);
//    }
// }

// function start(numberOfImages) {
//    const questionImage = prompt('Дай ссылку!');
//    const questionAngle = +prompt('На сколько градусов повернуть?');

//    let angleSum = 0;

//    for (let i = 0; i < numberOfImages; i++) {

//       angleSum += questionAngle;

//       createImage(questionImage, angleSum);
//    }
// }
// const numberOfImg = +prompt('Сколько картинок создать?');

// start(numberOfImg);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2 

function hasTag(tag) {
   const tagId = document.querySelector(tag);
   return document.body.contains(tagId) ? tagId.remove() : alert('Тега нет на странице!');
}

hasTag('div');

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//4



//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//6

var persons = [{
   name: 'Vasyan',
   age: 21
}, {
   name: 'Kolyan',
   age: 22
}, {
   name: 'Mashka',
   age: 17
}];

function sort(obj, val) {
   let sortedArr = [];

   for (let item of obj) {
      for (let key in item) {
         if (key === val) {
            sortedArr[sortedArr.length] = item[key];
         }
      }
   }

   return sortedArr;
}

console.log(sort(persons, 'name'));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//7
const regExp1 = (/\s\s\s/g);
const regExp2 = (/\s\s/g);

const arr = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    '];

for (let str of arr) {
   const newArr = str.trim().replace(regExp1, ' ').replace(regExp2, ' ');
   console.log(newArr);
};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------