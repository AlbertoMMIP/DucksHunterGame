var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var frames = 0;
var ducks = [];
var interval;
var x = 0;
var y = 200;
var fondo = new Background(canvas.width,canvas.height,ctx);

function start(){
  interval = setInterval(update,1000/60);
}

function update(){  
  frames ++;
  ctx.clearRect(0,0,canvas.width,canvas.height);  
  fondo.draw();
  generateDucks();
  drawDucks();
}

function generateDucks(){
  if(!(frames % 150 === 0)) return;
  var imgSrcA = "./images/duckA_0.png";
  var duckTeam1 = new Element(x,y,70,50,imgSrcA,ctx);
  var imgSrcB = "./images/duckB_1.png";
  var duckTeam2 = new Element(x+50,y+50,70,50,imgSrcB,ctx);
  ducks.push(duckTeam1);
  ducks.push(duckTeam2);
}

function drawDucks(){
  ducks.forEach((duck, index)=>{       
    duck.draw();   
    duck.x += duck.vx;
    duck.y += duck.vy;
    if (duck.y + duck.vy > canvas.height-200 || duck.y + duck.vy < 0) {
      duck.vy *= -1;
    }
    if (duck.x + duck.vx > canvas.width - duck.width || duck.x + duck.vx < 0) {
      duck.vx *= -1;
    }  
  });
}

start();