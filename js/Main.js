var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var frames = 0;
var ducks = [];
var interval;
var xA = 0;
var yA = 200;
var xB = canvas.width;
var yB = 200;
var fondo = new Background(canvas.width,canvas.height,ctx);

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

  let imgA = new Image(); 
  imgA.onload = () => {
    var duckTeam1 = new Element(xA,yA,70,50,ctx,imgA,'a');
    ducks.push(duckTeam1);
  }    
  imgA.src = "./images/duckA_1.png";

  let imgB = new Image(); 
  imgB.onload = () => {
    var duckTeam2 = new Element(xB-70,yB,70,50,ctx,imgB,'b');
    ducks.push(duckTeam2);
  }    
  imgB.src = "./images/duckB_5.png";    
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
        let imgNewA = new Image(); 
        imgNewA.src = "./images/duckA_5.png";
        if(duck.image.src !== imgNewA.src)  duck.image = imgNewA;
        else{
          imgNewA.src = "./images/duckA_1.png";
          duck.image = imgNewA;
        } 
      }  
    }else{
      duck.x -= duck.vx;            
      if (duck.x - duck.vx > canvas.width - duck.width || duck.x - duck.vx < 0) {
        duck.vx *= -1;
        let imgNewA = new Image(); 
        imgNewA.src = "./images/duckB_1.png";
        if(duck.image.src !== imgNewA.src)  duck.image = imgNewA;
        else{
          imgNewA.src = "./images/duckB_5.png";
          duck.image = imgNewA;
        } 
      }  
    }      
    duck.draw();          
  });
}

start();