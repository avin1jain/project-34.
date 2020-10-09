
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

var ground
var   box2,  box1, box3, paper1
var engine, world;

function preload()
{


}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	createCanvas(1200, 400);
	rectMode(CENTER);
	
    box1= new Box(660,50,30,30);
    box2= new Box(630,50,30,30);
    box3= new Box(600,50,30,30);
    box4= new Box(570,50,30,30);
    box5= new Box(540,50,30,30);

	
	paper1= new paperball(660,100,30);
	paper2= new paperball(630,100,30);
	paper3= new paperball(600,100,30);
	paper4= new paperball(570,100,30);
	paper5= new paperball(540,100,30);




	 rope=new Rope(paper1.body,box1.body,0,200);
	 rope2=new Rope(paper2.body,box2.body,0,200);
	 rope3=new Rope(paper3.body,box3.body,0,200);
	 rope4=new Rope(paper4.body,box4.body,0,200);
	 rope5=new Rope(paper5.body,box5.body,0,200);


  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background('Gray');
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  rope2.display();
  rope.display();
  rope3.display();
  rope4.display();
  rope5.display();
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper1.body,paper1.body.position ,{ x:100,y:-100})
}
}



