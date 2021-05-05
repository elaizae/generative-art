/* 👇 Start writing your p5.js code here */


 // rect (x, y, w, [h])
 // triangle(x1, y1, x2, y2, x3, y3)

 
 var x, y, w, h;

// amount of shapes for each shape 
 var shapesAmount = 30;
 var shapesAmount2 = 5;
 var shapesAmount3 = 0;

// array of all my colors
let someColors1 = ["#48B9C1", "#923456", "#EFC1D4 ", "#84C1F9", "#000", "#D3DDE5", "#094C67"];

let randomColor;


 function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("frame");
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

   

 function draw() {

 }

 

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

 function deviceShaken(){
  redraw();
 }}


 

  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}