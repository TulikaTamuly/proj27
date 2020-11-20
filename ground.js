class ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,50,600,50,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,600,50)
    }
}