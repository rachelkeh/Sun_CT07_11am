let circle;

function setup() {
    createCanvas(600, 400);
    background("white");
    
}

function draw() {

    if (mouse.presses()) {
        circle = new Sprite(mouse.x, mouse.y, 30);
    }
}