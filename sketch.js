
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
rope1=new rope(bodyObject1.body,roofObject.body,-bobDiameter*2,0);
rope2=new rope(bodyObject1.body,roofObject.body,-bodDiameter*3,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  

rope1.display();
rope2.display();


  drawSprites();
 
}



