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
    if(this.body.speed < 3) {
    var pos = this.body.position;
      var angle = this.body.angle;
    push();
      translate(pos.x,pos.y);
      rotate(angle);
       rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    } else {
      World.remove(world, this.body);
      push();
      this.visiblity = this.visiblity-5;
     // tint(255,this.visiblity);
      pop();
    }
  }
}
