// JavaScript source code
////ostad.ai.github.io

function myBox(x, y, w, h) {
    let options = {
        friction: 0.5,
        restitution: .5
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
    this.scolor = color(255 - this.color[0], 255 - this.color[1], 255 - this.color[2]);
    World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.offset = 100;
    this.show = function () {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(this.scolor);
        fill(this.color)
        rect(0, 0, this.w, this.h);
        line(-this.w / 2, 0, this.w / 2, 0);
        line(0, -this.h / 2, 0, this.h / 2);
        rect(0, 0, 5, 5);

        pop();
    }
    this.isOffLimits = function () {
        return (this.body.position.y > height + this.offset);
    }
    this.removeFromWorld = function () {
        World.remove(world, this.body);
    }
}

function myCircle(x, y, radius) {
    let options = {
        friction: 0.05,
        restitution: .8
    };
    this.body = Bodies.circle(x, y, radius, options);
    //let temp=random(200,255)
    this.color = color(random(100, 255), random(100, 255), random(100, 255));
    this.scolor = color(255 - this.color[0], 255 - this.color[1], 255 - this.color[2]);
    World.add(world, this.body);
    this.radius = radius;
    this.offset = 100; //limit from which we delete object from world

    this.show = function () {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke(this.scolor);
        fill(this.color)
        ellipse(0, 0, 2 * this.radius);
        line(-this.radius, 0, this.radius, 0);
        line(0,-this.radius, 0, this.radius);

        fill(this.scolor)
        ellipse(0, 0, this.radius);
        ellipse(0, 0, 4);

        pop();
    }

    this.isOffLimits = function () {
        return (this.body.position.y > height + this.offset);
    }

    this.removeFromWorld = function () {
        World.remove(world, this.body);
    }
}
