
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy;
var chain, mango1;

function preload(){
	boy = loadImage("Plucking+mangoes")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//mango1 = new Mango(700,600);

	//chain = new Chain(stone.body,boy.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  //mango1.display();

  drawSprites();
 
}

function detectcollision(Lstone,Lmango){
	mangoBodyPosition=lmango.body.potition
	stoneBodyPosition=lstone.body.potition

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPotion.y)
	if(distance<-Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false);
	}
}