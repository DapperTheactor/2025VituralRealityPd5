class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let rockethead = document.createElement("a-cone");
    rockethead.setAttribute("radius-top","0");
    rockethead.setAttribute("radius-bottom","0.5");
    rockethead.setAttribute("height","1");
    rockethead.setAttribute("color","red");
    rockethead.setAttribute("position","0, 3.0, -2");
    this.obj.append( rockethead )
    let body = document.createElement("a-cylinder");
    body.setAttribute("radius","0.5");
    body.setAttribute("height","2");
    body.setAttribute("color","gray");
    body.setAttribute("position","0, 1.5, -2 ");
    this.obj.append( body )
    let cone = document.createElement("a-cone");
    cone.setAttribute("radius-top","0");
    cone.setAttribute("radius-bottom","0.25");
    cone.setAttribute("height","2");
    cone.setAttribute("color","orange");
    cone.setAttribute("position","0, -0.5, -2");
    cone.setAttribute("rotation","-180, 0, 0");
    this.obj.append(cone )
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    this.x =x;
    this.y=y;
    this.z = z;
    this.dy =0.05;
  }
  launch(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x , y:this.y ,z:this.z});
    this.obj.setAttribute("rotation",{x:this.x , y:this.y ,z:this.z});
  }
}