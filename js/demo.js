







// var item = document.querySelectorAll('#goodList .item');
// console.log("item",item);
//是商品点击跳转
function linkDetail() {
    var item = document.querySelectorAll('#goodList .item');

    for (let i = 0; i < item.length; i++) {
        (function (i) {
            item[i].onclick = function () {
                var id = item[i].getAttribute('data-id')

                location.href = `./detail.html?goodId=${id}`;
            }
        })(i)
    }
}

var isTop = true;
window.addEventListener("scroll", function () {
    //滚动 视口高度 （当前元素的真实高度）
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    //可见区域高度
    let clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //滚动条顶部到浏览器顶部高度
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollTop);
    // console.log("clientHeight", clientHeight);
    var flag = true;
    var timer = null;





    //滚动条滚动时触发
   
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
   








    

    if (clientHeight + scrollTop >= scrollHeight) {
        if (!false) {
            clearTimeout(timer);
            timer = null;
        }
        flag = false;
        timer = setTimeout(() => {
            page += 1;
            api.getShopList({ page: page }, function (data) {
                let html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `
                <div class="left boxx item" data-id='${data[i].Id}'>
                        <img src="../assets/images/loading.jpg" data-src="${data[i].img_list_url}" alt="">
                        <hr>
                        <p>
                            <span class="good-title">${data[i].title}</span>
                            
                        </p>
                        <div  class="bottom">
                            <div class="left"> 
                            <span>￥${data[i].price}</span>
                        </div>
                        <div class="right">
                            <span>${data[i].mack}</span>
                            </div>
                        </div>
                   </div>`
                }
                // console.log(html);
                goodList.innerHTML += html;
                setTimeout(() => {
                    let ii = document.querySelectorAll(".item img");
                    ii.forEach(function (item, index) {
                        item.src = item.getAttribute("data-src");
                    })
                }, 400)
                linkDetail();

            })
        }, 500)
        setTimeout(() => {
            flag = true; 

        }, 500)
    }

})



//回到顶部
// let backTopBtn = document.querySelector(".backTopBtn")


// let timer = null;
// var isTop = true;
// 获取页面的可视窗口高度
// var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
// 滚动条滚动时触发
// ?


// //轮播图



// console.log(index);

