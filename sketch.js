// Project Title
// Your Name(s) - Malakai & Adam
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//player
let pY = 200;
let pX = 150;
let pHP = 3;

//Enemy
let enX = 700;
let enY = 300;
let enHP = 1000;

//Charecters
let img;
let img2;
let img3;
let img4;
let img5;

//background
let

//Bullets
let cupBXs = [];
let cupBYs = [];
let cupBXs2 = [];
let cupBYs2 = [];

function preload() {
  img = loadImage('cupHead.png');
  img2 = loadImage('WallyPhase1.png');
  img3 = loadImage('JuniorPhase2.png');
  img4 = loadImage('WallyPhase3.png');
  img5 = loadImage('WallyEnd.png');
}

function setup() {
  //This function get run once at the start of the program
  createCanvas(800, 600);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  //Set the number of frames per second
  frameRate(60);
}



function draw() {
  background(240);
  
  drawCup(pX,pY);
  if(keyIsDown(68) || keyIsDown(39)) {
    pX += 4;
  }
  if(keyIsDown(65) || keyIsDown(37)) {
    pX -= 4;
  }
  if(keyIsDown(87) || keyIsDown(38)) {
    pY -= 4;
  }
  if(keyIsDown(83) || keyIsDown(40)) {
    pY += 4;
  }

  cupB();
}

function drawBosses(){
  image(img2,enX,enY,150,150);
  if (enHP < 6500 && enHP > 3000) {
    image(img3,enX,enY,100,100);
  }
  if (enHP < 3000 && enHP > 0) {
    image(img4,enX,enY,200,100);
  }
  if (enHP === 0) {
    image(img5,enX.enY,200,100);
  }
}

function drawCup(x,y) {
  image(img,x,y,75,75);
}

function cupB() {
  fill('blue');

  for (let i = 0; i < cupBXs.length; i += 1) {
    ellipse(cupBXs[i],cupBYs[i],40,20);
    cupBXs[i] += 7;
    //projectile killer
    if (cupBXs[i] > 850) {
      cupBXs.splice(i,i);
      cupBYs.splice(i,i);
    }

    //boss hit
    if (cupBXs[i] == enX) {
      if (abs(cupBYs[i] - enY) < 20 + 10) {
        cupBXs.splice(i,i);
        cupBYs.splice(i,i);
        enHP -= 50;
      }
    }
  }
}

function mouseReleased() {
  cupBXs.push(pX+37.5);
  cupBYs.push(pY);
}