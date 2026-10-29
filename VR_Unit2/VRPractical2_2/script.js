let scene, car, rocket, pokemonball, dude,sun;
window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  car = document.querySelector("#car");
  rocket = document.querySelector("#rocket");
  pokemonball = document.querySelector("#pokemonball");
  dude = document.querySelector("#dude");
  sun = document.querySelector("#sun");

  car.x = 0;
  car.dx = 0.01;

  rocket.y = -2;
  rocket.dy = 0.1;

  pokemonball.x = -1;
  pokemonball.xd = -1;
  pokemonball.zx = 0.1;
  pokemonball.dx = 1;

  dude.y = -20;
  dude.dy = 0.01;

    sun.o = 0;
    sun.do = 0.005;

  loop();
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position",{x:car.x, y:0, z:0});

    rocket.y += rocket.dy;
    rocket.setAttribute("position",{x:0, y:rocket.y, z:0});

    pokemonball.x += pokemonball.dx;
    pokemonball.xd += pokemonball.zx;
    pokemonball.setAttribute("rotation",{x:pokemonball.x, y:0, z:0});
    pokemonball.setAttribute("position",{x:pokemonball.zx, y:1, z:0});

    dude.y += dude.dy;
    dude.setAttribute("scale",{x:dude.y, y:1, z:1});

     sun.o += sun.do;
     sun.setAttribute("opacity",sun.o);

 window.requestAnimationFrame(loop);
}