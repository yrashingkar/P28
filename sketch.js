const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;
var mango1, mango2;
var launchingforce=50;
var tree, stone, ground, launcher;

function preload()
{
	boy=loadImage("Plucking+mongoes/boy.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,700,1600,20);
	tree = new Tree(1200, 470, 500, 500);
	stone = new Stone(235, 425, 30, 30);
	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1170,130,30);
	launcher = new Launcher(stone.body,{x:445,y:575})

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(255);
  image(boy ,200,340,200,300);
  mango1.display();
  ground.display();
  tree.display();
  stone.display();
  launcher.display();

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


