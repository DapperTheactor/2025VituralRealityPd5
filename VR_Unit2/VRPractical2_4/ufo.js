class Ufo {
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 0;
    this.obj = document.createElement("a-entity")
    let ray = document.createElement("a-cone");
    ray.setAttribute("radius",0.1);
    ray.setAttribute("opacity",0.5);
    ray.setAttribute("color","green");
    ray.setAttribute("position",{x:x,y:y,z:z});
    this.obj.append(ray)

    let disk = document.createElement("a-cylinder");
    disk.setAttribute("radius",0.7);
    disk.setAttribute("color","gray");
    disk.setAttribute("position",{x:x,y:y+0.5,z:z});
    disk.setAttribute("segments-radial",8);
    disk.setAttribute("height",0.1);
    this.obj.append(disk)

    let dome = document.createElement("a-sphere");
    dome.setAttribute("radius",0.6);
    dome.setAttribute("opacity",0.5);
    dome.setAttribute("color","white");
    dome.setAttribute("position",{x:x,y:y+0.5,z:z});
    dome.setAttribute("theta-start",0);
    dome.setAttribute("theta-length",90);
    dome.setAttribute("height",0.1);
    this.obj.append(dome)

    scene.append( this.obj );
  }

invade(){
    this.y -= this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
    if(this.y < 0){
      this.y = rnd(10,20);
    }
  }
}