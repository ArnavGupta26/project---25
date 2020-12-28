
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3, Dustbinimg, Paperimg;


function preload() {
	Dustbinimg = loadImage('dustbingreen (1).png');
	Paperimg = loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(210, 340, 50);
	ground = new Ground(650, 590, 1500, 20);
	dustbin1 = new Dustbin(900, 570, 250, 20);
	dustbin2 = new Dustbin(783, 450, 20, 260);
	dustbin3 = new Dustbin(1020, 450, 20, 260);

	Engine.run(engine);

}

function draw() {
	Engine.update(engine);

	background('white');

	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();

	image(Dustbinimg, 755, 200,300,400);


	drawSprites();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 46, y: -47 });
	}
}



