let sp = new Spring(0.05, 1, 400, 400, 0, 8, 0.55);

function setup() {
    createCanvas(800, 800);

    kSlider = createSlider(0.001, 1, 0.3, 0.001);
    kSlider.position(650, 50);
}

function draw() {
textSize(10);

    background(51);
 
    textSize(32);
    fill(255);
    strokeWeight(0);
    text("Stiffness", 650, 40);
    textSize(20);
    text(kSlider.value(), 686, 100);

    stroke(255);
    sp.mouseDrag(mouseIsPressed, mouseX, 800 - mouseY);
    sp.setK(kSlider.value());
    sp.update();
    sp.draw();
}
