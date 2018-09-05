class Background{
  constructor(width,height,ctx){
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height; 
    this.ctx = ctx;
  }
  draw(){        
    // this.x --;
    // if(this.x < -this.width) this.x = 0;    
    var img = new Image(); 
    img.onload = () => {
      this.ctx.drawImage(img,this.x,this.y,this.width,this.height);
      //this.ctx.drawImage(img,this.x+this.width,this.y,this.width,this.height);
    }    
    img.src = "./images/backGroundC.png";

  }  
} 
