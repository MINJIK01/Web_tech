"use strict"

// initialize canvas and facial factors' path
function initialize(){
    ctx.clearRect(0,0,600,600)
    face = new Path2D();
    left_eye = new Path2D();
    left_pupil = new Path2D();
    left_eyebrow = new Path2D();
    right_eye = new Path2D();
    right_pupil = new Path2D();
    right_eyebrow = new Path2D();
    mouth = new Path2D();
}

function nuetral(ctx){
    initialize();

    face.arc(300, 300, 250, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(face);

    left_eye.arc(200, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(left_eye);

    left_pupil.arc(200, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'blue';
    ctx.fill(left_pupil);

    left_eyebrow.arc(200,320,150,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = 'brown';
    ctx.fill(left_eyebrow);

    right_eye.arc(400, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(right_eye);

    right_pupil.arc(400, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill(right_pupil);

    right_eyebrow.arc(400,320,150,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = "grey";
    ctx.fill(right_eyebrow);

    mouth.arc(280,440,20,0,Math.PI,true);
    mouth.arc(320,440,20,0,Math.PI,true);
    mouth.arc(300,450,35,0,Math.PI,false);
    ctx.fillStyle = 'pink';
    ctx.fill(mouth);

    ctx.beginPath(); //nose start
    ctx.moveTo(270, 360);
    ctx.lineTo(300, 270);
    ctx.lineTo(330, 360);
    ctx.lineTo(280, 360);
    ctx.fillStyle = 'green';
    ctx.fill(); // fill nose color
    
}

function anger(ctx){
    initialize();

    face.arc(300, 300, 250, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(face);

    left_eye.arc(200, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(left_eye);

    left_pupil.arc(200, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'blue';
    ctx.fill(left_pupil);

    left_eyebrow.arc(220,50,150,Math.PI*1/3,Math.PI*3/4,false);
    ctx.fillStyle = 'purple';
    ctx.fill(left_eyebrow);

    right_eye.arc(400, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(right_eye);

    right_pupil.arc(400, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill(right_pupil);

    right_eyebrow.arc(390,50,150,Math.PI*1/4,Math.PI*2/3,false);
    ctx.fillStyle = "red";
    ctx.fill(right_eyebrow);

    // mouth.arc(280,440,20,Math.PI*1/4,Math.PI*2/3,true);
    // mouth.arc(320,440,20,Math.PI*1/4,Math.PI*2/3,true);
    mouth.arc(300,450,80,0,Math.PI,true);
    ctx.fillStyle = 'red';
    ctx.fill(mouth);
    mouth.arc(300,500,3,0,Math.PI,true);
    ctx.fillStyle = 'yellow';
    ctx.fill(mouth);

    ctx.beginPath(); //nose start
    ctx.moveTo(270, 360);
    ctx.lineTo(300, 270);
    ctx.lineTo(330, 360);
    ctx.lineTo(280, 360);
    ctx.fillStyle = 'green';
    ctx.fill(); // fill nose color
}

function happiness(ctx){
    initialize();

    // extra facial factor for happiness
    let cheek = new Path2D();

    face.arc(300, 300, 250, 0, Math.PI*2);
    ctx.fillStyle = 'yellow';
    ctx.fill(face);

    left_eye.arc(200, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(left_eye);

    left_pupil.arc(200, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'blue';
    ctx.fill(left_pupil);

    left_eyebrow.arc(200,320,160,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = 'brown';
    ctx.fill(left_eyebrow);

    right_eye.arc(400, 250, 50, 0, Math.PI*2);
    ctx.fillStyle = 'white';
    ctx.fill(right_eye);

    right_pupil.arc(400, 250, 10, 0, Math.PI*2);
    ctx.fillStyle = 'red';
    ctx.fill(right_pupil);

    right_eyebrow.arc(400,320,160,Math.PI*4/3,Math.PI*5/3,false);
    ctx.fillStyle = "grey";
    ctx.fill(right_eyebrow);

    cheek.arc(450, 340, 60,0,Math.PI*2)
    cheek.arc(150, 340, 60,0,Math.PI*2)
    ctx.fillStyle = "orange";
    ctx.fill(cheek);

    mouth.arc(300,400,100,0,Math.PI,false);
    ctx.fillStyle = 'pink';
    ctx.fill(mouth);

    ctx.beginPath(); //nose start
    ctx.moveTo(270, 360);
    ctx.lineTo(300, 270);
    ctx.lineTo(330, 360);
    ctx.lineTo(280, 360);
    ctx.fillStyle = 'green';
    ctx.fill(); // fill nose color
    
}

function clickeye(event) {
    let x = event.pageX;
    let y = event.pageY;

    // let close = False;
    if(ctx.isPointInPath(left_eye, x,  y)) {
        left_eye = new Path2D();
        left_eye.arc(200, 250, 50, 0, Math.PI*2);
        ctx.fillStyle = 'yellow';
        ctx.fill(left_eye);
        left_eye = new Path2D();
        left_eye.arc(200, 250, 50, 0, Math.PI,false);
        ctx.strokeStyle = 'black';
        ctx.stroke(left_eye);
        alert("in circle");
    } else {
        alert("out circle");
    }
    if(ctx.isPointInPath(right_eye, x,  y)) {
        right_eye = new Path2D();
        right_eye.arc(400, 250, 50, 0, Math.PI*2);
        ctx.fillStyle = 'yellow';
        ctx.fill(right_eye);
        right_eye = new Path2D();
        right_eye.arc(400, 250, 50, 0, Math.PI,false);
        ctx.strokeStyle = 'black';
        ctx.stroke(right_eye);
        alert("in circle");
    } else {
        alert("out circle");
    }
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

angerButton.addEventListener("click", function() { anger(ctx); }); // show anger expression
nuetralButton.addEventListener("click", function() { nuetral(ctx); }); // show nuetral expression
happinessButton.addEventListener("click", function() { happiness(ctx); }); // show happiness expression

canvas.addEventListener('click', clickeye);

nuetral(ctx);