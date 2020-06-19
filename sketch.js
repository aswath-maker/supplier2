var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side,side1,side2,world;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
    world = engine.world;
	
	side1 = createSprite(320,610,20,100);	
	side = createSprite(400,650,150,20);
	side2 = createSprite(470,610,20,100);	


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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	side = Bodies.rectangle(400,650,150,20,{isStatic:true,restitution:0.5})
	World.add(world, side);
	
	side1 = Bodies.rectangle(30,610,20,100,{isStatic:true,restitution:0.5})
	World.add(world, side1);
	
	side2 = Bodies.rectangle(470,610,20,100,{isStatic:true,restitution:0.5})
	World.add(world, side2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:0.5} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
 

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	side.y = side.position.y
	side.x = side.position.x	 

	side1.y = side1.position.y
	side1.x = side1.position.x	 

	side2.y = side2.position.y
	side2.x = side2.position.x	 

	console.log(side);
	
	
   
	
	Engine.update(engine);
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



