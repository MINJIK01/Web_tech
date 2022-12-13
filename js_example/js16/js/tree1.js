"use strict";

// functions

function debugMessage(t) {
  console.log(t);
}

function clear(c) {
  context.fillStyle = c;
  context.fillRect(0, 0, 500, 500);
}

function toRadians(angle) {
  return angle*Math.PI/180.0;
}

function drawTree(rand, branchfan, inpafact, branchdensity,
    inphf, depth, angle, height, cx, cy) {
  let start, theta, heightfactor;
  let t1,t2,t3,t4,t5,t6,t7,t8,t9;
  if (depth==0) {
    context.fillStyle = leafcolour;
    let r = 2;
    context.beginPath();
    context.arc(cx,cy,r, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
  }
  else {
    start = angle-branchfan/2.0;
    theta = branchfan/branchdensity;
    if (depth<=2) heightfactor = inphf/2.0;
    else heightfactor = inphf;
    let x = height*Math.cos(toRadians(angle));
    let y = height*Math.sin(toRadians(angle));
    angle = start;
    context.strokeStyle = "rgb(70,80,60)";
    context.lineWidth   = Math.round(depth*1.2);
    context.beginPath();
      context.moveTo(cx+x, cy+y);
      context.lineTo(cx, cy);
    context.closePath();
    context.stroke();
    for (let i=1; i<branchdensity+2; i++) {
      t1 = branchfan*inpafact;
      t2 = inpafact;
      t3 = branchdensity;
      t4 = inphf;
      t5 = depth-1; 
      t8 = cx+x;
      t9 = cy+y;
      if (rand==0) {
        t6 = angle;
        t7 = height*heightfactor;
      }
      else  {
        t6 = angle-theta/2.0+Math.random()*theta;
        t7 = height*heightfactor*(0.5+Math.random()/1.5);
      }
      drawTree(rand,t1,t2,t3,t4,t5,t6,t7,t8,t9);
      angle=angle+theta;
    }    
  }
}

function draw(rand) {
  clear(backcolor);
   rand = 0;
  if (Math.random()>0.5) rand=1;
  let branchfan = 100.0+Math.random()*30.0;
  let inpafact = 0.6+0.3*Math.random();
  let branchdensity = 2 +Math.floor((Math.random()*3));
  let inphf = 0.6+0.2*Math.random();
  let depth = 3 + Math.floor(4*Math.random());
  let angle = 90.0;
  let height = 130.0+Math.random()*30.0;
  let t0 = Math.random();
  if (t0>0.66) 
    leafcolour = "rgb(50,180,50)";
  else if (t0>0.33)
    leafcolour = "rgb(180,50,50)";
  else
    leafcolour = "rgb(50,50,180)";
  drawTree(rand, branchfan, inpafact, branchdensity, inphf, depth,
           angle, height, WIDTH/2,10);
}

function stop() {
  console.log("stop");
  if (requestID) {
    window.cancelAnimationFrame(requestID);
    running = false;
  }
}

// animation frames
function nextFrame() {
  if (running) {
    setTimeout(function() {
      requestID = requestAnimationFrame(nextFrame);
      draw();
    }, 1500);
  }
}

function init() {
  mycanvas = document.getElementById('example');
  if (!mycanvas || !mycanvas.getContext) return;
  context = mycanvas.getContext('2d');
  WIDTH = mycanvas.width;
  HEIGHT = mycanvas.height;
  context.translate(0, mycanvas.height);
  context.scale(1, -1);
  //intervalId = setInterval(draw, 1500);  // 1.5 seconds
  //return intervalId;  
  nextFrame();
}

// **********************************************************************
// main program body

// setup global variables
// would be better to remove some of these and localise them in specific functions
let mycanvas = null;
let context = null;
let WIDTH;
let HEIGHT;
let intervalId = 0, requestID;
let leafcolour;
let backcolor = "rgb(255,255,255)"; //#fff";
let running = true;

// set up button
let b = document.getElementById("stopbutton");
b.addEventListener('click', stop, false);

//start program
init();