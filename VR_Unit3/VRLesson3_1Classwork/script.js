window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  let myCylinder = document.querySelector("#myCylinder");
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML


  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("height",2);
  })

  myCylinder.addEventListener("mouseenter",function(){
    this.setAttribute("height",2);
  })
  myCylinder.addEventListener("mouseleave ",function(){
    this.setAttribute("opacity","1");
  })
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox
  myBox.addEventListener("mouseleave",function(){
    this.setAttribute("height","1")
  })
  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero
   myCylinder.onclick = function(){
   myCylinder.setAttribute("opacity","0");
   }
})
