// function runTeapot() { //запуск чайника, операция синхронная. Однако возвращается Promise, который свершится по факту закипания
//    console.log('TEA: run teapot')
//    let seconds = (45 + (Math.random() * 255))
//    return new Promise(r => setTimeout(() => r(seconds), seconds * 100))
// }

// function prepareCup() { //синхронная функция подготовки чашки. 
//    console.log('TEA: prepare tea cup');
// }

// function fillCupWithWater() { //синхронная функция заливания кипятка в чашку.
//    console.log('TEA: fill cup with water');
// }

// async function prepareTea() { //асинхронная функция приготовления чая.
//    let teapotPromise = runTeapot(); //нажимаем кнопку и получаем промис кипятка
//    prepareCup(); //сыпем заварку в чашку, чайник тем временем греется
//    let boiledWater = await teapotPromise; //функция приостонавливается пока чайник не закипит. В это время можно заниматься другими делами
//    fillCupWithWater(boiledWater); //Заливаем кипяток
//    return 'TEA: Tea Ready' //Возвращаем строку о готовности чая
// }



// function preparePlate() { //льем суп в тарелку
//    console.log('SOUP: prepare plate...');
// }

// function movePlateToOven() { //ставим тарелку в микроволновку
//    console.log('SOUP: to oven...');
// }

// function movePlateFromOvenToTable() { //ставим тарелку на стол
//    console.log('SOUP: plate from oven to table...');
// }

// function runOven(seconds) { //включение микроволновки, функция возвращает Promise о окончании нагревания через seconds секунд
//    console.log('SOUP: run oven')
//    return new Promise(r => setTimeout(() => r(seconds), seconds * 100))
// }

// async function prepareSoup() { //асинхронная функция приготовления супа
//    preparePlate() //суп в тарелку
//    movePlateToOven() //тарелку в печку
//    let hotPlate = await runOven(2 * 60); //функция прерывается на работу печи 2 минуты. В это время может "разморозится" готовка чая, например
//    movePlateFromOvenToTable(hotPlate) //ставим на стол.
//    return 'Soup Ready';
// }


// let soupPromise = prepareSoup(); //так как асинхронная функция не может синхронно сразу же вернуть результат, 
// //то они всегда возвращают Promise, результатом которого будет то, что вернет функция
// console.log('soup', soupPromise); //объект Promise

// soupPromise.then(result => console.log('soup result', result)) //Когда асинхронная функция выполнит return, вы увидете `Soup Ready`

// let teaPromise = prepareTea();
// console.log('tea', teaPromise)

// teaPromise.then(r => console.log('tea promise', r))


function jsonPost(url, data) {
   return new Promise((resolve, reject) => {
      var x = new XMLHttpRequest();
      x.onerror = () => reject(new Error('jsonPost failed'))
      //x.setRequestHeader('Content-Type', 'application/json');
      x.open("POST", url, true);
      x.send(JSON.stringify(data))

      x.onreadystatechange = () => {
         if (x.readyState == XMLHttpRequest.DONE && x.status == 200) {
            resolve(JSON.parse(x.responseText))
         }
         else if (x.status != 200) {
            reject(new Error('status is not 200'))
         }
      }
   });
}

jsonPost("http://students.a-level.com.ua:10012", { func: 'getMessages' })
   .then(({ data, nextMessageId }) => {
      const wrapper = document.querySelector('.wrapper');
      document.body.style.backgroundColor = 'deepskyblue';

      console.log(data);
      console.log(nextMessageId);
      for (let [key, value] of Object.entries(data)) {
         let elem = document.createElement('p');
         elem.innerText = `${value.nick} --- ${value.message}`;
         wrapper.appendChild(elem);
      }
   });