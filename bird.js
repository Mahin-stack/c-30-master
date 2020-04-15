class Bird{
    constructor(x,y){
    var options={
    restitution:0.8,
    friction:1.0,
    density:1.0    
    }   
    this.body = Bodies.circle(100,540,25,options) 
    this.radius = 25;
    World.add(world,this.body)
    }  
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    
    fill("red")
    ellipseMode(RADIUS)
    ellipse(0,0,25)
    pop()
    }
    }