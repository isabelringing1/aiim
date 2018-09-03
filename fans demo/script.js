var fanCanvas = document.getElementById("fanCanvas");
fanCanvas.width = 900;
fanCanvas.height = 800;
 
var ctx = fanCanvas.getContext("2d");
var ctr = 0;

var pattern = 1;
var speed = 1;
var color = "#"+((1<<24)*Math.random()|0).toString(16);

function drawSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

document.addEventListener('DOMContentLoaded', function() {
    frame();

    document.addEventListener('click', function(e) {
        if(/button/.test(e.target.className)) {
            pattern = e.target.id;
            color = "#"+((1<<24)*Math.random()|0).toString(16);
        }
    });

    document.getElementById('speed').oninput = function(){
        speed = this.value/10.0;
        console.log(speed);
    };
});


function frame(){
    ctr += .003 * speed;
    ctx.clearRect(0, 0, fanCanvas.width, fanCanvas.height);
    drawFanArray();
    requestAnimationFrame(frame);
}

function drawFanArray(){
    for(var i = 0; i < 6; i++){
        for(var j = 0; j<5; j++){
            angle = getAngle(i, j, pattern);
            drawSlice(ctx, 50 + i * 150, 50 + j * 150, 50,  -1, angle - 1, color);
        }
    }
}

function getAngle(i, j, pattern){
    if (pattern==1){
        angle = Math.sin(ctr * Math.PI - Math.PI/2 + (i%2)) + 1;
    }
    else if (pattern==2){
        angle = Math.sin(ctr * Math.PI - Math.PI/2 + (1-j/4)) + 1;
    }
    else if (pattern==3){
        angle = Math.sin(ctr * Math.PI - Math.PI/2 + (i+j)/8) + 1;
    }
    else if (pattern==4){
        angle = (i%2 == 0? Math.sin(ctr * Math.PI): Math.cos(ctr * Math.PI)) + 1;
    }
    return angle;
}

/*FORMULA: a * Math.sin(b * ctr + c) + d
    a: controls the maximum angle the fan will swoop to (amplitude)
    b: controls the speed of the fan (frequency)
    c: 
    d: controls where the fan starts and stops (vertical translation)

DESIGNS:
horizontal offset: var angle = Math.sin(ctr * Math.PI - Math.PI/2 + (1-i/6)) + 1;
vertical offset: var angle = Math.sin(ctr * Math.PI - Math.PI/2 + (1-j/6)) + 1;
alternating open close: var angle = (i%2 == 0? Math.sin(ctr * Math.PI - Math.PI/2): Math.cos(ctr * Math.PI - Math.PI/2));

*/