var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var frames = 0;
var ducks = [];
var interval;
var xA = 0;
var yA = 200;
var xB = canvas.width;
var yB = 200;
var fondo = new Element(0,0,canvas.width,canvas.height,ctx,"./images/backGroundC.png","a");

function start(){
  interval = setInterval(update,1000/40);
}

function update(){  
  frames ++;
  ctx.clearRect(0,0,canvas.width,canvas.height);  
  fondo.draw();
  generateDucks();
  drawDucks();  
}

function generateDucks(){
  if(!(frames % 150 === 0 || frames === 1)) return;
  if(ducks.length >= 10) return;

  var duckTeam1 = new Element(xA,yA,70,50,ctx,"./images/duckA_1.png","a");
  ducks.push(duckTeam1);

  var duckTeam2 = new Element(xB-70,yB,70,50,ctx,"./images/duckB_5.png","b");
  ducks.push(duckTeam2);  
}

function drawDucks(){
  ducks.forEach((duck, index)=>{     
    duck.y += duck.vy;
    if (duck.y + duck.vy > canvas.height-300 || duck.y + duck.vy < 0) {
      duck.vy *= -1;
    } 
    if(duck.team === 'a'){
      duck.x += duck.vx;      
      if (duck.x + duck.vx > canvas.width - duck.width || duck.x + duck.vx < 0) {
        duck.vx *= -1;
        if(duck.image.src !== "./images/duckA_5.png")  duck.image.src = "./images/duckA_5.png";
        else duck.image.src = "./images/duckA_1.png";
      }  
    }else{
      duck.x -= duck.vx;            
      if (duck.x - duck.vx > canvas.width - duck.width || duck.x - duck.vx < 0) {
        duck.vx *= -1;
        if(duck.image.src !== "./images/duckB_1.png")  duck.image.src = "./images/duckB_1.png";
        else duck.image.src = "./images/duckB_5.png";        
      }  
    }      
    duck.draw();          
  });
}

start();