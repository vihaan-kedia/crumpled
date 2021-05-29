// constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

// global variables
var dustbinObj,groundObject	
var world;
var ball1OBJ;

// function setup
function setup() {
createCanvas(1600, 700);
rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball1OBJ = new Ball(400,650,40)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  ball1OBJ.display();
}

// keypressed
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball1OBJ.body,ball1OBJ.body.position,{x:300,y:-400});
}}


