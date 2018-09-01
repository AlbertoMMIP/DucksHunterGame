class Background{
  constructor(width,height,ctx){
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = "./images/backGroundB.png";
    this.ctx = ctx;
  }
  draw(){
      this.ctx.fillRect(this.x,this.y,this.width,this.height);      
      this.ctx.drawImage(this.image,this.x,this.y);
    }  
} 
