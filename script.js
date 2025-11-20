// === LOADING SCREEN ===
const terminalLines = [
  "Booting up...",
  "Initializing hardware...",
  "Loading modules...",
  "Starting services...",
  "Welcome to Mostafa Osama's Portfolio"
];
const terminalEl = document.getElementById('terminal-text');
let lineIndex=0;

function showNextLine(){
  if(lineIndex>=terminalLines.length){
    document.getElementById('loading-screen').style.display='none';
    return;
  }
  let line = terminalLines[lineIndex];
  let i=0;
  const typeInterval = setInterval(()=>{
    terminalEl.textContent+=line[i]; i++;
    if(i>=line.length){
      clearInterval(typeInterval);
      terminalEl.textContent+="\n";
      lineIndex++;
      setTimeout(showNextLine,300);
    }
  },40);
}
window.addEventListener('load', showNextLine);

// === MATRIX RAIN ===
function startMatrix(){
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$%&*";
  const fontSize=16;
  const columns=Math.floor(canvas.width/fontSize);
  const drops = Array(columns).fill(1);

  function draw(){
    ctx.fillStyle="rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#0F0"; ctx.font=fontSize+"px monospace";
    drops.forEach((y,x)=>{
      const text = letters[Math.floor(Math.random()*letters.length)];
      ctx.fillText(text,x*fontSize,y*fontSize);
      drops[x] = y*fontSize>canvas.height && Math.random()>0.975 ? 0 : y+1;
    });
  }
  setInterval(draw,35);
}
document.addEventListener('keydown',e=>{
  if(e.key.toLowerCase()==='m'){
    document.body.classList.toggle('matrix-mode');
    document.getElementById('matrix-canvas').style.display = document.body.classList.contains('matrix-mode') ? 'block':'none';
    if(document.body.classList.contains('matrix-mode')) startMatrix();
  }
});

// === TYPED TEXT HEADER ===
const messages = ["Back-End Developer","C# | .NET","AI Student"];
let mIndex=0,cIndex=0;
const typedEl = document.getElementById('typed-text');

function typeMessage(){
  typedEl.textContent=messages[mIndex].slice(0,cIndex);
  cIndex++;
  if(cIndex>messages[mIndex].length){
    cIndex=0; mIndex=(mIndex+1)%messages.length;
    setTimeout(typeMessage,1500);
  } else setTimeout(typeMessage,100);
}
window.addEventListener('load', typeMessage);

// === SNAKE GAME ===
// const canvas = document.getElementById("snake-game");
// const ctx = canvas.getContext("2d");
// const box=20;
// let snake=[{x:9*box,y:10*box}], dir="RIGHT";
// let food={x:Math.floor(Math.random()*20)*box, y:Math.floor(Math.random()*20)*box};
// document.addEventListener("keydown", e=>{
//   if(e.key==="ArrowUp"&&dir!=="DOWN") dir="UP";
//   if(e.key==="ArrowDown"&&dir!=="UP") dir="DOWN";
//   if(e.key==="ArrowLeft"&&dir!=="RIGHT") dir="LEFT";
//   if(e.key==="ArrowRight"&&dir!=="LEFT") dir="RIGHT";
// });
// function drawSnake(){
//   ctx.fillStyle="#0f0"; snake.forEach(seg=>ctx.fillRect(seg.x,seg.y,box,box));
//   ctx.fillStyle="#f00"; ctx.fillRect(food.x,food.y,box,box);
// }
// function updateSnake(){
//   let head={...snake[0]};
//   if(dir==="LEFT") head.x-=box;
//   if(dir==="RIGHT") head.x+=box;
//   if(dir==="UP") head.y-=box;
//   if(dir==="DOWN") head.y+=box;
//   head.x=(head.x+canvas.width)%canvas.width;
//   head.y=(head.y+canvas.height)%canvas.height;
//   if(head.x===food.x && head.y===food.y) food={x:Math.floor(Math.random()*20)*box, y:Math.floor(Math.random()*20)*box};
//   else snake.pop();
//   if(snake.some(seg=>seg.x===head.x && seg.y===head.y)){
//     alert("Game Over! Refresh to play again.");
//     snake=[{x:9*box,y:10*box}]; dir="RIGHT";
//   }
//   snake.unshift(head);
// }
// setInterval(()=>{ctx.clearRect(0,0,canvas.width,canvas.height); drawSnake(); updateSnake();},100);
