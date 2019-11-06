var sizes = [70, 80, 60, 70, 90, 70];
var position = [0, 10, -10, 20, -20, 0];
var speed = [6, 3, 5, 2, 4, 3];
var r = [40,50,30,80,20,80];

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(1);
	noStroke();
	
	for (let i = 0; i < sizes.length; i++) {
		ghost(60 + i * 100, position[i], sizes[i], r[i]);
		
		position[i] += speed[i];
        r[i] += random(-10,10);
	}
    
}
    

    function ghost(x, y, s,r) {
        
        fill(r,100,250,300);
        rect(x - 20, y + 50 - s + 50, s / 2, s - 25); // head

        rect(x - 15, y + 55 - s + 55, s / 2, s - 15); // head
        
        fill(r,100,200,300,50);
        ellipse(x, y + 40, s, s - 25); // low body
        ellipse(x, y + 20, s, s - 10); 
        fill('black');
        ellipse(x - 10, y + 10, 10); // left eye
        ellipse(x + 10, y + 10, 10); // right eye



       
    }
