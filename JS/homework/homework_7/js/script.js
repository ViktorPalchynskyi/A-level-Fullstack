let btn = document.querySelector('#send'),
   nickInp = document.querySelector('#nick'),
   messageInp = document.querySelector('#msg'),
   messageId;

const wrapper = document.querySelector('.wrapper');
document.body.style.backgroundColor = 'deepskyblue';

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


async function sendMessages(nick, message){ 
   this.nick = nickInp.value;
   this.message = messageInp.value;
   try{
      await jsonPost("http://students.a-level.com.ua:10012", {func: 'addMessage', nick:this.nick, message: this.message});
  } catch (err) {
      alert(err);
  }
}

async function getMessages(url) { 
   let {data, nextMessageId } = await jsonPost(url, { func: 'getMessages', messageId});

   
   messageId = nextMessageId;
   for (let {nick, message} of data) {
      let elem = document.createElement('div');
      elem.innerText = `${nick} --- ${message}`;
      wrapper.prepend(elem);
   }
}

async function sendAndCheck() { 
   await sendMessages();
   await getMessages("http://students.a-level.com.ua:10012");
}

async function checkLoop(sec) { 
   while(true){ 
      const delay = (sec) => new Promise(resolve => setTimeout(resolve, sec*1000));
      await delay(sec);
      getMessages("http://students.a-level.com.ua:10012");

   }
}

getMessages("http://students.a-level.com.ua:10012");

btn.addEventListener('click', () => {
   if (nickInp.value && messageInp.value) {
      sendAndCheck();
   }
   nickInp.value = '';
   messageInp.value = '';
});

checkLoop(3);