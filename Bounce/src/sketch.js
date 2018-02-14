let myBall = new Ball(400, 400, 0, 0);

function setup() {
    createCanvas(800, 800);
    background(51);
}

function draw() {
    background(51);
    myBall.draw();
    myBall.update();
}
