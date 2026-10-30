class cloud{
 constructor(x,y,z){
  this.obj = document.createElement("a-entity");
  let dodecahedron = document.createElement("a-dodecahedron");
  dodecahedron.setAttribute("position","2 1 -2");
  dodecahedron.setAttribute("radius","2");
  dodecahedron.setAttribute("color","white");
  this.obj.append( dodecahedron );

  let dodecahedron2 = document.createElement("a-dodecahedron");
  dodecahedron2.setAttribute("position","0 1 -2");
  dodecahedron2.setAttribute("radius","2");
  dodecahedron2.setAttribute("color","white");
  this.obj.append( dodecahedron2 );

  let dodecahedron3 = document.createElement("a-dodecahedron");
  dodecahedron3.setAttribute("position","0 1 0");
  dodecahedron3.setAttribute("radius","2");
  dodecahedron3.setAttribute("color","white");
  this.obj.append( dodecahedron3 );

  let dodecahedron4 = document.createElement("a-dodecahedron");
  dodecahedron4.setAttribute("position","2 1 1");
  dodecahedron4.setAttribute("radius","2");
  dodecahedron4.setAttribute("color","white");
  this.obj.append( dodecahedron4 );

  this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}