const firstSome = document.querySelector('.some');
const secondSome = document.querySelector('.some2');
const content = document.querySelector('#content');

firstSome.style.color = 'tomato';
secondSome.style.color = 'deepskyblue';

const newNode = document.createElement('div');

newNode.style.width = '100px';
newNode.style.height = '100px';
newNode.style.backgroundColor = 'coral';

setTimeout(() => {
   content.style.backgroundColor = 'tomato';
   document.body.appendChild(newNode);
}, 5 * 1000);

newNode.innerHTML = 'Bella <strong>ciao<strong>!';