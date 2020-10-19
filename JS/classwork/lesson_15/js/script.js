let btn = document.querySelector('#send'),
   nick = document.querySelector('#nick'),
   message = document.querySelector('#msg'),
   messageId;


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

jsonPost("http://students.a-level.com.ua:10012", { func: 'getMessages', messageId })
   .then(({ data, nextMessageId }) => {
      const wrapper = document.querySelector('.wrapper');
      document.body.style.backgroundColor = 'deepskyblue';


      console.log(data);
      console.log(nextMessageId);
      messageId = nextMessageId;
      for (let [key, value] of Object.entries(data)) {
         let elem = document.createElement('div');
         elem.innerText = `${value.nick} --- ${value.message}`;
         wrapper.prepend(elem);
      }
   });


const update = () => {
   setInterval(() => {
      jsonPost("http://students.a-level.com.ua:10012", { func: 'getMessages', messageId })
         .then(({ data, nextMessageId }) => {
            const wrapper = document.querySelector('.wrapper');
            document.body.style.backgroundColor = 'deepskyblue';


            console.log(data);
            console.log(nextMessageId);
            messageId = nextMessageId;
            for (let [key, value] of Object.entries(data)) {
               let elem = document.createElement('div');
               elem.innerText = `${value.nick} --- ${value.message}`;
               wrapper.prepend(elem);
            }
         });
   }, 3 * 1000);
};


btn.addEventListener('click', () => {
   if (nick.value && message.value) {
      jsonPost("http://students.a-level.com.ua:10012", { func: 'addMessage', nick: nick.value, message: message.value });
   }
   nick.value = '';
   message.value = '';
});

update();