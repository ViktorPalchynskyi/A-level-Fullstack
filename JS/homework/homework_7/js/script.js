let btn = document.querySelector('#send'),
   nick = document.querySelector('#nick'),
   message = document.querySelector('#msg'),
   messageId;

async function jsonPost(url, data) {
   let request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
   });
   if(request.ok){
       let json = await request.json();
       return json;
   } else {
       alert(new Error('status is not 200'));
   }
}

jsonPost("http://students.a-level.com.ua:10012", { func: 'getMessages', messageId })
   .then(({ data, nextMessageId }) => {
      const wrapper = document.querySelector('.wrapper');
      document.body.style.backgroundColor = 'deepskyblue';


      console.log(data);
      console.log(nextMessageId);
      messageId = nextMessageId;
      for (let {nick, message} of data) {
         let elem = document.createElement('div');
         elem.innerText = `${nick} --- ${message}`;
         wrapper.prepend(elem);
      }
   });


const update = () => {
   setInterval(() => {
      jsonPost("http://students.a-level.com.ua:10012", { func: 'getMessages', messageId })
         .then(({ data, nextMessageId }) => {
            const wrapper = document.querySelector('.wrapper');
            document.body.style.backgroundColor = 'deepskyblue';

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
      jsonPost("http://students.a-level.com.ua:10012", { func: 'addMessage', nick: nick.value, message: message.value })
   }
   nick.value = '';
   message.value = '';
});

update();