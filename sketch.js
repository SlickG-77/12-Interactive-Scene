// Project Title
// Your Name(s) - Malakai & Adam
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pY = 200;
let pX = 150;

function setup() {
  //This function get run once at the start of the program
  createCanvas(600, 400);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(60);
}

function draw() {
  background(240);
  fill(0);
  rect(100,100,20,20);

  drawCup(pX,pY);
  if(keyIsDown(68) || keyIsDown(39));
    pX += 2;
  if(keyIsDown(65) || keyIsDown(37));
    pX -= 2;
  if(keyIsDown(87) || keyIsDown(38));
    pY -= 2;
    if(keyIsDown(83) || keyIsDown(40));
    pY += 2;
}

function drawCup(x,y) {
  fill('red');
  ellipse(x,y,80,20);
  
}
