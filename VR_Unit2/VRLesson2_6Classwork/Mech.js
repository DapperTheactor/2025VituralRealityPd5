class Mech{
 constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.dy= rnd(1,10) / 100
    this.z=z;
    this.obj = mechtemplate.cloneNode(true);
    this.obj.setAtribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
 }
 launch(){
  this.y += this.dy;
  this.obj.setAtrribute("position",{x:this.x,y:this.y,z:this.z});
 }
}