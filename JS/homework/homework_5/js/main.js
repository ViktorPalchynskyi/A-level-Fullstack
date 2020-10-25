
//Task1
{ 
   const dartsArea = document.querySelector('.darts'),
      score = document.querySelector('.score'),
      output = document.querySelector('.output');

let points = 0;

const buttomClicker = (e)=> { 
   let target = e.target;

   if(target.classList.contains('red')) { 
      points += 10;
   }else if (target.classList.contains('blue')) {
      points += 8;
   }else if (target.classList.contains('yellow')) { 
      points += 5;
   }else if (target.classList.contains('green')) { 
      points += 2;
   }
   }; 

function updateScore() {
   return setInterval(()=> score.innerText = `Youre score is ${points} points`,0);
}


function startGame(time = 30) {  

   dartsArea.addEventListener('click', buttomClicker);
   updateScore();
   setInterval(()=> { 
      if(time != 0){ 
         time--;
         } else { 
            score.classList.remove('active');
            output.classList.add('active');
            dartsArea.removeEventListener('click',buttomClicker);
            return output.innerText = `Game over! Youre score is ${points}`;

         }
   }, 1000);

}

startGame();
}

//Task 2
// {
//    function makeProfileTimer(){ 
//       return () => { 
//          let timer = performance.now();
//          timer = performance.now() - timer;
//          return timer;
//       };
//    }

//    let timer = makeProfileTimer();
//    alert('Замеряем время работы этого alert');  
//    alert(timer());
// }

//Task 3
{ 
   let invoke = selfInvoke();

   function selfInvoke() {
      let numberOfTicks=5;
      
      return  ()=> { 
         if(numberOfTicks > 0){ 
            console.log(numberOfTicks--);
            setTimeout(invoke, 1000);
         } else{ 
            console.log(`'GO!'`);
         }
      };
   }

   invoke();
}

//Task 4

{ 
   function myBind(func, context, ...args) {
      return (...rest) => func.call(context, ...args.concat(...rest));
   }
}