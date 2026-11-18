let maze = [
  "oooooooooooooooooooooo",
  "o--------------------o",
  "o----x---------------o",
  "o--------T------x----o",
  "o---x----------------o",
  "o---------x------T---o",
  "o------T-------------o",
  "o--------------------o",
  "o--------x-----T-----o",
  "o---T----------------o",
  "o------------x-------o",
  "oooooooooooooooooooooo",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})