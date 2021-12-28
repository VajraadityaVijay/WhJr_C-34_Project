class Ball {
    constructor(angle, x, y) {
        this.angle = angle;
        this.ball = Matter.Bodies.circle(x, y, 10, { isStatic: true, restitution: 2 });
        World.add(world, this.ball);
    }

    display() {
        fill("red")
        ellipse(this.ball.position.x, this.ball.position.y, 20, 20);
    }

    shoot() {
        var newAngle = this.angle;
        newAngle = newAngle * (3.14 / 180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.ball, false);
        Matter.Body.setVelocity(this.ball, {
            x: velocity.x * (180 / 3.14), y: velocity.y * (180 / 3.14)
        });
    }
}