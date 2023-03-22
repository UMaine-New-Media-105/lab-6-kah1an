let x;
let y;
let boneX;
let boneY;
let distanceForCollision;
let notCaught;
let boneIsCaught ;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSL);
  x = 275;
  y = 0;
  boneX = random(0, 350);
  boneY = random(0, 350);
  let distanceForCollision = 5;
  notCaught = true;
}

function draw() {
  background(220);
  addBone(boneX, boneY);
  addDachshund(x, y, 0.75);
  let boneIsCaught =
      dist(x, y, boneX, boneY) < distanceForCollision;
    if (boneIsCaught) {
      notCaught = false;
    }
}

function addBone(translateX, translateY) {
  push();
  translate(translateX, translateY);
  fill(60, 50, 90);
  rect(5, 7, 35, 7, 7);
  ellipse(5, 5, 10);
  ellipse(5, 15, 10);
  ellipse(40, 5, 10);
  ellipse(40, 15, 10);
  pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x - 5;
  }
  if (keyCode === RIGHT_ARROW) {
    x = x + 5;
  }
  if (keyCode === UP_ARROW) {
    y = y - 5;
  }
  if (keyCode === DOWN_ARROW) {
    y = y + 5;
  }
}

function addDachshund(translateX, translateY, size) {
  push();
  translate(translateX, translateY);
  scale(size);
  if (boneIsCaught) {
    scale(2);
  }
  noStroke();
  fill(42, 80, 30); //main color
  ellipse(127, 86, 4, 20); //right legs
  ellipse(80, 86, 4, 20);
  ellipse(125, 93.5, 8, 4); //feet
  ellipse(78, 93.5, 8, 4);
  stroke(42, 80, 30); //main color
  strokeWeight(5);
  noFill();
  arc(135, 42, 40, 30, 10, 90); //tail
  noStroke();
  fill(42, 80, 30); //main color
  rect(50, 50, 90, 30, 30); //body
  shearX(20);
  ellipse(34, 50, 20, 30); //neck
  shearX(-20);
  ellipse(45, 42, 35, 30); //head
  shearX(-30);
  ellipse(65, 52, 30, 14); //snout
  shearX(30);
  noStroke();
  ellipse(115, 86, 4, 20); //left legs
  ellipse(67, 86, 4, 20);
  ellipse(112, 93.5, 8, 4); //feet
  ellipse(65, 93.5, 8, 4);
  stroke("black");
  fill(42, 80, 30);
  strokeWeight(1);
  arc(54, 44, 18, 40, -53, 254, OPEN); //ear
  fill("black");
  ellipse(34, 40, 4); //eye
  arc(22, 53, 7, 6, 120, 280); //nose
  noFill();
  arc(30, 54, 20, 8, 0, 90); //mouth
  pop();
}
