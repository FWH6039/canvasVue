function Ball2(x, y, c) {
    this.x = x;
    this.y = y;
    this.r = 60;
    this.color = '#' + parseInt(Math.random() * 0xFFFFFF).toString(16);
    this.c = c;
}
//定义小球显示方法
Ball2.prototype.show = function() {
    this.r -= 5; //半径越来越小
    this.c.beginPath();
    this.c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    this.c.fillStyle = this.color;
    this.c.fill();

}

export { Ball2 };