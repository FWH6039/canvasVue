function Ball(x, y, r, w, h, c, txt, canvas) {
    this.x = Math.random() * x + 60;
    this.y = Math.random() * y + 60;
    this.r = Math.random() * r + 10;
    this.w = w;
    this.h = h;
    this.color = '#' + parseInt(Math.random() * 0xFFFFFF).toString(16);
    this.xSpeed = Math.random() * 3 + 2;
    this.ySpeed = Math.random() * 3 + 1;
    this.c = c;
    this.txt = txt;
    this.canvas = canvas
}
//定义小球显示方法
Ball.prototype.show = function() {
    this.run();
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();

}
Ball.prototype.show2 = function() {
        this.run();
        this.c.beginPath();
        this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        this.c.fillStyle = this.color;
        this.c.fill();
        drawText(this.txt, this.x + this.r, this.y, this.c, this.canvas);
    }
    //定义小球运动方法（碰撞检测）
Ball.prototype.run = function() {
    //小球碰到边缘时，速度取反
    if (this.x - this.r <= 0 || this.x + this.r >= this.w) {
        this.xSpeed = -this.xSpeed;
    }
    if (this.y - this.r <= 0 || this.y + this.r >= this.h) {
        this.ySpeed = -this.ySpeed;
    }
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
    // this.drawCricle2(this.x,this.y,this.r,this.c);
}

function drawText(text, x, y, c, canvas) {
    c.font = '20px 楷体'
    var gradient = c.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop('0', 'yellow');
    gradient.addColorStop('0.3', 'blue');
    gradient.addColorStop('0.5', 'grey');
    gradient.addColorStop('0.7', 'purple');
    gradient.addColorStop('1.0', 'red');
    c.fillStyle = gradient;
    c.textAlign = 'left';
    c.textBaseline = 'middle';
    c.fillText(text, x, y);
}
export { Ball };