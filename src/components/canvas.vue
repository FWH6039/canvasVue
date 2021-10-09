<template>
  <div id="canvasBox">
     <!-- 低版本浏览器不兼容 -->
    <canvas width="500px" height="500px" id="canvas">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas2">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas3">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas4">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas5">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas6">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas7">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas8">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas9">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas10">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas11">
      你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <div class="time">
        <canvas width="500px" height="500px" id="canvas12">
        你的浏览器版本过低，请升级浏览器或者用chrome打开！
        </canvas>
    </div>
    <canvas width="500px" height="500px" id="canvas13">
        你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
     <canvas width="500px" height="500px" id="canvas14">
        你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <canvas width="500px" height="500px" id="canvas15">
        你的浏览器版本过低，请升级浏览器或者用chrome打开！
    </canvas>
    <!-- <img :src="imageUrl" alt="" srcset=""> -->
    <!-- [if let IE 6]>
    这是IE6以下版本
  <![endif] -->
  </div>
</template>

<script>
import {Ball} from './canvas.js';
import {Ball2} from './canvas2.js';
import {Ball3} from './canvas3.js';
import imageUrl from '@/assets/logo.png';
import imageUrl2 from '@/assets/456.webp';
import imageUrl3 from '@/assets/123.jpg';
/* 
c.strokeStyle:设置描边色  c.stroke:上色  c.fillStyle:设置填充色  c.fill：上色
//划线
c.beginPath();  c.moveTo(250,0);   c.lineTo(250,500);  c.closePath()
画圆
c.arc()
//渐变
var gradient=c.createLinearGradient(0,0,canvas.width,0)
gradient.addColorStop('0','yellow');
gradient.addColorStop('1.0','red');
c.fillStyle=gradient;
文字
c.textAlign='center';
c.textBaseline='middle';
c.fillText(text,x,y);
//边宽
c.lineWidth=5;
//画矩形//可填充可描边
//无填充矩形
c.strokeRect(100,200,200,200);
//填充矩形
c.fillRect()
//清除画布
clearReact()
//获取像素点
c.getImageData()
//获取像素点
c.putImageData()

*/
export default {
  name: 'Canvas',
  data(){
      return {
          imageUrl
      }
  },
  mounted(){
      this.canvas()
      this.canvas2()
      this.canvas3()
      this.canvas4()
      this.canvas5()
      this.canvas6()
      this.canvas7()
      this.canvas8()
      this.canvas9()
      this.canvas10()
      this.canvas11()
      this.canvas12()
      this.canvas13()
      this.canvas14()
      this.canvas15()
  },
  methods:{
      drawCricle(x,y,r,width,flag,c){
          c.beginPath();
          c.arc(x,y,r,-Math.PI/2,Math.PI/2,flag);
          c.lineWidth=width;
          c.stroke();
      },
      drawCricle2(x,y,r,color,c){
            c.beginPath();
            c.arc(x,y,r,0,Math.PI*2,false);
            c.fillStyle=color||'';
            c.fill();
      },
      //画文字
      drawText(text,x,y,c,canvas,fontWeight){
        c.font=`${fontWeight||400}px 楷体`;
        var gradient=c.createLinearGradient(0,0,canvas.width,0)
        gradient.addColorStop('0','yellow');
        gradient.addColorStop('0.3','blue');
        gradient.addColorStop('0.5','grey');
        gradient.addColorStop('0.7','purple');
        gradient.addColorStop('1.0','red');
        c.textAlign='center';
        c.textBaseline='middle';
        c.fillText(text,x,y);
      },
      canvas15(){
          var canvas=document.getElementById('canvas15');
          var c=canvas.getContext('2d');
          var w=500,h=500;
          //画文字
          this.drawText('❀♥',w/2,h/2,c,canvas,300);
          //获取像素点
          var copy=c.getImageData(0,0,w,h);
          c.clearRect(0,0,w,h)
          //筛选有效像素点h
          var leap=10;
          var ballArr=[];
          for(var y=0;y<h;y+=leap){
            for(var x=0;x<w;x+=leap){
                var index=x+y*w;
                var a=copy.data[index*4+3];
                if(a>128){
                    // this.drawCricle2(x,y,3,'#00f',c)
                    var ball=new Ball3(500,500,x,y,c);
                    ballArr.push(ball);
                    //显示小球
                    ball.show();
                }
            }
          }
          //小球动起来
          var count=0;
          var timer=setInterval(()=>{
              c.clearRect(0,0,w,h)
              count++;
              if(count==99){
                  clearInterval(timer)
              }
              for(var i=0;i<ballArr.length;i++){
                  ballArr[i].show()
              }
          },10)
      },
      canvas14(){
          var canvas=document.getElementById('canvas14');
          var c=canvas.getContext('2d');
          //创建一个图片
          var img=new Image();
          img.src=imageUrl3;
          var that=this;
          img.onload=()=>{
              var width=img.width;
              var height=img.height;
              var dirw=500,dirh=500;
            //   c.drawImage(img,0,0,width,height,0,0,300,500)
              c.drawImage(img,0,0,width,height,0,0,dirw,dirh)
              //R(0--255),G(0--255),B(0--255),A(0--255)0透明，255不透明,
              var imageData=c.getImageData(0,0,dirw,dirh);
              c.clearRect(0,0,dirw,dirh)
              var leap=5;//控制取点间隔
              for(var y=0;y<dirh;y+=leap){
                  for(var x=0;x<dirw;x+=leap){
                      var index=x+y*dirw;//像素索引
                      //获取RGBA值
                    //   var r=imageData.data[index*4+0];
                    //   var g=imageData.data[index*4+1];
                    //   var b=imageData.data[index*4+2];
                      var a=imageData.data[index*4+3];
                      //通过a值过滤掉无效的像素点a?127.5 ~ a<128
                    //   console.log(a)
                      if(a>123){
                          that.drawCricle2(x,y,2,'#f00',c)
                      }
                  }
              }
          }   
      },
      canvas13(){
          var canvas=document.getElementById('canvas13');
          var c=canvas.getContext('2d');
        //   c.fillStyle='#0f0';
        //   c.fillRect(0,0,100,100);

          //创建一个图片
          var img=new Image();
          img.src=imageUrl2;
          img.onload=()=>{
              c.drawImage(img,0,0,300,300,0,0,300,300)
              //R(0--255),G(0--255),B(0--255),A(0--255)0透明，255不透明,
              var imageData=c.getImageData(150,200,200,300);
            //   console.log(imageData)
              //putImageData(img,x|对象左上角x坐标,y|对象左上角y坐标,dirx|水平值x，在画布上的位置,diry|水平值y,在画布上的位置,dirw|宽,dirh|高)
              c.putImageData(imageData,0,350);
          }
          
          
      },
      canvas12(){
            var canvas=document.getElementById('canvas12');
            var c=canvas.getContext('2d');
            // var w=500,h=500,r=180,x=250,y=250,r_hour=60,r_second=140,r_minute=120,r_text=140,r_square=165,r_circle=10,deg=2*Math.PI;
            var w=500,h=500,r=180,r_hour=60,r_second=140,r_minute=120,r_circle=10,r_text=140,r_square=165,deg=2*Math.PI;
            //平移中心点
            c.translate(w/2,h/2)
            setInterval(()=>{
                //画园盘
                this.drawCricle2(0,0,r,'#fff',c);
                //画时钟的表针
                //获取真实时间
                var data=new Date();
                var hour=data.getHours()*(deg/12)-deg/4;//[0-23]
                var minute=data.getMinutes()*(deg/60)-deg/4;//[0-59]
                var second=data.getSeconds()*(deg/60)-deg/4;//[0-59]
                // drawLine(x1,y1,x2,y2,color,width,c)
                // this.drawLine(0,0,r_hour,0,'#000',10,c)
                // this.drawLine(0,0,r_minute,0,'#000',5,c)
                // this.drawLine(0,0,r_second,0,'#f00',2,c)
                this.drawLine(0,0,r_hour*Math.cos(hour),r_hour*Math.sin(hour),'#000',10,c)
                this.drawLine(0,0,r_minute*Math.cos(minute),r_minute*Math.sin(minute),'#000',5,c)
                this.drawLine(0,0,r_second*Math.cos(second),r_second*Math.sin(second),'#f00',2,c)
                //画中心圆
                this.drawCricle2(0,0,r_circle,'#000',c)
                //画数字
                for(var i=1;i<=12;i++){
                    /*
                        计算圆周坐标
                        x=x+r*cos(0)
                        y=y+r*sin(0)
                    */
                var o=((Math.PI*2)/12)*i-Math.PI/2;
                var x=r_text*Math.cos(o);
                var y=r_text*Math.sin(o);
                this.drawText(i,x,y,c,canvas,20)
                }
                //画刻度jj
                for(var j=1;j<=60;j++){
                    /*
                        计算圆周坐标
                        x=x+r*cos(0)
                        y=y+r*sin(0)
                    */
                var o0=((Math.PI*2)/60)*j-Math.PI/2;
                var x1=r*Math.cos(o0);
                var y1=r*Math.sin(o0);
                var x2,y2;
                if(j%5==0){
                    x2=r_square*Math.cos(o0);
                    y2=r_square*Math.sin(o0); 
                    this.drawLine(x1,y1,x2,y2,'#9999',3,c)
                }else{
                    x2=(r_square+5)*Math.cos(o0);
                    y2=(r_square+5)*Math.sin(o0); 
                    this.drawLine(x1,y1,x2,y2,'#aaa',3,c)
                }
                }
            },1000)
            
        },
      canvas11(){
            var canvas=document.getElementById('canvas11');
            var c=canvas.getContext('2d');
            var w=500,h=500;
            var ballArr=[];
            //鼠标滑动事件
            canvas.onmousedown=function(){
                canvas.onmousemove=function(e){
                var ball=new Ball2(e.layerX,e.layerY,c);
                ballArr.push(ball);
                ball.show();
              };
            };
            canvas.onmouseup=function(){
                canvas.onmousemove=null
            };
            // for(var i=0;i<5;i++){
            //     var ball=new Ball2(100+i*8,100+i*10,c);
            //     ballArr.push(ball);
            //     ball.show();
            // }
            
            setInterval(()=>{
                //清除画布
                c.clearRect(0,0,w,h)
                for(var i=0;i<ballArr.length;i++){
                    var ball=ballArr[i];
                    //半径小于0，要从数组中删除
                    if(ball.r <= 0){
                        ballArr.splice(i,1);
                    }else{
                        ball.show();
                    }
                    
                }
            },50)

      },
      canvas10(){
            var canvas=document.getElementById('canvas10');
            var c=canvas.getContext('2d');
            var w=500,h=500;
            var titleArr="javascript HTML5前端 JAVA PHP jQuery CSS CSS3 Bootstrap React Vue ".split(' ');
            // var ball=new Ball(5,3,50,500,500,c);
            // new Ball(Math.random(380)+60,Math.random(380)+60,50,500,500,c).show();
            var ballArr=[];//存放小球
            for(var i=0;i<6;i++){
                var ball=new Ball(Math.random()*380+60,Math.random()*380+60,50,500,500,c,titleArr[i],canvas);
                ballArr.push(ball);
                ball.show2();
                //小球的连线
                for(var j=0;j<i;j++){
                    //取出当前小球前面的小球
                    var prevBall=ballArr[j];
                    // drawLine(x1,y1,x2,y2,color,width,c){
                    this.drawLine(ball.x,ball.y,prevBall.x,prevBall.y,ball.color,'',c)
                }
            }
            setInterval(()=>{
                //清除画布
                c.clearRect(0,0,w,h);
                for(var i=0;i<ballArr.length;i++){
                    var ball=ballArr[i];
                    //更新坐标，显示小球
                    // ball.run();
                    ball.show2();
                     for(var j=0;j<i;j++){
                        //取出当前小球前面的小球
                        var prevBall=ballArr[j];
                        // drawLine(x1,y1,x2,y2,color,width,c){
                        this.drawLine(ball.x,ball.y,prevBall.x,prevBall.y,ball.color,'',c)
                    }
                }
            },20)

      },
      canvas9(){
            var canvas=document.getElementById('canvas9');
            var c=canvas.getContext('2d');
            //图片
            //创建图片
            var img=new Image();
            img.src=imageUrl;
            //onload 图片加载成功之后触发  onerror  图片加载之后触发
            img.onload=function(){
                //获取图片的实际宽高
                // console.log(img.height,img.width)
                //三个参数 图片  x  y
                // c.drawImage(img,100,100)


                //五个参数 图片  x  y  width  height //显示的宽高
                // c.drawImage(img,0,0,500,500)


                //9个参数  图片  sx  sy  swidth  sheight（要裁剪的图片的位置宽高）  x  y  width  height （在画布上的位置宽高）
                c.drawImage(img,0,0,100,100,100,100,200,200)
                
            }


            
            
      },
      canvas8(){
        var canvas=document.getElementById('canvas8');
        var c=canvas.getContext('2d');
        c.font='400px 楷体'
        // c.fillStyle='red';
        // c.strokeStyle='red';
        var gradient=c.createLinearGradient(0,0,canvas.width,0)
        gradient.addColorStop('0','yellow');
        gradient.addColorStop('0.3','blue');
        gradient.addColorStop('0.5','grey');
        gradient.addColorStop('0.7','purple');
        gradient.addColorStop('1.0','red');
        // c.strokeStyle=gradient;
        c.fillStyle=gradient;
        // c.fillText('Hello',150,250)
        // c.strokeText('Hello 胜多负少',100,100,300)//参数： 内容 x  y  最大宽度
        c.beginPath();
        c.moveTo(250,0);
        c.lineTo(250,500);
        c.strokeStyle='green';
        c.stroke();
        c.beginPath();
        c.moveTo(0,250);
        c.lineTo(500,250);
        c.strokeStyle='red';
        c.stroke();
        c.closePath();

        //画虚线
        // this.drawLine(0,0,5,5,'red',1,c)
        // this.drawLine(10,10,15,15,'red',1,c)
        for(var i=0;i<500;i+=10){
            this.drawLine(i+0,i+0,i+5,i+5,'red',1,c)
            this.drawLine(500-i,i,500-(i+5),i+5,'red',1,c)
        }
        //水平文字属性值（textAlign）： start end  left  right  center
        // c.textAlign='end';
        c.textAlign='center';
        //垂直文字属性值（textBaseline）：top  bottom  middle 
        c.textBaseline='middle';
        c.fillText('米',250,250);
        c.setLineDash([10,20]);//内置虚线方法
        this.drawLine(0,100,500,100,'blue',1,c)
      },
      canvas7(){
        var canvas=document.getElementById('canvas7'); 
        var c=canvas.getContext('2d');
        //创建一个小球的数组
        var barrArr=[];
        for(var i=0;i<50;i++){
            var ball=new Ball(5,3,50,500,500,c);
            barrArr.push(ball);
            ball.show();
        }
        //小球运动
        setInterval(()=>{
            //清除画布
            c.clearRect(0,0,500,500);  
            for(var i=0;i<barrArr.length;i++){
                var ball=barrArr[i];
                //更新坐标，显示小球
                // ball.run();
                ball.show();
            }
        },20)
      },
      canvas6(){
        var canvas=document.getElementById('canvas6');
        var c=canvas.getContext('2d');
        var x=100,y=100,r=30,w=500,h=500;
        //水平速度
        var xSpeed = 2 ;
        //垂直速度
        var ySpeed = 3 ;
        setInterval(()=>{
            //清除画布
            c.clearRect(0,0,w,h);
            //小球碰到边缘时，速度取反
            if(x-r <= 0 || x+r >= w){
                xSpeed = -xSpeed;
            }
            if(y-r <= 0 || y+r >= h){
                ySpeed = -ySpeed;
            }
            x=x+xSpeed;
            y=y+ySpeed;
            this.drawCricle2(x,y,r,'gold',c);
        },5)
      },
      canvas5(){
        var canvas=document.getElementById('canvas5');
        var c=canvas.getContext('2d');
        var deg=Math.PI*2/360;
        var count=1;
        var timer=setInterval(()=>{
            count++;
            c.beginPath();
            c.arc(250,250,200,-Math.PI/2,count*deg-Math.PI/2,false)
            c.lineWidth=5;
            c.strokeStyle='#f00';
            c.stroke();
            if(count==360){
                clearInterval(timer);
            }
        },5)
        
        
      },
      canvas4(){
        var canvas=document.getElementById('canvas4');
        var c=canvas.getContext('2d');
        //画杯身
        c.lineWidth=5;
        c.strokeRect(100,200,200,200);
        //画把手
        this.drawCricle(300,300,50,10,false,c);

        //画水雾
        for(var i=0;i<5;i++){
            this.drawCricle(120+i*40,120,20,1,true,c);
            this.drawCricle(120+i*40,160,20,1,false,c);
        }
        

        // this.drawCricle(160,120,20,1,true,c);
        // this.drawCricle(160,160,20,1,false,c);

        // this.drawCricle(200,120,20,1,true,c);
        // this.drawCricle(200,160,20,1,false,c);

        // this.drawCricle(240,120,20,1,true,c);
        // this.drawCricle(240,160,20,1,false,c);
        
        // this.drawCricle(280,120,20,1,true,c);
        // this.drawCricle(280,160,20,1,false,c);
        
      },
      canvas3(){
        var canvas=document.getElementById('canvas3');
        //获取上下文对象
        var c=canvas.getContext('2d');
        c.arc(250,250,100,0,Math.PI*2,false);//参数x,y,半径，起点，终点，顺时针逆时针？
        c.fillStyle='gold';
        c.fill();
        c.lineWidth=10;
        c.strokeStyle='red';
        c.stroke();
        
        c.beginPath();
        c.arc(100,100,100,0,Math.PI,true);
        c.stroke();
        c.beginPath();
        c.arc(300,100,100,0,Math.PI,false);
        c.lineWidth=1;
        c.stroke();

    },
      canvas2(){
        var canvas=document.getElementById('canvas2');
        var c=canvas.getContext('2d');
        
        c.beginPath();
        c.moveTo(100,100);
        c.lineTo(100,400);
        c.lineTo(400,400);
        c.strokeStyle='red';
        c.lineWidth=1;
        c.stroke();
        c.closePath();
        
        //画矩形
        //   c.fillRect(110,200,20,200)
        //   c.fillRect(150,200,20,200)
        //   c.fillRect(200,200,20,200)
        //   c.fillRect(250,200,20,200)
        //   c.fillRect(300,200,20,200)
        //   c.fillRect(350,200,20,200)
        for(var i=0;i<7;i++){
            var height=Math.random()*280+10;
            c.fillStyle='#'+parseInt(Math.random()*0xFFFFFF).toString(16);
            c.fillRect(120+40*i,400-height,20,height)
        }
        //清除一个矩形区域
        c.clearRect(220,220,300,100);//参数  x,y,width,height

      },
      canvas(){
        var canvas=document.getElementById('canvas');
        //获取上下文对象
        var c=canvas.getContext('2d');
        //开启一条路径
        c.beginPath();
        //确定起始点
        c.moveTo(100,100);
        //到哪去，确定结束点//lineTo多次使用
        c.lineTo(100,400);
        c.lineTo(400,100);
        //设置颜色和线宽
        c.strokeStyle='red';
        c.lineWidth=10;
        //进行上色
        c.stroke();
        //关闭路径
        c.closePath();

        this.drawLine(400,400,400,100,'blue',20,c);
        //虚线
        for(var i=0;i<30;i++){
            this.drawLine(100+10*i,100,105+10*i,100,'red',3,c)
        }
        //画矩形
          c.rect(0,0,100,100)
        //填充
        c.fillStyle='green';
        c.fill()
        //描边
        c.strokeStyle='red';
        c.lineWidth='5';
        c.stroke()

        c.strokeStyle='yellow'
        c.strokeRect(200,0,100,100)
        c.fillStyle='pink'
        c.fillRect(400,0,100,100)

        var that=this;
        canvas.onmousedown=function(ev){
                var x1=ev.layerX,y1=ev.layerY;
                canvas.onmousemove=function(e){
                that.drawLine(x1,y1,e.layerX,e.layerY,'red',5,c);
                x1=e.layerX;
                y1=e.layerY;

            };
            };
            canvas.onmouseup=function(){
                canvas.onmousemove=null
            
            };

    },
    drawLine(x1,y1,x2,y2,color,width,c){
      c.beginPath();
      c.moveTo(x1,y1);
      c.lineTo(x2,y2);
      c.strokeStyle=color||'#000';
      c.lineWidth=width||1;
      //让指针头变圆
      c.lineCap='round';//变圆
      c.stroke();
      c.closePath();
    },
    
  }
}
</script>

<style scoped lang="less">
canvas{
    border: 1px solid black;
}
.time{
    width:500px;
    height: 500px;
    margin: 0 auto;
    background-color: rgb(172, 167, 161);
}
</style>
