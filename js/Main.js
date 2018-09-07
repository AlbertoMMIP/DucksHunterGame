var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var frames = 0;
var ducks = [];
var interval;
var xA = 0;
var y = 200;
var xB = canvas.width;
var fondo = new Element(0,0,canvas.width,canvas.height,ctx,"./images/backGroundC.png");
var playerA = new Element(400,300,50,50,ctx,"./images/arma.png");
var playerB = new Element(800,300,50,50,ctx,"./images/armaB.png");
var duckDiedA = new Ducks(xA,y,70,50,ctx,"./images/duckA_8.png","a");
var duckDiedB = new Ducks(xA,y,70,50,ctx,"./images/duckB_8.png","b");
function start(){
  interval = setInterval(update,1000/40);
}

function update(){  
  frames ++;
  ctx.clearRect(0,0,canvas.width,canvas.height);  
  fondo.draw();
  playerA.draw();
  playerB.draw();
  generateDucks();
  drawDucks();  
}


start();

