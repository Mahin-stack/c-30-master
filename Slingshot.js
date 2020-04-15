class SlingShot{
    constructor(bodyA,pointB){
     var options =    {
   bodyA:bodyA,
   pointB:pointB,
   stiffness:0.04,
   length:10
     }
     this.sling1 = loadImage("sling1.png");
     this.sling2 = loadImage("sling2.png");
     
     this.pointB = pointB;
     this.sling = Constraint.create(options)
     World.add(world,this.sling)
    } 
   fly(){
   this.sling.bodyA = null;
  }

  attach(body){
   this.sling.bodyA = body   
  }

display() {

    image(this.sling1,170,400);
    image(this.sling2,150,400);

 if(this.sling.bodyA){ 
var pointA = this.sling.bodyA.position;
var pointB = this.pointB

strokeWeight(6);
line(pointA.x,pointA.y,pointB.x,pointB.y);
 }
}
}