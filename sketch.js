const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box;
var slingShot;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(440,240,270,20,ground_options);
    World.add(world,ground);

   var base_options={
       isStatic : true
   }

   base = Bodies.rectangle(440,490,270,20,base_options);
   World.add(world,base);

   din = new Din(300,580,600,20);
   din2 = new Din(280,475,20,200);
   din3 = new Din(280,175,20,200);
   din4 = new Din(580,300,20,600);
   din5 = new Din(20,300,20,600);
   din6 = new Din(300,20,600,20);
   box1 = new Box(350,220);
   max1 = new Max(430,220,80,60);
   box2 = new Box(510,220);
   max2 = new Max(395,140,80,60);
   box3 = new Box(475,140);
   max3 = new Max(435,60,80,60);
   max4 = new Max(350,470,80,60);
   box4 = new Box(430,470);
   max5 = new Max(510,470,80,60);
   box5 = new Box(395,390);
   max6 = new Max(475,390,80,60);
   box6 = new Box(435,300);
   bird = new Bird(100,450);
   slingshot = new SlingShot(bird.body,{x:200, y:450});

}

function draw(){
    background("yellow");
    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,270,20);

    rectMode(CENTER);
    rect(base.position.x,base.position.y,270,20);

    bird.display();
    din.display(); 
    din2.display();
    din3.display();
    din4.display();
    din5.display();
    din6.display();
    box1.display();
    max1.display();
    box2.display();
    max2.display();
    box3.display();
    max3.display();
    max4.display();
    box4.display();
    max5.display();
    box5.display();
    max6.display();
    box6.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
 slingshot.attach(bird.body)   
}