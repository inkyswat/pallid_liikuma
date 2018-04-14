
class wheel {
    constructor (posX, posY, MoveSpeed, SpeedLimit, radius, radiusChange, direction, Accel) {

    this.posX = posX;
    this.posY = posY;
    this.MoveSpeed = MoveSpeed;
    this.SpeedLimit = SpeedLimit;
    this.radius = radius;
    this.radiusChange = radiusChange;
    this.direction = direction;
    this.Accel = Accel;
    this.ctx = getCanvas();
    }
    // getPosX() {
    //     return this.posX; //klassist andmete kätte saamine
    // }
    // getPosY() {
    //     return this.posY; //klassist andmete kätte saamine
    // }
    // getRadius() {
    //     return this.radius; //klassist andmete kätte saamine
    // }


    move (direction = this.direction) {
        // console.log(this.MoveSpeed);
        
        if (this.MoveSpeed >= this.SpeedLimit) {
      //      console.log(this.MoveSpeed);
            this.radius += this.radiusChange; // radius ei tohi olla negatiivne, siis peksab seghašt!
            this.MoveSpeed += this.Accel;

// console.log(direction);

            if (this.radius < 1) { // paneme raadiuse nulliks kui tahab negatiivseks minna
                this.radius = 0;
            }
            else if (this.direction > 0 && this.direction < 90 || this.direction > 270 && this.direction < 360) {


                this.posY += this.MoveSpeed * Math.sin(this.direction);
                this.posX += this.MoveSpeed * Math.cos(this.direction);
            }
            else if (this.direction > 90 && this.direction < 180 || this.direction > 180 && this.direction < 270) {
                this.posY += this.MoveSpeed * Math.sin(this.direction);
                this.posX += this.MoveSpeed * Math.cos(this.direction);

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
        this.ctx.beginPath();
        this.ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
var getCanvas = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    return ctx;
}
function joonista() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 for (let i = 0; i < wheels.length; i++) {
    
    wheels[i].draw(wheels[i].posX, wheels[i].posY, wheels[i].radius);
    wheels[i].move();
 }

    
    requestAnimationFrame(joonista); // refreshimine jääb seisma kui mujale tab'i peale minna

}
var ctx = getCanvas();
var wheels = [];
for (let i = 0; i < 500; i++) {
    let r = parseInt(10 + Math.random() * 10);
    let x = parseInt(r + Math.random() * (canvas.width - 2 * r)); // et pall tekiks canvase alass on vaja ruudu laius maha lahutada
    let y = parseInt(r + Math.random() * (canvas.height - 2 * r));
    let MoveSpeed = 1.1 + parseInt(Math.random()*10);
    let direction = 360*(Math.random());
    let Accel = Math.random()*0.022;
    let radiusChange = Math.random() * 0.7 - 1;
    wheels.push(new wheel(350, 300, MoveSpeed, 1, r, radiusChange , direction, Accel));
}
// var wheel1 = new wheel(100, 100, 5, 1, 30, 1.1, 270, -0.05);
    for (let index = 0; index < wheels.length; index++) {
        console.log(wheels[index].direction);
    }
        
requestAnimationFrame(joonista);

function time(milliseconds) {
    var millisecond = setTimeout()
}