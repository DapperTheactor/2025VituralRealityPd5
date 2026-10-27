let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-200,200);
    let z = rnd(-200,200);
    createTree(x,0,z);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-500,500);
    let z = rnd(-500,500);
    let y = rnd(10,200);
    createcloud(x,y,z);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-500,500);
    let z = rnd(-500,500);
    let y = rnd(10,200);
    createhouse(x,0,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
function createcloud(x, y, z){
  let cloud = document.createElement("a-entity");
  let dodecahedron = document.createElement("a-dodecahedron");
  dodecahedron.setAttribute("position","2 1 -2");
  dodecahedron.setAttribute("radius","2");
  dodecahedron.setAttribute("color","white");
  cloud.append( dodecahedron );

  let dodecahedron2 = document.createElement("a-dodecahedron");
  dodecahedron2.setAttribute("position","0 1 -2");
  dodecahedron2.setAttribute("radius","2");
  dodecahedron2.setAttribute("color","white");
  cloud.append( dodecahedron2 );

  let dodecahedron3 = document.createElement("a-dodecahedron");
  dodecahedron3.setAttribute("position","0 1 0");
  dodecahedron3.setAttribute("radius","2");
  dodecahedron3.setAttribute("color","white");
  cloud.append( dodecahedron3 );

  let dodecahedron4 = document.createElement("a-dodecahedron");
  dodecahedron4.setAttribute("position","2 1 1");
  dodecahedron4.setAttribute("radius","2");
  dodecahedron4.setAttribute("color","white");
  cloud.append( dodecahedron4 );


  cloud.setAttribute("position",{x:x, y:y, z:z});
  scene.append(cloud);
}


   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
  function createhouse(x, y, z){
  let house = document.createElement("a-entity");

  let box = document.createElement("a-box");
  box.setAttribute("position","0 -1 0");
  box.setAttribute("color","brown");
  box.setAttribute("depth","8");
  box.setAttribute("height","10");
  box.setAttribute("width","8");
  house.append( box );

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("position","0 4.5 0");
  roof.setAttribute("color","blue");
  roof.setAttribute("segments-radial","3");
  roof.setAttribute("depth","5");
  roof.setAttribute("height","8");
  roof.setAttribute("width","7");
  roof.setAttribute("rotation","-90 90 0");
  roof.setAttribute("scale","4.5 1 1");
  house.append( roof );
  house.setAttribute("position",{x:x, y:y, z:z});
  scene.append(house);
  }






})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}



