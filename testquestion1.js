let circle;

function setup() {
    createCanvas(600, 400);
    world.gravity.y = 2;
}

function draw() {
    background("")
    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 30);
    }
}