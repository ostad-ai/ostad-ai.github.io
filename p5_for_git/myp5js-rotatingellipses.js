// Rotating Ellipse
//written by Hamed Shah-Hosseni, Apr. 2019
//ostad-ai.github.io


let timeOffset = 0.
let noX = 28
let noY = 18
let gridX
let gridY
let scaleN = .01
let noiseT = 0.
    function setup() {
        createCanvas(windowWidth, windowHeight)
                            stroke(0)
        frameRate(15)
        if (windowHeight > windowWidth) {
            noX = 15
            noY = 25
        }
        
       
        gridX = windowWidth / noX
        gridY = windowHeight / noY

                        }
                        
                        function draw() {
                            background(220)
                            
                            
                            
                            stroke(0)
                            strokeWeight(5)
                            //noFill()
                            for (let xi = 0; xi < noX; ++xi) {
                                for (let yi = 0; yi < noY; ++yi) {
                                    push()
                                    translate(xi * gridX, yi * gridY)
                                    noiseT = noise(scaleN * xi, scaleN * yi, timeOffset)
                                    rotate(100 * noiseT)
                                    fill(200 + random(50), 100 + random(20), 80 + random(10), 255 - 255 * noiseT)
                                    ellipse(0, 0, 25, 15)
                                    pop()

                                }

                            }
                            timeOffset += .01
                        }
                    
