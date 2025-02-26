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
let enX = 650;
let enY = 300;
let enSpeedX = 5;
let enSpeedY = 5;
let enHP = 10000;
let enEggs = [];
let enSI = 40;
let enST = enSI;

//Charecters
let img;
let img2;
let img3;
let img4;
let img5;

//background
let img6;

//Bullets
let cupBXs = [];
let cupBYs = [];

function preload() {
  img = loadImage('cupHead.png');
  img2 = loadImage('WallyPhase1.png');
  img3 = loadImage('JuniorPhase2.png');
  img4 = loadImage('WallyPhase3.png');
  img5 = loadImage('WallyEnd.png');
  img6 = loadImage('WallyWarblesB.jpg');
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
  image(img6, 400, 300, 800, 600);
  
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
  drawBosses(enX, enY);
}

function drawWallyAttack(x,y) {

  for(let i = 0; i < enEgg.length; i++) {

  }

}

function moveEnemy() {
  enY += enSpeedY;

  if(enY >= 50) {
    enSpeedY *= -1;
  }

  if (enHP < 6500 && enHP > 3000) {
    
  }

  if (enHP < 3000 && enHP > 0) {

  }
}

function drawBosses(x,y){
  image(img2,enX,enY,200,200);

  if (enHP < 6500 && enHP > 3000) {
    image(img3,enX,enY,150,150);
  }
  if (enHP < 3000 && enHP > 0) {
    image(img4,enX,enY,600,200);
  }
  if (enHP === 0) {
    image(img5,enX,enY,600,200);
  }
}

function drawCup(x,y) {
  image(img,x,y,75,75);
}

function cupB() {
  fill(0,255,255);

  for (let i = 0; i < cupBXs.length; i += 1) {
    ellipse(cupBXs[i],cupBYs[i], 40, 10);
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
  print.cupBXs;
  print.cupBYs;
}