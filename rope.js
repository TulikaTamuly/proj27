class rope{
    constructor(pointA,bodyB){
        var options={
            pointA:pointA,
            bodyB:bodyB
           
        }
        this.pointA=pointA
        this.rubber=Constraint.create(options)
        World.add(world,this.rubber)
    }
    display(){
        
        var pos=this.pointA
        var pose=this.rubber.bodyB.position
        line(pos.x,pos.y,pose.x,pose.y)
    }
}