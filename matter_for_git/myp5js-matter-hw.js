// JavaScript source code
// ostad-ai.github.io
let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
let engine;
let world;
let myBoxes = [];
let myGs = [];
let myCircles = [];
let radio;
let mySound;
function setup() {
    if (windowWidth < 500) {
        createCanvas(windowWidth, windowHeight - 100);
    }
    else {
        createCanvas(500, windowHeight - 100);
    }
        mySound = loadSound('./media/soundeffect1.wav');

    // create an engine
    engine = Engine.create();
    world = engine.world;
    
    myGs.push(new myGround(100, height /4.5, 200, 20, PI / 7));
    myGs.push(new myGround(320, height/2.5, 200, 20, -PI/7));
    myGs.push(new myGround(100, height/1.8, 200, 20, PI/7));
    myGs.push(new myGround(320, height/1.4, 200, 20, -PI/7));
    radio = createRadio();
    radio.option('circle');
    radio.option('rectangle');
    radio.value('circle');
        
    Engine.run(engine);
   
}

function mouseDragged() {
    if (!mySound.isPlaying()) {
        mySound.play();
    }
    if (radio.value() == 'circle') {
        myCircles.push(new myCircle(mouseX, mouseY, random(5, 15)));
    }
    else {
        myBoxes.push(new myBox(mouseX, mouseY, random(10, 40), random(10, 40)));
    }
}

function draw() {
    background(150);
    stroke(0);
    textSize(20);
    text('Drag mouse to create objects',15,25);
    for (let i = 0; i < myBoxes.length; ++i) {
        myBoxes[i].show();
        if (myBoxes[i].isOffLimits()) {
            myBoxes[i].removeFromWorld();
            myBoxes.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < myGs.length; ++i) {
        myGs[i].show();
    }
    for (let i = 0; i < myCircles.length; ++i) {
        myCircles[i].show();
        if (myCircles[i].isOffLimits()) {
            myCircles[i].removeFromWorld();
            myCircles.splice(i, 1);
            i--;
        }
    }
    
}
