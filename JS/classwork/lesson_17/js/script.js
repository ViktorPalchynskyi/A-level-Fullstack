var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const fillColor = document.querySelector('#fill_color');
const strokeColor = document.querySelector('#stroke_color');
const strokeRadius = document.querySelector('#radius');

let radius = 10;
ctx.lineWidth = 3;

strokeRadius.addEventListener('change', () => {
   radius = +strokeRadius.value;
});

fillColor.addEventListener('change', () => {

   ctx.fillStyle = fillColor.value;
});

strokeColor.addEventListener('change', () => {
   ctx.strokeStyle = strokeColor.value;
});


canvas.style.backgroundColor = 'coral';
canvas.style.display = 'block';
canvas.style.margin = '20px auto';



canvas.addEventListener('click', (e) => {
   let clientX = e.layerX;
   let clientY = e.layerY;

   ctx.beginPath();
   ctx.arc(clientX, clientY, radius, 0, 2 * Math.PI);
   ctx.fill();
   ctx.stroke();
});

