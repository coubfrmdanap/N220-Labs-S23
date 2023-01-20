function setup() {
    createCanvas(1000, 1000);
    x = width / 2;
    y = height / 2;
  }
  
  function draw() {
    background(200);
    fill(250, 0, 0);
    stroke(3);
    strokeWeight(3);
    ellipse(x, y, 45, 45);
    rect(x - 30, y - 30, 70, 85);
    triangle(x, y - 30, x - 30, y + 30, x + 30, y + 30);
    line(x - 150, y, x + 100, y);
    arc(x, y, 50, 50, 10, PI);
  }