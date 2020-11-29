const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var a, sound, polygon;
var circles=[];


function preload() {

polygon_img = loadImage("polygon.png");
sound = loadSound("Sound.mp3");
}








function setup() {
  createCanvas(800,800);
  stroke(255)
 






  engine = Engine.create();
	world = engine.world;

  //level 4
  stand = new Ground(540,650,350,20);
  block1 = new Box(420,635,40,40);
  block2 = new Box(460,635,40,40);
  block3 = new Box(500,635,40,40);
  block4 = new Box(540,635,40,40);
  block5 = new Box(580,635,40,40);
  block6 = new Box(620,635,40,40);
  block7 = new Box(660,635,40,40);
  // level 3
  block8 = new Box(460,595,40,40);
  block9 = new Box(500,595,40,40);
  block10 = new Box(540,595,40,40);
  block11 = new Box(580,595,40,40);
  block12 = new Box(620,595,40,40);
  //level 2
  block13 = new Box(500,545,40,40);
  block14 = new Box(540,545,40,40);
  block15 = new Box(580,545,40,40);
  //level 1
  block16 = new Box(540,505,40,40);


//polygon body

var options = {

  density:1,
 
}
  polygon = Bodies.circle(50,500,20,options);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:500});

   
console.log(polygon);

  Engine.run(engine);
}



function draw() {
    background(0);  
  
  // sound effect boom
  if(!sound.isPlaying() && polygon.position.x > 420 && polygon.position.x < 660 && polygon.position.y < 650 && polygon.position.y > 485) {
    sound.play();
    sound.setVolume(0.05);
  }





 stand.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 fill("cyan");
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 fill("yellow");
 block13.display();
 block14.display();
 block15.display();
 fill("white");
 block16.display();
 slingshot.display();

 // polygon image
 imageMode(CENTER);
 image(polygon_img,polygon.position.x,polygon.position.y,40,40);

 //console.log(polygon.position.x);
 
  

 drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});

}

function mouseReleased() {
  slingshot.fly();
  

}

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(this.polygon);

  }

}