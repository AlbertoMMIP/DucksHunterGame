class Ducks extends Element {
  constructor(x,y,width,height,ctx, src,team){  
    super(x,y,width,height,ctx,src);
    this.team = team;
    this.vx = 5;
    this.vy = 2;
    this.live = 1;
  }
  collision(item){
    return (this.x < item.x + item.width) &&
    (this.x + this.width > item.x) &&
    (this.y < item.y + item.height) &&
    (this.y + this.height > item.y);
  }

}