// colorfull canvas
//written by Hamed Shah-Hosseni, Apr. 2019
//ostad-ai.github.io
let hue = 0;
let c;
let capture;
let slider;
let sliderH=60

function setup() {
    c = createCanvas(windowWidth, windowHeight-sliderH);
    pixelDensity(1);
    createSpan("Pen size:");
    slider = createSlider(5, 150, 30);
    button = createButton('Take snapshot');
    button2 = createButton('Paste snapshot');
    button3 = createButton('Save canvas');
    button.mousePressed(takeShot);
    button2.mousePressed(pasteShot);
    button3.mousePressed(mySaveCanvas);
    stroke(0);
    background(225); 
}
function mySaveCanvas(){
    saveCanvas(c, 'mycanvas.jpg')
}

function closeCam() {
    
    capture.pause()
    capture.remove()
}


//take the snapshot
function takeShot() {
    
    capture = createCapture(VIDEO)
    capture.id('mycap')
    capture.hide()
    
}

function pasteShot() {
    if (capture.loadedmetadata) {
        let cap = capture.get(0, 0, capture.width, capture.height);
        image(cap, 0, 0, width, height) //width * capture.height / capture.width);
        closeCam()
    }
    else { alert('click on Take snapshot first') }

}
function keyPressed(){
    if (keyCode == 83) { //press 's'
        mySaveCanvas()
    }
    if (keyCode == 80) { //press p
        pasteShot()
    }
    if (keyCode == 84) { //press t

        takeShot()
    }
    
}
function mouseDragged() {
    if (mouseY < height) { 
    colorMode(HSL, 360)
    noStroke()
    hue > 360 ? hue = 0 : hue++;
    fill(hue, 200, 200);
    ellipse(mouseX, mouseY, slider.value(), slider.value());
}
    }
    function draw() {
    //background(225)
    //    image(capture,0,0,width,height)


    }