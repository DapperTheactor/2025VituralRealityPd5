let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let rockets = [], ufos = [];
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
    for(let i =0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(6,20);
    let z = rnd(-20,20);
    let speed = rnd(2,6);
    rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }
  for(let i =0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(6,20)
    let z = rnd(-20,20);
    let speed2 = rnd(2,6) / 100;
    thing = new ufo(x,y,z);
    ufos.push(ufo);
  }
  loop();
})
function loop(){
 for(let rocket of rockets){
  rocket.launch();
 }
  window.requestAnimationFrame( loop );
}
