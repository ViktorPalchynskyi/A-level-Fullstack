let request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

console.log(request.status);

if (request.status == 200) {
   console.log(request.statusText);
   console.log(request.responseText);
} else {
   console.log('Something goes wrong!');
}

request.send();


const a = 'a';
const b = 'b';
const c = 'c';

console.log(a);

setTimeout(() => console.log(b), 0);

console.log(c);