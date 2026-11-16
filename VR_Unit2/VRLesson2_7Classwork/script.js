let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, dudeTemplate;
let Dudes = [ ];
let dude;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  dudeTemplate = document.querySelector("#dudeTemplate");

  //Challenge 4: Create an array of dudes at random locations.
  for(let i =0; i < 100; i++){
   let x = rnd(-20,20);
   let z = rnd(-10,-50);
   dude = new Dude (x,1,z);
   Dudes.push(dude);
  }


  loop();  
})
function loop(){
//Challenge 5: Make all the dudes jump.
 for(let dude of Dudes){
  dude.jump();
}
  window.requestAnimationFrame( loop );
}