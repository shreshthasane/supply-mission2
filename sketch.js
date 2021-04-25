var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
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

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	boxP = width/2 - 100;
	boxY = 600
	boxL = createSprite(boxP, boxY,20, 100);
	boxL.shapeColor = color(255,0,0);
	boxLbody = Bodies.rectangle(boxP+20, boxY, 20, 100,{isStatic: true});
	World.add(world, boxLbody);

	boxR = createSprite(boxP+200, boxY,20, 100);
	boxR.shapeColor = color(255,0,0);
	boxRbody = Bodies.rectangle(boxP+180, boxY, 20, 100,{isStatic: true});
	World.add(world, boxRbody);

	boxB = createSprite(boxP+100, boxY+40, 200, 20);
	boxB.shapeColor = color(255,0,0);
	boxBbody = Bodies.rectangle(boxP+100, boxY+25, 200, 20,{isStatic: true});
	World.add(world, boxBbody);
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody, false)
    
  }
}



