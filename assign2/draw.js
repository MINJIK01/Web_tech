"use strict"

// initialize canvas and facial factors' path
function initialize(){
    ctx.clearRect(0,0,600,600) // clear the canvas
    face = new Path2D();
    left_eye = new Path2D();
    left_pupil = new Path2D();
    left_eyebrow = new Path2D();
    right_eye = new Path2D();
    right_pupil = new Path2D();
    right_eyebrow = new Path2D();
    mouth = new Path2D();
}

function cheeks(){
    // drawing cheeks
    cheek.arc(450, 340, 70,0,Math.PI*2)
    cheek.arc(150, 340, 70,0,Math.PI*2)
    ctx.fillStyle = "orange";
    ctx.fill(cheek);
}

function nuetral(ctx){
    initialize(); // initialize canvas
    state = "nuetral"; // change the expression state as a nuetral
    eye_count = 0; // reset eye count

    // drawing face
    face.arc(300, 300, 250, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(face);

    // drawing left eye
    left_eye.arc(200, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(left_eye);

    // drawing left pupil
    left_pupil.arc(200, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'blue';
    ctx.fill(left_pupil);

    // drawing left eyebrow
    left_eyebrow.arc(200,320,150,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = 'brown';
    ctx.fill(left_eyebrow);

    // drawing right eye
    right_eye.arc(400, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(right_eye);

    // drawing right pupil
    right_pupil.arc(400, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill(right_pupil);

    // drawing right eyebrow
    right_eyebrow.arc(400,320,150,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = "grey";
    ctx.fill(right_eyebrow);

    // drawing mouth
    mouth.arc(280,440,20,0,Math.PI,true);
    mouth.arc(320,440,20,0,Math.PI,true);
    mouth.arc(300,450,35,0,Math.PI,false);
    ctx.fillStyle = 'pink';
    ctx.fill(mouth);

    // drawing nose
    ctx.beginPath(); //nose start
    ctx.moveTo(270, 360);
    ctx.lineTo(300, 270);
    ctx.lineTo(330, 360);
    ctx.lineTo(280, 360);
    ctx.fillStyle = 'green';
    ctx.fill(); // fill nose color
    
}

function anger(ctx){
    initialize(); // initialize canvas
    state = "anger"; // change the expression state as an anger
    eye_count = 0; // reset eye count

    // drawing face
    face.arc(300, 300, 250, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(face);

    // drawing left eye
    left_eye.arc(200, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(left_eye);

    // drawing left pupil
    left_pupil.arc(200, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'blue';
    ctx.fill(left_pupil);

    // drawing left eyebrow
    left_eyebrow.arc(220,40,150,Math.PI*1/3,Math.PI*3/4,false);
    ctx.fillStyle = 'purple';
    ctx.fill(left_eyebrow);

    // drawing right eye
    right_eye.arc(400, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(right_eye);

    // drawing right pupil
    right_pupil.arc(400, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill(right_pupil);

    // drawing right eyebrow
    right_eyebrow.arc(390,40,150,Math.PI*1/4,Math.PI*2/3,false);
    ctx.fillStyle = "red";
    ctx.fill(right_eyebrow);

    // drawing mouth
    mouth.arc(300,450,80,0,Math.PI,true);
    ctx.fillStyle = 'red';
    ctx.fill(mouth);

    // drawing nose
    ctx.beginPath(); //nose start
    ctx.moveTo(270, 360);
    ctx.lineTo(300, 270);
    ctx.lineTo(330, 360);
    ctx.lineTo(280, 360);
    ctx.fillStyle = 'green';
    ctx.fill(); // fill nose color
}

function happiness(ctx){
    initialize(); // initialize canvas
    state = "happiness"; // change the expression state as a happiness
    eye_count = 0; // reset eye count

    // drawing face
    face.arc(300, 300, 250, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(face);

    // drawing left eye
    left_eye.arc(200, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(left_eye);

    // drawing left pupil
    left_pupil.arc(200, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'blue';
    ctx.fill(left_pupil);

    // drawing left eyebrow
    left_eyebrow.arc(200,320,160,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = 'brown';
    ctx.fill(left_eyebrow);

    // drawing right eye
    right_eye.arc(400, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(right_eye);

    // drawing right pupil
    right_pupil.arc(400, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill(right_pupil);

    // run the cheek drawing function
    cheeks()

    // drawing right eyebrow
    right_eyebrow.arc(400,320,160,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = "grey";
    ctx.fill(right_eyebrow);

    // drawing mouth
    mouth.arc(300,400,100,0,Math.PI,false);
    ctx.fillStyle = 'pink';
    ctx.fill(mouth);

    // drawing nose
    ctx.beginPath(); //nose start
    ctx.moveTo(270, 360);
    ctx.lineTo(300, 270);
    ctx.lineTo(330, 360);
    ctx.lineTo(280, 360);
    ctx.fillStyle = 'green';
    ctx.fill(); // fill nose color
    
}

// function for clearing a left eye area
function clear_lefteye() {
    left_eye = new Path2D();
    left_eye.arc(200, 250, 60, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(left_eye);
}

// function for clearing a right eye area
function clear_righteye() {
    right_eye = new Path2D();
    right_eye.arc(400, 250, 60, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(right_eye);
}

// function for eye clicking event
function eyeClicking(x,y) {
    // for left eye clicked
    if(ctx.isPointInPath(left_eye, x,  y) && close_left == false) {
        // clear the left eye area
        clear_lefteye();

        // draw closing left eye
        left_eye = new Path2D();
        left_eye.arc(200, 250, 50, 0, Math.PI,false);
        ctx.strokeStyle = 'black';
        ctx.stroke(left_eye);

        // if current expression state is happiness, then redraw cheeks
        if (state == "happiness"){
            cheeks();
        }

        close_left = true; // chage the state to the opening
        eye_count ++; // increase the time of eye clicking
    } else if(ctx.isPointInPath(left_eye, x,  y) && close_left == true){
        // clear the left eye area
        clear_lefteye()

        // drawing a left eye and pupil
        left_eye = new Path2D();
        left_eye.arc(200, 250, 50, 0, Math.PI*2);
        ctx.fillStyle = '#ffbf80';
        ctx.fill(left_eye);

        left_pupil.arc(200, 250, 10, 0, Math.PI*2);
        ctx.fillStyle = 'blue';
        ctx.fill(left_pupil);

        if (state == "happiness"){
            cheeks();
        }

        close_left = false; // chage the state to the opening
        eye_count ++; // increase the time of eye clicking
    }

    // for right eye
    if(ctx.isPointInPath(right_eye, x, y) && close_right == false) {
        // clear the right eye area
        clear_righteye();

        // draw closing right eye
        right_eye = new Path2D();
        right_eye.arc(400, 250, 50, 0, Math.PI,false);
        ctx.strokeStyle = 'black';
        ctx.stroke(right_eye);

        if (state == "happiness"){
            cheeks();
        }

        close_right = true; // chage the state to the opening
        eye_count ++; // increase the time of eye clicking
    } else if(ctx.isPointInPath(right_eye, x, y) && close_right == true){
        // clear the right eye area
        clear_righteye()

        // drawing a right eye and pupil
        right_eye = new Path2D();
        right_eye.arc(400, 250, 50, 0, Math.PI*2);
        ctx.fillStyle = '#ffbf80';
        ctx.fill(right_eye);

        right_pupil.arc(400, 250, 10, 0, Math.PI*2);
        ctx.fillStyle = 'red';
        ctx.fill(right_pupil);

        if (state == "happiness"){
            cheeks();
        }

        close_right = false; // chage the state to the opening
        eye_count ++; // increase the time of eye clicking
    }
}

// function for mouth clicking event
function mouthClicking(x, y){
    // change the color of mouth when expression is nuetral
    if (ctx.isPointInPath(mouth, x,  y) && state == "nuetral") {
        // erasing mouth
        mouth = new Path2D();
        mouth.arc(280,440,20,0,Math.PI,true);
        mouth.arc(320,440,20,0,Math.PI,true);
        mouth.arc(300,450,35,0,Math.PI,false);
        ctx.fillStyle = 'yello';
        ctx.fill(mouth);

        // changing neutral mouth color
        mouth = new Path2D();
        mouth.arc(280,440,20,0,Math.PI,true);
        mouth.arc(320,440,20,0,Math.PI,true);
        mouth.arc(300,450,35,0,Math.PI,false);
        ctx.fillStyle = '#009999';
        ctx.fill(mouth);
    } else if (ctx.isPointInPath(mouth, x,  y) && state == "anger"){ // change the color of mouth when expression is anger
        // erasing mouth
        mouth = new Path2D();
        mouth.arc(300,450,85,0,Math.PI,true);
        ctx.fillStyle = 'yellow';
        ctx.fill(mouth);

        // changing anger mouth color
        mouth = new Path2D();
        mouth.arc(300,450,80,0,Math.PI,true);
        ctx.fillStyle = '#39ac39';
        ctx.fill(mouth); 
    } else if (ctx.isPointInPath(mouth, x,  y) && state == "happiness"){ // change the color of mouth when expression is happiness
        // erasing mouth
        mouth = new Path2D();
        mouth.arc(300,400,100,0,Math.PI,false);
        ctx.fillStyle = 'yellow';
        ctx.fill(mouth);

        // changing anger mouth color
        mouth = new Path2D();
        mouth.arc(300,400,100,0,Math.PI,false);
        ctx.fillStyle = '#990099';
        ctx.fill(mouth);
    }
}

// function for event call
function doSomthing(event) {
    let x = event.pageX;
    let y = event.pageY;

    // if user click eye more than 5 times then change expression to the anger
    if (eye_count > 5){
        if (state == "anger"){
            anger(ctx);
            mouth = new Path2D();
            mouth.arc(300,400,100,0,Math.PI,false);
            ctx.fillStyle = 'yellow';
            ctx.fill(mouth);

            // changing anger mouth color
            mouth = new Path2D();
            mouth.arc(300,450,80,0,Math.PI,true);
            mouth.arc(300,450,80,0,Math.PI,false);
            ctx.fillStyle = 'red';
            ctx.fill(mouth); 
        } else{
            anger(ctx);
        }
    } else {
        eyeClicking(x,y);
    }

    // run mouth clicking fucntion
    mouthClicking(x, y);

}



// main program
// saving canvas and context
let canvas = document.getElementById('face');
let ctx = canvas.getContext('2d'); 

let angerButton = document.getElementById("button_anger"); // get the Id of anger button
let nuetralButton = document.getElementById("button_neutral"); // get the Id of nuetral button
let happinessButton = document.getElementById("button_happy"); // get the Id of happiness button

// initialize factors for face
let face = new Path2D();
let left_eye = new Path2D();
let left_pupil = new Path2D();
let left_eyebrow = new Path2D();
let right_eye = new Path2D();
let right_pupil = new Path2D();
let right_eyebrow = new Path2D();
let mouth = new Path2D();
// extra facial factor for happiness
let cheek = new Path2D();

// variable for checking current state of eyes open
let close_left = false;
let close_right = false;

// counting eye clicking number
let eye_count = 0;

// variables for the noticing state of current expression
let state = "nuetral";

angerButton.addEventListener("click", function() { anger(ctx); }); // show anger expression
nuetralButton.addEventListener("click", function() { nuetral(ctx); }); // show nuetral expression
happinessButton.addEventListener("click", function() { happiness(ctx); }); // show happiness expression

canvas.addEventListener('click', doSomthing);

// show initial facial expression
nuetral(ctx);