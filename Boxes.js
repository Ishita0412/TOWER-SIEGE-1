class Boxes{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
   
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(this.x,this.y,this.w,rect.h,options);
World.add(world,this.body);

 }

 display() { 
     var BPos=this.body.position; 
     push();
     translate(BPos.x, BPos.y);
     fill("black") ;
      recteMode(CENTER); 
      pop() ;
 }