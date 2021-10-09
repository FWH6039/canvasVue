function Ball3(w, h, xEnd, yEnd, c) {
    //起始位置
    this.xStart = Math.random() * w;
    this.yStart = Math.random() * h;
    //结束位置
    this.xEnd = xEnd;
    this.yEnd = yEnd;
    //运动次数
    this.times = 100;
    // 计算运动速度
    this.xSpeed = (this.xEnd - this.xStart) / this.times;
    this.ySpeed = (this.yEnd - this.yStart) / this.times;
    //小球运动中的点
    this.x = this.xStart;
    this.y = this.yStart;

    this.r = 3;
    this.color = '#' + parseInt(Math.random() * 0xFFFFFF).toString(16);
    // this.color = '#f00';
    this.c = c;
}
//定义小球显示方法
Ball3.prototype.show = function() {
    //计算每次运动的坐标位置
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.c.beginPath();
    // if (Math.random() > 0.5) {
    //     this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    // } else {
    this.drawText('♥', this.x, this.y)
        // }
    this.c.fillStyle = this.color;
    this.c.fill();

}
Ball3.prototype.drawText = function(text, x, y) {
    this.c.font = '15px 楷体'
    this.c.fillStyle = this.color;
    this.c.textAlign = 'left';
    this.c.textBaseline = 'middle';
    this.c.fillText(text, x, y);
}

export { Ball3 };