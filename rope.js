class Slingy{
    constructor(b1,body,dx,dy){
        this.dx = dx
        this.dy = dy
        var options = {
            bodyA: b1,
            bodyB: body,
            pointB: {x:this.dx, y: this.dy}
        }
     
        this.slingy = Constraint.create(options);
        World.add(world, this.slingy);
    }
    display(){
        if (this.slingy.bodyA){
            var p1 = this.slingy.bodyA.position;
            var p2 = this.slingy.bodyB.position;
            stroke("red")
            strokeWeight(5);
            
            line(p1.x, p1.y, p2.x+this.dx, p2.y+this.dy);
        }
    

    }
}