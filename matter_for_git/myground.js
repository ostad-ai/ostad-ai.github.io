// JavaScript source code
//ostad.ai.github.io
function myGround(x, y, w, h,ang) {
    let options = {
        friction: 0.15,
        restitution: .9,
        angle: ang,
        isStatic: true
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.color = color(0, random(10,100), random(10, 100));
    World.add(world, this.body);
    this.w = w;
    this.h = h;

    this.show = function () {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color)
        rect(0, 0, this.w, this.h);
        pop();
    }

}
