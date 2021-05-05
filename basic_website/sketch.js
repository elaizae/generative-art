/* 👇 Start writing your p5.js code here */



 var x, y, w, h;

// amount of shapes for each shape 
 var shapesAmount = 30;
 var shapesAmount2 = 5;
 var shapesAmount3 = 0;

let button;
let permissionGranted = false;
// array of all my colors
let someColors1 = ["#48B9C1", "#923456", "#EFC1D4 ", "#84C1F9", "#000", "#D3DDE5", "#094C67"];
let randomColor;

 

 function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  noLoop();
  background(255);
    

var i = 0
   // draw the shapes
   stroke(255, 50);
   for (i = 0; i < shapesAmount; i++) {
      drawRandomShape("rectangle");
   }
   
   stroke (0, 50);
   for (i = 0; i < shapesAmount2; i++) {
      drawRandomShape("ellipse");
   }


   /* triangle doesnt work yet
   stroke (0, 50);
   for (i = 0; i < shapesAmount2; i++) {
      drawRandomShape("triangle");
   } 
   */

   // device
   if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
     //ios 13

      DeviceOrientationEvent.requestPermission()
     .catch(() => {

     let button = createButton("click to allow acces to sensors"); 
     button.style("font-size", "24px");
     button.center();
     button.mousePressed( requestAccess ); 
     throw error;
    })
    .then(() => {

      permissionGranted = true;
    })
     // button.createButton("click to allow acces to sensors");
     

   } else {
     //non 13
     textSize(48);
     text("non ios13 device, 100, 100");
    
   }
 }

  function requestAccess() {
    DeviceOrientationEvent.requestPermission()
  .then(response => {
    if (response == 'granted'){
      permissionGranted = true;
    } else {
      permissionGranted = false;
    }
  })
  .catch(console.error);

this.remove();
}




 function draw() {
if (!permissionGranted) return;
 

 

 function drawRandomShape(choice) {
   // sizes for the shapes
   x = random(width);
   y = random(height);
   w = random(25, 300);
   h = random(5, 300);
   //tw = random(25, 100);
   //th= random(25, 100);
   whc =random(50, 100)

   // give the shapes a color from the string
   randomColor= random(someColors1.length);
   randomColor= floor(randomColor);

   if (choice == "ellipse") {
     noStroke();
     fill(someColors1[randomColor]);
     ellipse(x, y, whc);
   }

   /*else if (choice == "triangle") {
   noStroke();
     fill(someColors1[randomColor]);
     triangle(x, y, x, x, h, w)
   }*/

  else {
     noStroke();
     fill(someColors1[randomColor]);
     rect(x, y, w, h);
   }
 } 
}


function deviceShaken(){
  redraw();
}
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}