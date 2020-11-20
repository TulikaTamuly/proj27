class ball{
    constructor(x,y){
        var options={
            restitution:1
        }
        this.body=Bodies.circle(x,y,35,options)
        World.add(world,this.body)
    }
    display(){
        fill ("red")
        circle(this.body.position.x,this.body.position.y,70)
       
    }
}