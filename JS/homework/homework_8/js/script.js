const btn = document.querySelector('.btn');

const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));

async function trafficLight(
   {
      greenClass='.greenlight', 
      yellowClass='.yellowlight', 
      redClass='.redlight',
      greenTime=2000,
      yellowTime=2000,
      redTime=2000
   }){
      
const greenLight = document.querySelector(greenClass),
      yellowLight = document.querySelector(yellowClass),
      redLight = document.querySelector(redClass);



    while (true){
      await Promise.race([domEventPromise(btn, 'click'), delay(greenTime)]);
      redLight.classList.remove('active');
      greenLight.classList.add('active');
      await delay(yellowTime);
      greenLight.classList.remove('active');
      yellowLight.classList.add('active');
      await delay(redTime);
      yellowLight.classList.remove('active');
      redLight.classList.add('active');
    }
}

async function domEventPromise(element , eventName) { 
  
   return await new Promise(resolve =>{ 
      const eventFunc = (eventTarget) => {  
         element.removeEventListener(eventName, eventFunc);
         element.disabled = 'true';
         let btnDelay = async() => { 
            await delay(5000);
            element.removeAttribute('disabled');
         };
         if(element.hasAttribute('disabled')){ 
            btnDelay();
         }
         resolve(eventTarget);
      };
      element.addEventListener(eventName,eventFunc);
   }); 
}


trafficLight({});




   