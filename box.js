class Box extends BaseClass{
    constructor(x,y,width,height){
    super(x,y,80,60)
    this.image = loadImage("Untitled.png")
    this.image.scale = 11;
    this.visibility = 255
   
    }
    display(){
        console.log(this.body.speed);  
  if(this.body.speed < 3){
    super.display()  
  }
  else {
  World.remove(world,this.body);
  push()
  this.visibility=this.visibility-5
  tint(255,this.visibility) 
  image(this.image,this.body.position.x,this.body.position.y,80,60)
  pop()
     }

    }
    }
    