class Background{
  constructor(width,height,ctx){
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height; 
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./images/backGroundC.png";
  }
  draw(){        
    this.ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
  }  
} 

