class Ball {
  constructor(x, y, r) {
    var options = {
      density:1.2,
      restitution:1,
      friction:0.5,
      isStatic:false
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y)
    rotate(this.body.angle)
    ellipseMode(RADIUS);
    fill("orange");
    ellipse(0,0,this.r,this.r);
    pop()
  }
}
