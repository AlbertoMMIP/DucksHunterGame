var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var fondo = new Background(canvas.width,canvas.height,ctx);
fondo.draw();