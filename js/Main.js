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
var duckScoreA = new Ducks(40,25,50,30,ctx,"./images/duckA_0.png","a");
var duckScoreB = new Ducks(canvas.width-80,25,50,30,ctx,"./images/duckB_4.png","b");
var duckWinA = new Ducks(900,200,70,100,ctx,"./images/duckA_7.png","a");
var duckWinB = new Ducks(300,200,70,100,ctx,"./images/duckB_2.png","b");
var sonido = new Audio();
sonido.src = "./sound/shoot.mp3";
var sonidoStart = new Audio();
sonidoStart.src = "./sound/start.mp3";
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems);
});

var btnStart = document.getElementById("btnPlay");
btnStart.addEventListener("click",function(){
  document.getElementById("board").style.visibility = "visible"; 
  start();
}); 