let mic;
//----------------------------------------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  
  
}

function draw() {
  background(10);
  let vol = mic.getLevel();
  console.log(vol);
  fill(0, 0, 255);
  ellipse(width/2, height/2, width/2, vol*800);
}