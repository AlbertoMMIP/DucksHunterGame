function generateDucks(){
  if(!(frames % 150 === 0 || frames === 1)) return;
  if(ducks.length >= 10) return;

  var duckTeam1 = new Ducks(xA,y,70,50,ctx,"./images/duckA_1.png","a");
  ducks.push(duckTeam1);

  var duckTeam2 = new Ducks(xB-70,y,70,50,ctx,"./images/duckB_5.png","b");
  ducks.push(duckTeam2);  
}

function drawDucks(){
  ducks.forEach((duck)=>{     
    duck.y += duck.vy;
    if ((duck.y + duck.vy > canvas.height-300 || duck.y + duck.vy < 0) && duck.live === 1) {
      duck.vy *= -1;
    } 
    if(duck.team === 'a' && duck.live === 1){
      duck.x += duck.vx;      
      if (duck.x + duck.vx > canvas.width - duck.width || duck.x + duck.vx < 0) {
        duck.vx *= -1;
        if(duck.image.src !== "./images/duckA_5.png")  duck.image.src = "./images/duckA_5.png";
        else duck.image.src = "./images/duckA_1.png";
      }  
      if(duckDiedB.collision(duck)){
        duck.live = 0;
        duck.image = duckDiedB.image;
      } 
    }else if(duck.team === 'b' && duck.live === 1){
      duck.x -= duck.vx;            
      if (duck.x - duck.vx > canvas.width - duck.width || duck.x - duck.vx < 0) {
        duck.vx *= -1;
        if(duck.image.src !== "./images/duckB_1.png")  duck.image.src = "./images/duckB_1.png";
        else duck.image.src = "./images/duckB_5.png";        
      }  
      if(duckDiedA.collision(duck)) {
        duck.live = 0;
        duck.image = duckDiedA.image;
      } 
    }      
    duck.draw();    

  });
}
addEventListener("keydown",function(e){
  var tecla = e.keyCode;
  console.log(tecla);
  switch(tecla){
    case 37:
      if(playerB.x - playerB.width < 0) playerB.x = playerB.width;
      else playerB.x -= 50;
      break;
    case 39:
      if(playerB.x + playerB.width >= canvas.width) playerB.x = canvas.width - playerB.width;
      else playerB.x += 50;
      break;
    case 38:
      if(playerB.y - playerB.height < 0) playerB.y = playerB.height;
      else playerB.y -= 50;
      break;
    case 40:
      if(playerB.y + playerB.height >= canvas.height) playerB.y = canvas.height - playerB.height;
      else playerB.y += 50;
      break;
    case 65:
      if(playerA.x - playerA.width < 0) playerA.x = playerA.width;
      else playerA.x -= 50;
      break;
    case 68:
      if(playerA.x + playerA.width >= canvas.width) playerA.x = canvas.width - playerA.width;
      else playerA.x += 50;
      break;
    case 87:
      if(playerA.y - playerA.height < 0) playerA.y = playerA.height;
      else playerA.y -= 50;
      break;
    case 83:
      if(playerA.y + playerA.height >= canvas.height) playerA.y = canvas.height - playerA.height;
      else playerA.y += 50;
      break;
    case 81:
      duckDiedA.x = playerA.x;
      duckDiedA.y = playerA.y;      
      duckDiedA.draw();
      break;
    default:
      break;
  }
});