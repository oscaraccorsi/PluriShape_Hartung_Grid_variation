
//-------------------------------------------CLASS SQUARE
class Linear {
    constructor(x, y, col, s, vol) {
      this.x = x;
      this.y = y;
      this.vol = vol;
      
      this.xVar1 = xVar1;
      this.yVar1 = yVar1;
      this.xVar3 = xVar3;
      this.yVar3 = yVar3;
      this.xVar6 = xVar6;
      this.yVar6 = yVar6;
  
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

      this.xVar6 += this.velX;
      this.yVar6 += this.velY;
      
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
  
    //   push();
    //   angleMode(DEGREES);
    //   translate(this.x, this.y);
  
    //   noStroke();
    //   //rotate(this.angle);
    //   //scale(this.s);
    //   fill(this.col);
  
    //   beginShape(TESS);
    //   vertex(0, 0);
    //   vertex(this.xVar1, this.yVar1);
    //   vertex(xVar2, yVar2);
    //   vertex(this.xVar3, this.yVar3);
    //   vertex(xVar4, yVar4);
    //   endShape(CLOSE);
    //   pop();
  
      push();
      angleMode(DEGREES);
      translate(this.x, this.y);
  
      noStroke();
      strokeWeight(100);
      stroke(this.col);
      rotate(this.angle);
      //scale(this.s);
      //fill(this.col);
      noFill();
      //beginShape(TESS);
      bezier(
            this.xVar1+vol*100, this.yVar1,
            xVar2, yVar2,
            this.xVar3+vol*100, this.yVar3+vol*100,
            //xVar4, yVar4,
            //xVar5, yVar5,
            this.xVar6, this.yVar6+vol*100);
      
      pop();
    }
  }
  