var helicopterIMG, helicopterSprite, packageSprite,packageIMG, box1, box1Body, box2, box2Body, box3, box3Body;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,75);
	groundSprite.shapeColor=color(255);
	groundSprite.shapeColor= "lightgreen";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 20, 20 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	box1Body = Bodies.rectangle(400, 605, 200, 30, {isStatic:true});
	World.add(world, box1Body);

	box1 = createSprite(400, 605, 200, 20);
	box1.shapeColor = "white";
	
	box2Body = Bodies.rectangle(300, 565, 20, 100, {isStatic:true});
	World.add(world, box2Body);

	box2 = createSprite(300, 565, 20, 100);
	box2.shapeColor = "white";
	
	box3Body = Bodies.rectangle(500, 565, 20, 100,  {isStatic:true});
	World.add(world, box3Body);

	box3 = createSprite(500, 565, 20, 100);
    box3.shapeColor = "white";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 75 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
	("Second Version", 400,50);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
  
  box1.x = box1Body.position.x;
  box1.y = box1Body.position.y;

  box2.x = box2Body.position.x;
  box2.y = box2Body.position.y;

  box3.x = box3Body.position.x;
  box3.y = box3Body.position.y;
  drawSprites();

  if(keyDown("down") && packageSprite.y<230){
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);
	helicopterSprite.velocityX= 5;
  }
}


