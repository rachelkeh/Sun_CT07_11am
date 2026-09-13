let circle;
let floor;

function setup() {
    createCanvas(600, 400);
    world.gravity.y = 2;
    floor = new Sprite(0, 370, 600,30);
}

function draw() {
    background("black")
    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 30);
    }
}