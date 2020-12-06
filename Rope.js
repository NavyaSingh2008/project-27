class Log {
    constructor(body1, body2,  offsetX, offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.ofsetx, y:this.offsetY}
        }
      Matter.Body.setAngle(this.body, angle);
    }
  }