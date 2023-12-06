//bodycolor bC Array
let bodyColorArray = [];

//bellycolor bLC Array
let bellyColorArray = [];

//spike1Color s1C  Array
let spike1ColorArray = [];

//mouth m Array
let mouthArray = [];

//eye e Array
let eyeArray = [];

//hat h Array
let hatArray = [];

let body;

//random variables, (number generated for arrays variable selection)
//some variables need to be connected:
//spike type linked with spike(x) color

let bC;
let blC;
let s1C;
let m;
let e;
let h;


function preload() {
  
  //body
   body = loadImage('Assets/bodylineart.png');
  
  // body color
  bodyColorArray[0] = loadImage('Assets/bodypurple.png');
  bodyColorArray[1] = loadImage('Assets/bodyblue.png');
  bodyColorArray[2] = loadImage('Assets/bodygreen.png');
  bodyColorArray[3] = loadImage('Assets/bodyyellow.png');
  bodyColorArray[4] = loadImage('Assets/bodyorange.png');
  bodyColorArray[5] = loadImage('Assets/bodyred.png');
  bodyColorArray[6] = loadImage('Assets/bodypink.png');
  bodyColorArray[7] = loadImage('Assets/bodywhite.png');
  
  //belly color
  bellyColorArray[0] = loadImage('Assets/bellypurple.png');
  bellyColorArray[1] = loadImage('Assets/bellyblue.png');
  bellyColorArray[2] = loadImage('Assets/bellygreen.png');
  bellyColorArray[3] = loadImage('Assets/bellyyellow.png');
  bellyColorArray[4] = loadImage('Assets/bellyorange.png');
  bellyColorArray[5] = loadImage('Assets/bellyred.png');
  bellyColorArray[6] = loadImage('Assets/bellypink.png');
  bellyColorArray[7] = loadImage('Assets/bellygrey.png');
  
 //spikes 
  spike1ColorArray[0] = loadImage('Assets/spike1purple.png');
  spike1ColorArray[1] = loadImage('Assets/spike1blue.png');
  spike1ColorArray[2] = loadImage('Assets/spike1green.png');
  spike1ColorArray[3] = loadImage('Assets/spike1yellow.png');
  spike1ColorArray[4] = loadImage('Assets/spike1orange.png');
  spike1ColorArray[5] = loadImage('Assets/spike1red.png');
  spike1ColorArray[6] = loadImage('Assets/spike1pink.png');
  spike1ColorArray[7] = loadImage('Assets/spike1grey.png');

  //mouth
  mouthArray[0] = loadImage('Assets/mouth1.png');
  mouthArray[1] = loadImage('Assets/mouth2.png');
  mouthArray[2] = loadImage('Assets/mouth3.png');
  mouthArray[3] = loadImage('Assets/mouth4.png');
  mouthArray[4] = loadImage('Assets/mouth5.png');
  
  //eye
  eyeArray[0] = loadImage('Assets/eye1.png'); 
  eyeArray[1] = loadImage('Assets/eye2.png');
  eyeArray[2] = loadImage('Assets/eye3.png');
  eyeArray[3] = loadImage('Assets/eye4.png');
  eyeArray[4] = loadImage('Assets/eye5.png');
  
  //hat
  hatArray[0] = loadImage('Assets/cowboyhat.png');
  hatArray[1] = loadImage('Assets/helicopterhat.png');
  hatArray[2] = loadImage('Assets/paperhat.png');
  hatArray[3] = loadImage('Assets/partyhat.png');
  hatArray[4] = loadImage('Assets/vikinghat.png');
  
}


function setup() {
  createCanvas(600, 600);
  background(255);
 
  var button = createButton('Clear');
  button.class('button');
  button.mousePressed(startOver);
  
  var button1 = createButton('Body Color');
  button1.class('button');
  button1.mousePressed(colorBody);

  var button5 = createButton('Mouth Type');
  button5.class('button');
  button5.mousePressed(drawMouth);
  
  var button2 = createButton('Belly Color');
  button2.class('button');
  button2.mousePressed(colorBelly);
  
  var button4 = createButton('Spike Color');
  button4.class('button');
  button4.mousePressed(colorSpike);
  
  var button6 = createButton('Eye Type');
  button6.class('button');
  button6.mousePressed(drawEye);
  
  var button7 = createButton('Hat');
  button7.class('button');
  button7.mousePressed(drawHat);

  var button8 = createButton('Randomize');
  button8.class('button');
  button8.mousePressed(dinoRando);
  
}

function draw() {
}

function startOver() {
 background(255);
} 

function colorBody() {
 //background(255);
 let bC = int(random(bodyColorArray.length));
 image(bodyColorArray[bC],int(random()), int(random()), width,height);
 image(body,0,0,width,height)
}

function colorBelly() {
 //background(255);
 let blC = int(random(bellyColorArray.length));
 image(bellyColorArray[blC],int(random()), int(random()), width,height);
}

function colorSpike() {
  let s1C = int(random(spike1ColorArray.length));
  image(spike1ColorArray[s1C],int(random()), int(random()), width,height);
}

function drawMouth() {
  let m = int(random(mouthArray.length));
  image(mouthArray[m],int(random()), int(random()), width,height);
}

function drawEye() {
  let e = int(random(eyeArray.length));
  image(eyeArray[e],int(random()), int(random()), width,height);
}

function drawHat() {
  let h = int(random(hatArray.length));
  image(hatArray[h],int(random()), int(random()), width,height);
  image(body,0,0,width,height);
}

function dinoRando() {
  background(255);
  let bC = int(random(bodyColorArray.length));
 image(bodyColorArray[bC],int(random()), int(random()), width,height);
 image(body,0,0,width,height)
  let blC = int(random(bellyColorArray.length));
 image(bellyColorArray[blC],int(random()), int(random()), width,height);
  let s1C = int(random(spike1ColorArray.length));
 image(spike1ColorArray[s1C],int(random()), int(random()), width,height);
  let m = int(random(mouthArray.length));
 image(mouthArray[m],int(random()), int(random()), width,height);
  let e = int(random(eyeArray.length));
 image(eyeArray[e],int(random()), int(random()), width,height);
  let h = int(random(hatArray.length));
 image(hatArray[h],int(random()), int(random()), width,height);
 image(body,0,0,width,height);
}











