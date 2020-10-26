//Task1
function getData() { 
   const getRequest = new XMLHttpRequest();

getRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts');
getRequest.send();

getRequest.onreadystatechange = () => { 
   if(getRequest.readyState === 4 && getRequest.status === 200) { 
      let data = JSON.parse(getRequest.responseText);
      for(let {id, title} of data){ 
         let post = document.createElement('div');
         post.classList.add('output');
         post.innerText = `User id is ${id} and title is ${title}`;
         document.body.append(post);
      }  
   } else if(getRequest.status !=200){  
      throw new Error('status is not 200');
   }
   };
 }

 //Task2
function postData() { 
   const postRequest = new XMLHttpRequest();

postRequest.open('POST', 'https://jsonplaceholder.typicode.com/posts');
postRequest.setRequestHeader('Content-Type', 'application/json');

const viktorUser = JSON.stringify({
   title: 'This post request have made by Viktor',
   userId:1
});


postRequest.send(viktorUser);

postRequest.onload = () => { 
   if(postRequest.status != 201) { 
      throw new Error('status is not 201');
   } else { 
      console.log(postRequest.response);
   }
};
}

//Task3
function putData() { 
   
const putRequest = new XMLHttpRequest();

putRequest.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1');
putRequest.setRequestHeader('Content-Type', 'application/json');

const update = JSON.stringify({
  id: 1,
  title: 'It is put request',
  body: 'Made by Viktor',
  userId: 1,
});

putRequest.send(update);
putRequest.onload = () => {
  if (putRequest.status != 200) {
   throw new Error('status is not 200');
  } else {
    console.log(putRequest.response);
  }
};
}

//Task4
function deleteData () { 
   let deletedRequest = new XMLHttpRequest();
deletedRequest.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');

deletedRequest.send();

deletedRequest.onload =  () => {
  if (deletedRequest.status != 200) {
   throw new Error('status is not 200');
  } else {
    console.log(`OK`);
  }
};
}

//Task5
let flag = true;

document.querySelector('.getData').addEventListener('click', ()=> { 
   if(flag){ 
      getData();
      flag = false;
   } else { 
      console.log('It is not time yet!');
      setTimeout(()=> { 
         flag = true;
      }, 3 * 1000);
   }
});
postData();
putData();
deleteData();