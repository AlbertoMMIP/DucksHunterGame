class Element{
  constructor(x,y,width,height,ctx, image,team){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.vx = 3;
    this.vy = 1;
    this.image = image;
    this.team = team;
  }
  draw(){        
    this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);    
  }  
  
}