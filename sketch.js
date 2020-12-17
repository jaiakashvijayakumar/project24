
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var box3;
var ground;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(247,90,148)

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);

	box1 = new Box(1000,620,10,70);
	box2 = new Box(1075,640,140,10);
	box3 = new Box (1150,620,10,70);

	paper = new Paper(247,90,10);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 15,
		y: -16
	  });
	}
  
		packageSprite.velocityY=1;
  
	   
	}



