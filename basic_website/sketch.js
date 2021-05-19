// FINALLY ITS WORKS
 var x, y, w, h;

// amount of shapes for each shape 
 //var shapesAmount = 30;
 //var shapesAmount2 = 1;
 //var shapesAmount3 = 0;


 //var pinkFabric;
 //var redFabric;

 // array of all my colors
someColors1 = ["#48B9C1", "#923456", "#EFC1D4 ", "#84C1F9", "#000", "#D3DDE5", "#094C67", "#46594c", "#3C2320",  "#d98e73", "#F2AD85", "#A49B8F", "#812F14", "#C9532A", "#DF5428"];

let permissionGranted = false;


let randomColor;

let cx, cy;
//let pinkFabric;
//let redFabric;

//let fabrics = [ "pinkFabric", "redFabric"];
//let showFabric;

//function preload() {
//pinkFabric = loadImage('img/pink.JPG');
//redFabric = loadImage('img/red.JPG');
//}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  // myCanvas.parent("frame");
  
  setMoveThreshold(0.1);
  
  //background(255);
  

  cx = width/2;
  cy = height/2; 
 

  // Sources for the motion permission code 
  // I combined the code from here https://www.youtube.com/watch?v=AbB9ayaffTc with the code from here https://www.tutorialguruji.com/javascript/deviceshaken-and-devicemoved-not-working-on-p5-js-sketch/
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
    textSize(22);
    text("use of your phone", 100, 100);
   
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
//noLoop();
 }


   /* triangle doesnt work yet
   stroke (0, 50);
   for (i = 0; i < shapesAmount2; i++) {
      drawRandomShape("triangle");
   } 
   */

   

 function draw() {
 
//var i = 0;

// draw the shapes

let stop = '';



  //for (let i = 0; i < shapesAmount2; i++) {
    // drawRandomShape("ellipse");
     //const timesDrawn = i + 1;
    
  //}
    





 function drawRandomShape(choice) {
   noLoop();
   // sizes for the shapes
   x = random(width);
   y = random(height);
   w = random(25, 150);
   h = random(5, 150);
   //tw = random(25, 100);
   //th= random(25, 100);
   // circle x and y
   whc =random(50, 100)

   // give the shapes a color from the string
   randomColor= random(someColors1.length);
   randomColor= floor(randomColor);

   //showFabric= random(fabrics.length);
   //showFabric= floor(showFabric);
   if (choice == "ellipse") {
    noStroke();
  
    //img.mask(fabrics[showFabric]);
    fill(someColors1[randomColor]);
    ellipse(x, y, whc);
   // const timesDrawn = pi + 1;
    
  }
  else {
    noStroke();
    
   fill(someColors1[randomColor]);
    rect(x, y, w, h);
  
  }
 
 }
 stroke(255, 50);
 for (let i = 0; i < 35; i++) {
 drawRandomShape("rectangle");
 if (i > 35) break;
 }
 }
 

//if (!permissionGranted) return;
 
//loop();

 // only make sure my circle moves
 loop();


 

function deviceMoved(){
  var Youcircle = ellipse(cx, cy , 10);
 // dont go off the screen
  const dx = constrain(rotationY, -3,3);
  const dy = constrain(rotationX, -3,3);
  // circle speed 
  cx += dx;
  cy += dy; 
  // dont go off the screen
  cx = constrain(cx, 0,  width);
  cy = constrain(cy, 0, height);
setMoveThreshold(0.5);
  fill(someColors1[randomColor]);
  Youcircle();
  
  
  

}

function mouseClicked(){
  randomColor= random(someColors1.length);
  randomColor= floor(randomColor);
  fill(someColors1[randomColor]);
  

}

function mousePressed(){
  randomColor= random(someColors1.length);
  randomColor= floor(randomColor);
  fill(someColors1[randomColor]);
  

}



  //redraw();

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}