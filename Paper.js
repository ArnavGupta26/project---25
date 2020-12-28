
class Paper {
	constructor(x, y, radius) {
		var options = {
			isStatic: false,
			restitution: 0.3,
			friction: 0.5,
			density: 1.2


		}
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.body = Bodies.circle(this.x, this.y, (this.radius - 20) / 2, options);
		this.image = loadImage("paper.png");
		World.add(world, this.body);

	}
	display() {

		var pos = this.body.position;

		push()
		translate(pos.x, pos.y);
		imageMode(CENTER);
		strokeWeight(4);
		fill(255);
		
		image(this.image,0,0,this.width,this.height,20,10);
        pop();

	}
}