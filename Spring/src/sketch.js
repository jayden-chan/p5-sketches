let sp = new Spring(0.05, 1, 400, 400, 0, 8, 0.55);

function setup() {
    createCanvas(800, 800);

    // textSize(10);
    // stroke(0);
    // fill(0);
    // text('Stiffness', 50, 25);
    kSlider = createSlider(0, 1, 0.3, 0.001);
    kSlider.position(850, 50);
}

function draw() {
    background(51);
    stroke(255);
    sp.mouseDrag(mouseIsPressed, mouseX, 800 - mouseY);
    sp.setK(kSlider.value());
    sp.update();
    sp.draw();
}
