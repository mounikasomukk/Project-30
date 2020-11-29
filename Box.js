class Box {
  constructor(x, y, width, height, angle) {
    var options = {
        'restitution':0,
        'friction':0,
        'density':1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    //var angle = this.body.angle;
    if(this.body.speed < 3) {
    var pos = this.body.position;
    push();
    rect(pos.x,pos.y,this.width,this.height);
    rectMode(CENTER);
    //rotate(angle);
    pop();
    } else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity;
      tint(255,this.visiblity);
      pop();
    }
  }
}