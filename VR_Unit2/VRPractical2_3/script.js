let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let tree = new Tree(x, 0 , z);
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-90,90);
    let z = rnd(-90,90);
    let tree = new cloud(x, 40 , z);
  }
  
  for(let i = 0; i < 10; i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let tree = new house(x, 0 , z);
  }

})
