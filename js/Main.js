var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var frames = 0;
var ducks = [];
var interval;
var time = 60,timeRest=0,scoreA=0,scoreB=0;
var fondo = new Element(0,0,canvas.width,canvas.height,ctx,"./images/backGroundC.png");
var playerA = new Element(400,300,50,50,ctx,"./images/arma.png");
var playerB = new Element(800,300,50,50,ctx,"./images/armaB.png");
var gunA = new Weapon(playerA.x,playerA.y,50,30,ctx,"./images/duckB_8.png");
var gunB = new Weapon(playerB.x,playerB.y,50,30,ctx,"./images/duckA_8.png");
var duckScoreA = new Ducks(30,25,70,50,ctx,"./images/duckA_0.png","a");
var duckScoreB = new Ducks(canvas.width-90,25,70,50,ctx,"./images/duckB_4.png","b");
start();

