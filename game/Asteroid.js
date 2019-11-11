class Asteroid extends Thing {
	constructor(x, y) {
		var x = x || random(width);
		var y = y || -100;
		var size = random(30, 40);
		var speedX = random(-1, 1);
		var speedY = random(0, 2);
		super(x, y, size, speedX, speedY);
	}
	
	display() {
		noFill();
		stroke(100);
		strokeWeight(3);
		ellipse(this.x, this.y, this.size);
	}
}