function setup() {
    createCanvas(1000, 1000);
    x = width / 2;
    y = height / 2;
  }
  
  function draw() {
    background(200);
    fill(250, 25, 25);
    stroke(3);
    strokeWeight(5);
    ellipse(x, y, 45, 45);
    rect(x - 30, y - 30, 45, 45);
    triangle(x, y - 30, x - 30, y + 30, x + 30, y + 30);
    line(x - 25, y, x + 25, y);
    arc(x, y, 50, 50, 0, PI);
  }