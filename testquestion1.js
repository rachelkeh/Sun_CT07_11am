let circle;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    if (mouse.presses()) {
        circle = new Spite(mouse.x, mouse.y, 30);
    }
}