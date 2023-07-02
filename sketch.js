let baseUrlPictures = " https://oscaraccorsi.github.io/LoFi/";
let baseURLImage = "https://oscaraccorsi.github.io/pictures/";
let logo;
let marginX, marginY, coeffX, coeffY;
let oneCol;
let dist;
let distArray = [400, 350, 300, 250, 200, 150, 100, 50];
let timeArray = [90, 75, 60, 45, 30];
let objArray = [Square, Round, Mixed, Linear];
let objChoice;
let x = [];
let y = [];
let mic, vol;

let img;
let palette = [];
let pictureList = [
  "hartung01.jpg",
  "hartung03.jpg",
  "hartung04.jpg",
  "hartung05.jpg",
  "hartung06.jpg",
  "hartung07.jpg",
  "hartung08.jpg",
  "hartung09.jpg",
  "hartung10.jpg",
  "hartung11.jpg",
  "hartung12.jpg",
  "hartung13.jpg",
];

let numSquare = 12;
let squares = [];

let xyArray = [-250, -200, -150, -125, -100, -75, 75, 100, 125, 150, 200, 250];
let xVar1, yVar1, xVar2, yVar2, xVar3, yVar3, xVar4, yVar4, xVar5, yVar5, xVar6, yVar6;
let vel, vel2;

let proMargin;
let numObjct;

//--------------------------------------preload
function preload() {
  h = hour() % 12;
  img = loadImage(baseUrlPictures + pictureList[h]);
  logo = loadImage(baseURLImage + "good one white.png");
  objChoice = random(objArray);
  console.log(pictureList[h]);
}
//--------------------------------------------------windowResized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//--------------------------------------------SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  
  mic = new p5.AudioIn();
  mic.start();
  dist = random(distArray);
  setInterval(reloadPage, 1000*random(timeArray));
  
  vel = random(0.05, 0.1);
  vel2 = random(0.1, 0.05);
  
  marginX = width / 5;
  marginY = height / 5;
  proMargin = width / 12;
  
  // numObjct = round(random(width / 300, width / 100));
  
    xVar1 = random(xyArray);
    yVar1 = random(xyArray);
    xVar2 = random(xyArray);
    yVar2 = random(xyArray);
    xVar3 = random(xyArray);
    yVar3 = random(xyArray);
    xVar4 = random(xyArray);
    yVar4 = random(xyArray);
    xVar5 = random(xyArray);
    yVar5 = random(xyArray);
    xVar6 = random(xyArray);
    yVar6 = random(xyArray);

  //------------------------------------------------palette
  img.resize(10, 0);
  img.loadPixels();

  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];
    let alpha = round(random(100, 200));
    let c = color(r, g, b, alpha);
    palette.push(c);
  }
  oneCol = random(palette);
  
  //------------------------------------------------arrays
  marginX = width/5;
  marginY = height/5;
  // coeffX = width/dst;
  // coeffY = height/dst;
  console.log(coeffX, coeffY);
  for (let i = marginX; i < width-marginX; i += dist) {
    for (let u = marginY; u < height-marginY; u += dist) {
      x.push(i);
      y.push(u);
      
      //numObjct= x[i]*y[u];
      // fill(oneCol);
      // noStroke();
      // square(i, u, 50, 2);  //no grid at the beginning  
    }
  }
//numObjct = x.lenght;
console.log(x.length);
numObjct = x.length;
console.log(numObjct);

  //---------------------------------------------------objects
  for (let i = 0; i < numObjct; i++) {
    
    xVar1;
    yVar1;
    
    let col = random(palette);
    //let s;
    let r = new objChoice(x[i], y[i], col);
    squares.push(r);
    
  }
}

//-------------------------------------------DRAW
function draw() {
  background(oneCol);
  strokeCap(SQUARE);
  vol = mic.getLevel();
  if (vol <= 0.02) {
    vol = 0;
  }

  for (let i = 0; i < squares.length; i++) {
    let r = squares[i];
    r.update();
    r.display();
  }
}

//----------------------------------reLoad
function reloadPage() {
  window.location.reload();
}
function mousePressed() {
  imageMode(CENTER);
  let xLogo = windowWidth - 40;
  logo.resize(40, 0);
  image(logo, xLogo, windowHeight - 25);
  tint(200);
  imageMode(CORNER);
  save();
  clear();
}
function keyPressed() {
  reloadPage();
}