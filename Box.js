class Box {
    constructor(x,y,width,height){

      var options={

           'restitution':0.1,
          'friction':7.0,
          'density':7.0,
          'isStatic' : false

      }

        this.body = Bodies.rectangle(x,y,width,height,options);


        this.width = width
        this.height = height

        World.add(world,this.body);
    }

    display(){
        
        var pos = this.body.position;
        rectMode(CENTER);
        fill(27,168,240);
        rect(pos.x,pos.y,this.width,this.height);
    
        

    }
}