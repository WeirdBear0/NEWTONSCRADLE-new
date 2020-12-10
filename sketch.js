
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}
var rod1;
var ball1, ball2, ball3, ball4, ball5, slingshot;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rod1 = new Rod(400,50,700,30);
	ball1 = new Ball(320,350,50);
	ball2 = new Ball(360,350,50);
	ball3 = new Ball(400,350,50);
	ball4 = new Ball(440,350,50);
	ball5 = new Ball(480,350,50);
	
	slingshot3 = new Slingy(ball3.body,rod1.body,0, 0);
	slingshot1 = new Slingy(ball1.body,rod1.body,-200,0);
	slingshot2 = new Slingy(ball2.body,rod1.body,-100,0);
	slingshot4 = new Slingy(ball4.body,rod1.body,100,0);
	slingshot5 = new Slingy(ball5.body,rod1.body,200,0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rod1.display();

  slingshot3.display();
  slingshot1.display();
  slingshot2.display();
  slingshot4.display();
  slingshot5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body, ball5.body.position,{x:750, y:-750});
		console.log("eafgsafa");
	}
}
