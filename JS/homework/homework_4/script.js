//1

function isLink(link) {
   if (link !== ' ' && link.length >= 10) {
      return link;
   } else {
      return null;
   }
}

function isNumber(number) {
   if (!isNaN(number)) {
      return number;
   } else {
      return null;
   }
}

function createImage(link, angle) {

   if (isLink(link) && isNumber(angle)) {
      let image = document.createElement('img');
      image.classList.add('myimg');
      image.setAttribute('src', link);
      image.setAttribute('alt', 'random image');

      image.style.transform = `rotate(${angle}deg)`;

      document.body.appendChild(image);
   }
}

function start(numberOfImages) {
   const questionImage = prompt('Дай ссылку!');
   const questionAngle = +prompt('На сколько градусов повернуть?');

   let angleSum = 0;

   for (let i = 0; i < numberOfImages; i++) {

      angleSum += questionAngle;

      createImage(questionImage, angleSum);
   }
}
const numberOfImg = +prompt('Сколько картинок создать?');

start(numberOfImg);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//2 

function hasTag(tag) {
   const tagId = document.querySelector(tag);
   return document.body.contains(tagId) ? tagId.remove() : alert('Тега нет на странице!');
}

hasTag('div');

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------