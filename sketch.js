//bodycolor bC Array
let bCArray = ['']
let bodyColorArray = ['']

//bellycolor bLC Array
let bLCArray = ['']
let bellyColorArray = ['']

//spiketype sT Array
let sTArray = ['']
let spikeTypeArray = ['']

//spike1Color s1C  Array
let s1CArray = ['']
let spike1ColorArray = ['']

//spike2Color s2C Array
let s2CArray = ['']
let spike2ColorArray = ['']

//spike3Color s3C Array
let s3CArray = ['']
let spike3ColorArray = ['']

//spike4Color s4C Array
let s4CArray = ['']
let spike4ColorArray = ['']

//spike5Color s5C Array
let s5CArray = ['']
let spike5ColorArray = ['']

//mouth m Array
let mArray = ['']
let mouthArray = ['']

//eye e Array
let eArray = ['']
let eyeArray = ['']

//hat h Array
let hArray = ['']
let hatArray = ['']

let body;
let bodyColor = [];
let bellyColor = [];
let spikeType = [];
let spike1;
let spike1Color = [];
let spike2;
let spike2Color = [];
let spike3;
let spike3Color = [];
let spike4;
let spike4Color = [];
let spike5;
let spike5Color = [];
let mouth = [];
let eye = [];
let hat = [];

//random variables, (number generated for arrays variable selection)
//some variables need to be connected:
//spike type linked with spike(x) color

let bC;
let blC;
let sT;
let s1C;
let s2C;
let s3C;
let s4C;
let s5C;
let m;
let e;
let h;


function preload() {
  
  //body
   body = loadImage("Assets/bodylineart.png");
  
  // body color
  // bodyColor[0] = loadImage();
  // bodyColor[1] = loadImage();
  // bodyColor[2] = loadImage();
  // bodyColor[3] = loadImage();
  // bodyColor[4] = loadImage();
  // bodyColor[5] = loadImage();
  // bodyColor[6] = loadImage();
  // bodyColor[7] = loadImage();
  
  //belly color
  //bellyColor[0] = loadImage();
  //bellyColor[1] = loadImage();
  //bellyColor[2] = loadImage();
  //bellyColor[3] = loadImage();
  //bellyColor[4] = loadImage();
  //bellyColor[5] = loadImage();
  //bellyColor[6] = loadImage();
  //bellyColor[7] = loadImage();
  
  //spike1
  //spike1 = loadImage();
  
  //spike1 color
  //spike1Color[0] = loadImage();
  //spike1Color[1] = loadImage();
  //spike1Color[2] = loadImage();
  //spike1Color[3] = loadImage();
  //spike1Color[4] = loadImage();
  //spike1Color[5] = loadImage();
  //spike1Color[6] = loadImage();
  //spike1Color[7] = loadImage();
  
  //spike2
  //spike2 = loadImage();
  
  //spike2 color
  //spike2Color[0] = loadImage();
  //spike2Color[1] = loadImage();
  //spike2Color[2] = loadImage();
  //spike2Color[3] = loadImage();
  //spike2Color[4] = loadImage();
  //spike2Color[5] = loadImage();
  //spike2Color[6] = loadImage();
  //spike2Color[7] = loadImage();
  
  //spike3
  //spike3 = loadImage();
  
  //spike3 color
  //spike3Color[0] = loadImage();
  //spike3Color[1] = loadImage();
  //spike3Color[2] = loadImage();
  //spike3Color[3] = loadImage();
  //spike3Color[4] = loadImage();
  //spike3Color[5] = loadImage();
  //spike3Color[6] = loadImage();
  //spike3Color[7] = loadImage();
  
  //spike4
  //spike4 = loadImage();
  
  //spike4 color
  //spike4Color[0] = loadImage();
  //spike4Color[1] = loadImage();
  //spike4Color[2] = loadImage();
  //spike4Color[3] = loadImage();
  //spike4Color[4] = loadImage();
  //spike4Color[5] = loadImage();
  //spike4Color[6] = loadImage();
  //spike4Color[7] = loadImage();
  
  //spike5
  //spike5 = loadImage();
  
  //spike5 color
  //spike5Color[0] = loadImage();
  //spike5Color[1] = loadImage();
  //spike5Color[2] = loadImage();
  //spike5Color[3] = loadImage();
  //spike5Color[4] = loadImage();
  //spike5Color[5] = loadImage();
  //spike5Color[6] = loadImage();
  //spike5Color[7] = loadImage();
  
  //mouth
  //mouth1 = loadImage();
  //mouth2 = loadImage();
  //mouth3 = loadImage();
  //mouth4 = loadImage();
  //mouth5 = loadImage();
  
  //eye
  //eye1 = loadImage(); 
  //eye2 = loadImage();
  //eye3 = loadImage();
  //eye4 = loadImage();
  //eye5 = loadImage();
  
  //hat
  //hat1 = loadImage();
  //hat2 = loadImage();
  //hat3 = loadImage();
  //hat4 = loadImage();
  //hat5 = loadImage();
  
}


function setup() {
  createCanvas(600, 600);
  background(255);
 
  var button = createButton('Re-Do');
  button.class('button');
  button.mousePressed(startOver);
  
  var button1 = createButton('Body Color');
  button.class('button');
  button.id('button1');
  button1.mousePressed(colorBody);
  
  var button2 = createButton('Belly Color');
  button.class('button');
  button.id('button2');
  button2.mousePressed(colorBelly);
  
  var button3 = createButton('Spike Type');
  button.class('button');
  button.id('button3');
  button3.mousePressed(drawSpike);
  
  var button4 = createButton('Spike Color');
  button.class('button');
  button.id('button4');
  button4.mousePressed(colorSpike);
  
  var button5 = createButton('Mouth Type');
  button.class('button');
  button.id('button5');
  button5.mousePressed(drawMouth);
  
  var button6 = createButton('Eye Type');
  button.class('button');
  button.id('button6');
  button6.mousePressed(drawEye);
  
  var button7 = createButton('Hat');
  button.class('button');
  button.id('button7');
  button7.mousePressed(drawHat);
  
}

function draw() {
}

function startOver() {
  console.log("work");
  background(0);
  image(body,0,200);
} 

function colorBody() {}

function colorBelly() {}

function drawSpike() {}

function colorSpike() {}

function drawMouth() {}

function drawEye() {}

function drawHat() {}











