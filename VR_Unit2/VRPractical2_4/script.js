let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let rockets = [];
let ufos =[];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

    for(let i =0; i < 100; i++){
    let x = rnd(-20,50);
    let y = rnd(6,40)
    let z = rnd(-20,50);
    let speed = rnd(2,6) / 100;
    rocket = new Rocket(x,y,z);
    rockets.push(rocket);
  }

    for(let i =0; i < 100; i++){
    let x = rnd(-20,50);
    let y = rnd(20,40)
    let z = rnd(-20,50);
    let speed = rnd(2,6) / 100;
    ufo = new Ufo(x,y,z);
    ufos.push(ufo);
  }




  loop();
})

function loop(){
 for(let rocket of rockets){
  rocket.launch();
 }
 for(let ufo of ufos){
  ufo.invade();
 }
  window.requestAnimationFrame( loop );
}