"use strict"

function draw() {
    let ctx = document.getElementById('face').getContext('2d');
    ctx.beginPath();
    let face = new Path2D();
    face.arc(350, 350, 250, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill(face);

    // ctx.beginPath();
    // ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    // ctx.moveTo(110,75);
    // ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
    // ctx.moveTo(65,65);
    // ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    // ctx.moveTo(95,65);
    // ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    // ctx.stroke();
}

draw();