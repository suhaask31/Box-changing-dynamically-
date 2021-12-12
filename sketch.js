
var box1;

function setup() {
  createCanvas(600, 400);
  box1 = new Box()
  
}

function draw() {
  background(220);
  box1.show()
  box1.boxwidth(100)
  box1.boxheight(200)
}



