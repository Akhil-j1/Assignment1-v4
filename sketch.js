/*
 Paint app by Akhil
 
  C : CLEAR
  
*/

//screen variable for welcome and paint screen
let screen;

// brush type variable
let brushType;

// color of the line brush
let lineBrushColor;

// brush size
let brushSize;

// triangle image brush
let triangleImg;
// triangle brush size
let triangleSize = 60;

// bottom border
let bottomBorder;

function preload() {
  // load triangle image
  triangleImg = loadImage("triangle.png");
}

function setup() {
  // canvas size
  createCanvas(800, 600);

  // image is centered
  imageMode(CENTER);
  // rectangle is centered
  rectMode(CENTER);

  // at first screen is welcome screen
  screen = "welcome";

  //at first color is black
  lineBrushColor = color(0);
  // brush size is 1
  brushSize = 1;
  // at first brush is line
  brushType = "line";
  // bottom border value
  bottomBorder = height - 100;
}

function draw() {
  if (screen == "welcome") {
    // call welcome screen function
    welcomeScreen();
  } else if (screen == "paint") {
    // call paint screen function
    paint();
    // draw the bottom line
    stroke(0);
    strokeWeight(2);
    line(0, bottomBorder, width, bottomBorder);
    // call draw color function
    drawColors();
  }
}

// display welcome screen
function welcomeScreen() {
  background("#FDD7AA");
  // text is centered
  textAlign(CENTER);
  // text size
  textSize(48);
  // text color
  fill("#733C3C");
  // display welcome text
  text("Click to begin Paint App", width / 2, height / 2);

  // text size
  textSize(32);
  // text color
  fill("#8D8DAA");
  // text
  text("Use C to clear and numbers 1 to 9 to change pen size", width / 2, height / 2 + 100);
}

function paint() {
  if (mouseIsPressed) {
    if (brushType == "line" && mouseY < bottomBorder) {
      // call line brush function
      lineBrush();
    } else if (brushType == "triangle" && mouseY < bottomBorder) {
      // call triangle brush function
      triangleBrush();
    }
  }
}

// display line brush
function lineBrush() {
  // paint with line brush
  stroke(lineBrushColor);
  strokeWeight(brushSize);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

// display triangle brush
function triangleBrush() {
  // paint with triangle image brush
  image(triangleImg, mouseX, mouseY, triangleSize, triangleSize);
}

function drawColors() {
  noStroke();
  // red rectangle
  fill(255, 0, 0);
  rect(100, bottomBorder + 50, 50, 50);
  // green rectangle
  fill(0, 255, 0);
  rect(200, bottomBorder + 50, 50, 50);
  // blue rectangle
  fill(0, 0, 255);
  rect(300, bottomBorder + 50, 50, 50);
  // black rectangle
  fill(0, 0, 0);
  rect(400, bottomBorder + 50, 50, 50);
  // triangle
  fill(0, 255, 0);
  image(triangleImg, 500, bottomBorder + 50, 70, 70);
  // line
  stroke(0);
  strokeWeight(3);
  line(570, bottomBorder + 50, 650, bottomBorder + 50)

  // text
  fill(0);
  noStroke();
  textSize(15);
  text("Red", 100, bottomBorder + 90);
  text("Green", 200, bottomBorder + 90);
  text("Blue", 300, bottomBorder + 90);
  text("Black", 400, bottomBorder + 90);
  text("Triangle", 500, bottomBorder + 90);
  text("Line", 600, bottomBorder + 90);

}

function mousePressed() {
  // change to the paint screen with mouse press
  if (screen == "welcome") {
    // change background color to white
    background(255);
    // change screen
    screen = "paint";
  } else if (screen == "paint") {
    // mouse values
    let mx = mouseX;
    let my = mouseY;
    // select red color
    if (mx < 125 && mx > 75 && my > bottomBorder + 30) {
      lineBrushColor = color(255, 0, 0);
    // select green color
    } else if (mx < 225 && mx > 175 && my > bottomBorder + 30) {
      lineBrushColor = color(0, 255, 0);
    // select blue color
    }else if (mx < 325 && mx > 275 && my > bottomBorder + 30) {
      lineBrushColor = color(0, 0, 255);
    // select black color
    }else if (mx < 425 && mx > 375 && my > bottomBorder + 30) {
      lineBrushColor = color(0, 0, 0);
      // select triangle brush
    }else if (mx < 525 && mx > 475 && my > bottomBorder + 30) {
      brushType = "triangle"
    }else if(mx < 650 && mx > 570 && my > bottomBorder + 30){
      brushType = "line"
    }
  }
}

function keyPressed() {
  // paint screen
  if (screen == "paint") {
    if (key == "c" || key == "C") {
      // clear screen
      background(255);
      
    // change brush size
    }else if(key == 1){
      brushSize = 1;
    }else if(key == 2){
      brushSize = 3;
    }else if(key == 3){
      brushSize = 5;
    }else if(key == 4){
      brushSize = 10;
    }else if(key == 5){
      brushSize = 15;
    }else if(key == 6){
      brushSize = 20;
    }else if(key == 7){
      brushSize = 25;
    }else if(key == 8){
      brushSize = 35;
    }else if(key == 9){
      brushSize = 50;
    }
  }
}
