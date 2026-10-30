class house{
  constructor(x,y,z){
  this.obj = document.createElement("a-entity");
  let box = document.createElement("a-box");
  box.setAttribute("position","0 -1 0");
  box.setAttribute("color","brown");
  box.setAttribute("depth","8");
  box.setAttribute("height","10");
  box.setAttribute("width","8");
  this.obj.append( box );

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("position","0 4.5 0");
  roof.setAttribute("color","blue");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("depth","5");
  roof.setAttribute("height","8");
  roof.setAttribute("width","7");
  roof.setAttribute("rotation","-90 90 0");
  roof.setAttribute("scale","4.5 1 1");
  this.obj.append( roof );
  this.obj.setAttribute("position",{x:x, y:y, z:z});
  scene.append( this.obj );
  }
}