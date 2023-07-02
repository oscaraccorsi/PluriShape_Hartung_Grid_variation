
//-------------------------------------------CLASS SQUARE
class Square {
    constructor(x, y, col, s) {
      this.x = x;
      this.y = y;
      this.vol = vol;
      
      this.xVar1 = xVar1;
      this.yVar1 = yVar1;
      this.xVar3 = xVar3;
      this.yVar3 = yVar3;
  
      this.speedX = random(-vel, vel);
      this.speedY = random(-vel, vel);
      
      this.velX = random(-vel2, vel2);
      this.velY = random(-vel2, vel2);
  
      this.angle = random(0, 5);
      this.rotation = random(-vel, vel);
  
      this.col = col;
      this.s = random(0.1, 1);
    }
  
    //_______________________________________update

    update() {
      
      this.xVar1 += this.velX;
      this.yVar1 += this.velY;
  
      this.xVar3 += this.velX;
      this.yVar3 += this.velY;
      
      // this.x += this.speedX;
      if (this.x < proMargin || this.x > width - proMargin) {
        reloadPage();
      }
      // this.y += this.speedY;
      if (this.y < proMargin || this.y > height - proMargin) {
        reloadPage();
      }
      this.angle = this.angle + this.rotation;
    }
  
    //___________________________________display

    display() {
  
      push();
      angleMode(DEGREES);
      translate(this.x, this.y);
  
      noStroke();
      rotate(this.angle*(vol*10));
      //scale(this.s/(vol*50));
      fill(this.col);
  
      beginShape(TESS);
      vertex(0, 0);
      vertex(this.xVar1, this.yVar1);
      vertex(xVar2, yVar2);
      vertex(this.xVar3, this.yVar3);
      vertex(xVar4, yVar4);
      endShape(CLOSE);
      pop();
  
    }
  }
  