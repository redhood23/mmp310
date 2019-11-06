/*
	interface
	user interface
	10.20.2019
*/
var r = 0;
var g = 0;
var b = 0;
var num = 50;
var nameInput;

function setup() {
	createCanvas(windowWidth, 600);
	pattern();
	
	var button = createButton("change back");
	button.mouseClicked(pattern);
	
	nameInput = createInput("Name the file");
	var saveButton = createButton("Save Image");
	saveButton.mouseClicked(saveImage);
	
	createP("Change pattern");
	var numSlider = createSlider(1, 100, num);
	numSlider.input(getNum);
    
    createP("Change background color Red");
	var redSlider = createSlider();
	redSlider.input(getRed);
    
     createP("Change background color Green");
	var greenSlider = createSlider();
	greenSlider.input(getgreen);
    
    createP("Change background color Blue");
	var blueSlider = createSlider();
	blueSlider.input(getblue);
    
    
    
	
}

function getRed() {
	r = this.value();
	pattern();
}

function getgreen() {
	g = this.value();
	pattern();
}

function getblue() {
	b = this.value();
	pattern();
}

function getNum() {
	num = this.value();
	pattern();
}

function saveImage() {
	save(nameInput.value() + ".png");
}




function pattern() {
	background(r,g,b);
    
	noStroke();
	
	
	for (let i = 0; i < num; i++) {
        fill("orange");
		ellipse(random(width), random(height), random(50, 100));
        fill("green");
        rect( random(width) , random( height) , random(100) , random(100));

	}
    }


