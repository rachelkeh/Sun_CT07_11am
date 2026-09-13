let circle;

function setup() {
    createCanvas(600, 400);
    background("white");
    world.gravity.y = 2;
}

function draw() {

    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 30);
    }
}