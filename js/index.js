var carouselMap = document.querySelector(".carousel-map");
var Circles = document.querySelectorAll(".circle");
let oCircle =document.querySelector(".circle-list");
var tcontent = document.querySelector(".t-content");

var backTopBtn = document.querySelector('.backTopBtn');


var imgs = ["../assets/images/a.jpg",
"../assets/images/b.jpg",
"../assets/images/c.jpg",
"../assets/images/d.jpg",
"../assets/images/e.jpg","./assets/images/a.jpg"];
// console.log(imgs.length);
for(var i =0;i<imgs.length;i++){
    var img = document.createElement("img");
    img.src=imgs[i];
    carouselMap.appendChild(img);
}
var img = document.querySelector(".carousel-map>img");

//轮播图图片宽度
var imgWidth = img.width*6;
console.log(imgWidth);
//移动到第几张图图片
let index = 0;
//节流锁
let lock = true;
function handleRightBtn(){
    index++;
    carouselMap.style.transition = '0.5s ease';
    if(index ===5 ){
        setTimeout(function(){
            carouselMap.style.left = 0;
            index = 0;
            carouselMap.style.transition = "none"
        },500);
    }
    carouselMap.style.left = -index*imgWidth+"px";
    setCircles();
}
function setCircles(){
    for(let i = 0;i<Circles.length;i++){
        if(i==index%5){
            Circles[i].classList.add("active");
        }else{
            Circles[i].classList.remove("active");
        }
    }
}
oCircle.onclick = function(e){
    if(e.target.nodeName.toLowerCase() == 'li'){
        const n = e.target.getAttribute("data-n");
        const theCircle = document.querySelector(`li[data-n='${n}']`);
        index = n;
        setCircles();
        carouselMap.style.transition = "0.5s ease";
        carouselMap.style.left=-index*imgWidth+"px";
    }
}
let autopplay = setInterval(()=>{handleRightBtn()},2000);
//鼠标悬浮停止轮播
tcontent.onmouseenter = function(){
    clearInterval(autopplay);
}
tcontent.onmouseleave = function(){
    clearInterval(autopplay);
    autopplay=setInterval(()=>{handleRightBtn()},2000)
}


// console.log(index);
    

//回到顶部

let timer = null;
        var isTop = true;
        //获取页面的可视窗口高度
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //滚动条滚动时触发
        window.onscroll = function(){
            //在滚动的时候增加判断
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (osTop == 0) {
                backTopBtn.style.display = 'none';
            }else{
                backTopBtn.style.display = 'block';
            }
            if (!isTop) {
                clearInterval(timer);
            }
            isTop = false;
        };
        backTopBtn.onclick = function(){
           clearInterval(timer)
            timer = setInterval(function(){
               
                var osTop = document.documentElement.scrollTop || document.body.scrollTop; 
                //减小的速度
                var isSpeed = Math.floor(-osTop / 6);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
                //console.log( osTop + isSpeed);
                isTop = true;
            
                if (osTop == 0) {
                    
                    clearInterval(timer);
                }
            },30);  
        };
