
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function setup() {
	createCanvas(800, 600);
  

	engine = Engine.create();
	world = engine.world;
    wall=new ground()
	//Create the Bodies Here.
  b1=new ball(400,490)
  C1=new rope({x:400,y:50},b1.body)
  b2=new ball(330,490)
  C2=new rope({x:330,y:50},b2.body)
  b3=new ball(260,490)
  C3=new rope({x:260,y:50},b3.body)
  b4=new ball(470,490)
  C4=new rope({x:470,y:50},b4.body)
  b5=new ball(540,490)
  C5=new rope({x:540,y:50},b5.body)
 
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  console.log(mouseX,mouseY)
  wall.display()
  b1.display()
  C1.display()
  b2.display()
  C2.display()
  b3.display()
  C3.display()
  b4.display()
  C4.display()
  b5.display()
  C5.display()
  drawSprites();
  UP()
}

function mouseDragged(){
  Matter.Body.setPosition(b5.body,{x:mouseX,y:mouseY})
}
function UP(){
if(keyCode=== UP_ARROW){
  Matter.Body.applyForce(b5.body,b5.body.position,{x:2,y:0})
}}
