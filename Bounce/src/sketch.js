let myBall = new Ball(17, 400, 400, 0, 0);
let gravity = 0.5;

function setup() {
    createCanvas(800, 800);
    background(51);
}

function draw() {
    background(51);
    myBall.applyForce(0, gravity);
    myBall.draw();
    myBall.update();
    myBall.mouseDrag(mouseIsPressed, mouseX, mouseY);
}
