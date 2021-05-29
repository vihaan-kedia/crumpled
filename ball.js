class  Ball{

    constructor(x,y,r){
      var options={
       resitution:0,
       isStatic:false,
       friction:8,
       density:1.3
      }
      this.image=loadImage("paper.png")
      this.r=r
      this.body = Bodies.circle(x,y,this.r,options);
    World.add(world,this.body)
    }
  
  
     display(){
     var position = this.body.position
     push()
     translate(position.x,position.y);
     fill(0, 0,0);
     strokeWeight(1);
     ellipseMode(RADIUS);
     ellipse(0,0,this.r,this.r);
    pop()
     }
  
  }
  
  
  