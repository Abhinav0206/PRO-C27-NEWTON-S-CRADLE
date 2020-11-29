const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
var chain;
var engine, world;

function preload() {

}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create(); 
	world = engine.world;

	roof=new Roof(width/2,height/4,width/2,20);
	
	bobDiameter=85;

	bob1 = new Bob(200, 550, 90, 90)
	bob2 = new Bob(290, 550, 90, 90)
	bob3 = new Bob(380, 550, 90, 90)
	bob4 = new Bob(470, 550, 90, 90)
	bob5 = new Bob(560, 550, 90, 90)

	rope1 = new Rope(bob1.body, roof.body, -bobDiameter *2, 0)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter * 1, 0)
	rope3 = new Rope(bob3.body, roof.body,0, 0)
	rope4 = new Rope(bob4.body, roof.body, -bobDiameter *-1, 0)
	rope5 = new Rope(bob5.body, roof.body, -bobDiameter * -2, 0)

		var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });


	Engine.run(engine);
	Render.run(render);

}


function draw() {
	rectMode(CENTER);
	background(100); 
	Engine.update(engine);

	roof.display();
	

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


	//drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(bob1.body, bob1.body.position, { x: -500, y: -45 });

	}

}

