
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//creating bobDiameter and distance 
var bobDiameter=70;
var distance = 400;

function setup() {
  createCanvas(800, 630);
  
	engine = Engine.create();
  world = engine.world; 

  roof1 = new Roof(width/2,100,500,50)
  
  //bob-3
	bob1 = new Bob(width/2,distance,bobDiameter/2)
  rope1= new Rope (bob1.body,roof1.body,-bobDiameter*2+140,0)
  
  //bob-2
  bob2 = new Bob(width/2-bobDiameter-10,distance,bobDiameter/2) 
  rope2= new Rope (bob2.body,roof1.body,2-bobDiameter*2+55,0)
  
  //bob-4
  bob3 = new Bob(width/2+bobDiameter+10,distance,bobDiameter/2) 
  rope3= new Rope (bob3.body,roof1.body,-bobDiameter*0.1+90,0)
  
  //bob-1
  bob4 = new Bob(width/2-bobDiameter*2-20,distance,bobDiameter/2) 
  rope4= new Rope (bob4.body,roof1.body,-bobDiameter*2-20,0)
  
  //bob-5
  bob5 = new Bob(width/2+bobDiameter*2+20,distance,bobDiameter/2) 
  rope5= new Rope (bob5.body,roof1.body,bobDiameter*2+20,0) 

}

function draw() {
  rectMode(CENTER);
  background("yellow");
  
//for displaying object

  roof1.display();
  
  bob1.display();
  rope1.display();
  
  bob2.display();
  rope2.display();
  
  bob3.display();
  rope3.display();
  
  bob4.display();
  rope4.display();
  
  bob5.display();
  rope5.display();
  
  drawSprites();
}
function keyPressed(){

  if(keyCode === LEFT_ARROW){
  Matter.Body.applyForce(bob5.body,bob5.body.position , {x:10,y:-10});
  
 }
}