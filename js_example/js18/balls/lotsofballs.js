// Author: Steve Maddock

// functions

function clear(context) {
  context.clearRect(0, 0, WIDTH, HEIGHT);
}

// initialise all the balls
function initBalls() {
  var balls = new BallList();           // A data structure to hold the collection of balls

  for (i=0; i < NUM_BALLS; ++i) {   // add NUM_BALLS to the data structure for the balls
    var r = 5+Math.random()*25;     // create random values for each attribute
    var sx = Math.random()*WIDTH;   // could add the initialisation process to the Ball constructor
    var sy = Math.random()*HEIGHT;
    var dx = Math.random()*10-5;
    var dy = Math.random()*10-5;
    var red = Math.floor(Math.random()*256); // red, green and blue have to be integer values
                                             // so use Math.floor()
                                             // alpha must be in range 0 to 1
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);  
    var alpha = Math.random();
    var c = "rgba("+red+","+green+","+blue+","+alpha+")";
    //console.log(c);                      // print debugging info if necessary
    //console.log(sx+", "+sy);
    var ball = new Ball(sx,sy,r,dx,dy,c);  // create a new Ball object
    balls.add(ball);                       // add the Ball object to the data structure for the balls
  }
  
  return balls;
}

// draw all the balls
function drawBalls(context, balls) {
  balls.draw(context);
}

// update all the balls
function updateBalls(balls) {
  for (var i = 0; i < balls.getNumBalls(); ++i) {
    var ball = balls.get(i);
    // bounce the balls off the sides, if necessary
    var bxNext = ball.getX() + ball.getDX(); // could a method to check next position in ball class
    if (bxNext > WIDTH || bxNext < 0) {
      ball.setDX(-ball.getDX());      // reverse direction
    }
    // bounce the balls off the top or bottom, if necessary
    var byNext = ball.getY() + ball.getDY();  
    if (byNext > HEIGHT || byNext < 0) {
      ball.setDY(-ball.getDY());      // reverse direction
    }
  }
  // now update the positions of the balls      
  for (var i = 0; i < balls.getNumBalls(); ++i) {
    var ball = balls.get(i);
    ball.setX( ball.getX() + ball.getDX() );  // could add a ball.update method
    ball.setY( ball.getY() + ball.getDY() );
  }
}    

// animation frames
function nextFrame() {
  requestID = requestAnimationFrame(nextFrame);
  updateBalls(balls);
  clear(context);
  drawBalls(context, balls);
}

// main program body
var canvas = document.getElementById("canvas_example");
var context = canvas.getContext("2d");
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var requestID;

var NUM_BALLS = BallList.MAX_NUMBALLS;
var balls = initBalls();
        
// start
drawBalls(context, balls);
// start animation
nextFrame();
