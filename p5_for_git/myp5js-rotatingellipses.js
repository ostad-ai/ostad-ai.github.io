// Rotating Ellipse
//written by Hamed Shah-Hosseni, Apr. 2019
//ostad-ai.github.io

    function setup() {
        createCanvas(windowWidth, windowHeight)
                            stroke(0)
                            frameRate(15)

                        }
                        let timeOffset = 0.
                        function draw() {
        background(220)
                            const maxWidth = windowWidth
                            const noX = 30
                            const noY = 20
                            const scaleN = .01
                            let noiseT = 0.
                            let gridX = windowWidth / noX
                            let gridY = windowHeight / noY
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
                    
