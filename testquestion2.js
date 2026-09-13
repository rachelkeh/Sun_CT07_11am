let circle;
let floor;

function setup() {
    createCanvas(600, 400);
    world.gravity.y = 2;
    floor = new Sprite(300, 385, 600, 30, 'static');
}

function draw() {
    background("black")
    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 30);
        circle.bounciness = 0.5;
    }
}