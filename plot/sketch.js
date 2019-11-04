/*
	plot sketch
	9.23.2019
*/

/*
	three scenes: 
	city, forest, ocean
*/
var scene = "city";

function setup() {
	createCanvas(windowWidth, 600);
	//	scene = random(["city", "forest", "ocean"]);}
}

function mousePressed() {
	if (scene == "city") {
		scene = "forest";
	} else if (scene == "forest") {
		scene = "ocean";
	} else if (scene == "ocean") {
		scene = "city";
	}
}

function draw() {
	// set the setting
	if (scene == "city") {
		city();
		jenny(200, 400, 150, 'blue', '"Whats the name of this club?!"');
		jerry(700, 300, 200, 'yellow', '"Yea... wait what?."');
		narration("Pac-Man lost storys");
	} else if (scene == "forest") {
		forest();
		jenny(100, 200, 100, 'blue', '"what!?"');
		jerry(400, 200, 200, 'yellow', '"This is so Cool!."');
		narration("Went to the Club couldnt hear a thing.");
	} else if (scene == "ocean") {
		ocean();
		jenny(400, 100, 200, 'blue', '"want to go."');
		jerry(700, 100, 200, 'yellow', '"Finally."');
		narration("Fin!.");
	}

	/* instructions */
	textSize(20);
	text("Click to go to the next scene", width - 100, 10, 100, 100);
}

function narration(story) {
	textAlign(CENTER);
	text(story, width / 4, height - 100, width / 2, 200);
}

function jenny(x, y, size, col, greeting) {

	var eyeSize = size / 10;
	var eyeOffset = size / 4;

	fill(col);
	ellipse(x, y, size); // face
	fill('black');
	stroke('white');
	strokeWeight(4);
	rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize); // left eye
	rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize); // right eye

	textSize(40);
	fill('white');
	noStroke();
	text(greeting, x + 100, y - 50);
}

function jerry(x, y, size, col, greeting) {
	fill(col);
	stroke('white');
	// face
	arc(x, y, size, size, PI, HALF_PI + QUARTER_PI, PIE);
	// left eye
	fill('black');
	triangle(
		x - 50, y - 75,
		x, y - 50,
		x - 50, y - 25
	);

//	// right eye
//	quad(
//		x + 30, y - 75,
//		x + 25, y - 25,
//		x + 75, y - 50,
//		x + 75, y - 60,
//	);

	fill('white');
	noStroke();
	text(greeting, x - 200, y + 150);
}

function city() {
	background('green');
	fill('red');
	for (let x = 10; x < width; x += 100) {
			rect(x, 100 + random(200), 60, height - 400);
	}
}

function forest() {
	background("orange");

	fill('green');
	noStroke();

	for (let x = 30; x < width; x += 80) {
			triangle(
				x, 200 + random(300),
				x + 150, 600,
				x - 150, 600
			);	
		}
		fill('red');
		circle(width - 200, 100, 100);
    
}

function ocean() {
	background("purple");
	fill('yellow');
	rect(0, height/2, width, height);

	stroke('red');
	for (let x = 60; x < width; x += 200) {
			let y = random(height);
			noFill();
			beginShape();
			curveVertex(x - 200, y + 100);
			curveVertex(x, y);
			curveVertex(x + 100, y);
			curveVertex(x + 100, y + 80);
			curveVertex(x, y);
			curveVertex(x - 10, y);
			endShape();
			
			ellipse(x + 100, y, 20);
			fill('yellow');
			ellipse(x + 100, y, 10);
	}
}




