class Rope {
  constructor(body1, body2, offsetX, offsetY) {

    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: body1,
      bodyB: body2,
      pointB: { x: this.offsetX, y: this.offsetY }
    }

    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  display() {

    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;

    strokeWeight(3); 

    var position1X = pointA.x;
    var position1Y = pointA.y;

    var position2X = pointB.x + this.offsetX;
    var position2Y = pointB.y + this.offsetY;


    line(position1X, position1Y, position2X, position2Y);
    // line(posA.x, posA.y, posB.x, posB.y)

  }
};
