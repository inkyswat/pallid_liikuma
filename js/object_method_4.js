
// Converts from degrees to radians.
Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};
var menu = {
    width: 250,
    border: 5,
    bg_color: "#a0e2de",
    text_color: "#010101",
    fontSize: "19px serif"
}
var checkbox = {
    width: 10,
    height: 10,
    line_width: 3
}
function draw_checkbox(posX, posY) {
    ctx.beginPath();
    ctx.moveTo(posX, posY); // määrab punkti asukoha
    ctx.lineTo(posX + checkbox.width, posY);// määrab joone uue suuna
    ctx.lineTo(posX + checkbox.width, posY + checkbox.height);// määrab joone uue suuna
    ctx.lineTo(posX, posY + checkbox.height);// määrab joone uue suuna
    ctx.closePath(); // sulgeb joonte jada alguspunktiga kokku
    ctx.stroke();


    // this.ctx.beginPath();
    // this.ctx.fillRect()
    // this.ctx.fillStyle = "#0a0178";
    // this.ctx.fill();
    
}
class wheel {
    constructor (posX, posY, MoveSpeed, radius, radiusChange, direction, Accel) {
        this.posX = posX;
        this.posY = posY;
        this.MoveSpeed = MoveSpeed;
        this.radius = radius;
        this.radiusChange = radiusChange;
        this.direction = direction;
        this.Accel = Accel;
        this.ctx = getCanvas();
    }
    manipul (direction = this.direction) {
        
        if (this.radius > 1 && this.radius < 500 ) {
            this.radius += this.radiusChange; // radius ei tohi olla negatiivne, siis peksab seghašt!
            this.MoveSpeed += this.Accel;

            if (this.radius < 1) { // paneme raadiuse nulliks kui tahab negatiivseks minna
                this.radius = 0;
            }
            else if (this.direction > 0 && this.direction < 90 || this.direction > 270 && this.direction < 360) {
                this.posY += this.MoveSpeed * Math.sin(Math.radians(this.direction));
                this.posX += this.MoveSpeed * Math.cos(Math.radians(this.direction));
            }
            else if (this.direction > 90 && this.direction < 180 || this.direction > 180 && this.direction < 270) {
                this.posY += this.MoveSpeed * Math.sin(Math.radians(this.direction));
                this.posX += this.MoveSpeed * Math.cos(Math.radians(this.direction));
            }
            else if (direction == 0 || direction == 360) {
                this.posX += this.MoveSpeed;
            }
            else if (direction == 90) {
                // console.log(this.MoveSpeed);
                this.posY += this.MoveSpeed;
            }
            else if (direction == 180) {
                this.posX -= this.MoveSpeed;
            }
            else if (direction == 270) {
                
                this.posY -= this.MoveSpeed;
            }
            else {

            }

        }
        else {
            
        } 
    }
    draw (posX, posY, radius) {
        var BallCol = this.direction.toString(); //direction.toString();

        this.ctx.beginPath();
        this.ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
        // this.ctx.fillStyle = "#" + BallCol;//"#0a0178";

        if (this.direction < 120) {
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = "#" + (parseInt(this.direction)*10).toString();//"#0a0178";
            this.ctx.stroke();

        }
        else {
            this.ctx.fillStyle = "#" + (parseInt(this.direction)*5).toString();//"#0a0178";
            this.ctx.fill();
        }
    }
}
var getCanvas = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    return ctx;
}

function time(milliseconds) {
    var millisecond = setTimeout()
}
function DrawMenu() {
    ctx.fillStyle = "#0";
    ctx.fillRect(canvas.width-menu.width-1, 0, 1, canvas.height);
    ctx.fillStyle = menu.bg_color;
    ctx.fillRect(canvas.width - menu.width + menu.border, menu.border, menu.width - menu.border*2, canvas.height-menu.border*2);
    ctx.fillStyle = menu.text_color;
    ctx.font = menu.fontSize;
    ctx.fillText("Pallide katsetused!", canvas.width - menu.width + menu.border + 4, menu.border + 17);
    draw_checkbox(10,10);
}
function ClearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// checkbox

// canvas loop
function joonista() {
    ClearCanvas(); // canvase puhastamine   
    DrawMenu();  // menüü joonistamine   
 // objektide joonistamine   
 for (let i = 0; i < wheels.length; i++) {   
    wheels[i].draw(wheels[i].posX, wheels[i].posY, wheels[i].radius);
    wheels[i].manipul();
 }
   
    requestAnimationFrame(joonista); // refreshimine jääb seisma kui mujale tab'i peale minna

}


var ctx = getCanvas();
var wheels = [];
for (let i = 0; i < 500; i++) {
    let r = parseInt(10 + Math.random() * 45);
    let x = parseInt(r + Math.random() * (canvas.width - 2 * r)); // et pall tekiks canvase alass on vaja ruudu laius maha lahutada
    let y = parseInt(r + Math.random() * (canvas.height - 2 * r));
    let MoveSpeed = 1+parseInt(Math.random()*8);
    var direction = 360*Math.random();
    let Accel = Math.random()*0.03-0.04;
    let radiusChange = Math.random() * 1.3 - 1.1;
    wheels.push(new wheel(400, 300, MoveSpeed, r, radiusChange , direction, Accel));
}
// var wheel1 = new wheel(100, 100, 5, 1, 30, 1.1, 270, -0.05);


requestAnimationFrame(joonista);

// var muhkel = Math.radians(direction);
// console.log(muhkel);
// console.log(direction);


