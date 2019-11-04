function setup() {
	createCanvas(640, 360);
	drawCharacters();
}

function mouseClicked() {
	drawCharacters();
}

function drawCharacters() {
	background('yellow');
	
	for (let x = 0; x < width; x += 100) {
		
		var r = random(250);
		var g = random(70);
		var b = random(0);
		
		var s = random(60, 60); // size 
		var y = random(height/20, height * 2/3);
		
		fill(r, g, b);
         
        
		rect(x, y, 90,90,20); // face
		
       
        
//        rect(x + s/8, y - 50, s, s/2); // left eye
//        
        
        
		rect(x + s/2, y - 30, s, s/6); // right eye brow
		rect(x - s/2, y - 30, s, s/6); // left eye brow
        
        fill('white')
    ellipse(x + 41/2, y + s/50, 50, 30);
    fill('#16A806')
    ellipse(x + s/2, y + s/50, 20, 15);
    fill("black")
    ellipse(x + s/2, y + s/60, 10, 10);
    fill("white")
    ellipse(x + s/2, y + s/100, 4, 4);// Eye
        
        rect(x, y + 40, 50,30,50); // mouth
	}
}







