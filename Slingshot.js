class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            length:10,
            stiffness:0.04,
            bodyA:bodyA,
            bodyB:bodyB,
        }
        
        this.slingshot = Constraint.create(options)
        World.add(world,this.slingshot)
        
    }
    display(){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.slingshot.bodyB.position
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}