class Element{
  constructor(x,y,width,height,src,ctx){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.src = src;
    this.ctx = ctx;
    this.vx = 5;
    this.vy = 2;
  }
  draw(){        
    var img = new Image(); 
    img.onload = () => {
      this.ctx.drawImage(img,this.x,this.y,this.width,this.height);
      this.ctx.drawImage(img,this.x,this.y,this.width,this.height);
    }    
    img.src = this.src;
  }  
  
}