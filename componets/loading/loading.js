var createLoading = (function(){
    var _this; //1._this 为 new Loading 实例的对象
     function createLoading(config){
         var load = new Loading(config);
         load.render().css();
         return load;
     }


     function Loading(config){
         _this=this;
         var defaultConfig = {
             src:'../assets/images/loading.jpg',
             mode:'white'
         }
         this.default = !config?defaultConfig:Object.assign({},defaultConfig,config);
         this.isActive = false;
     }

     //提供一个div
     Loading.prototype.render = function(){
         var body = document.querySelector('body');

         var div = document.createElement("div");
         div.className = 'loading';
         body.appendChild(div);
         this.Loading = div;
         return _this;

     }
     
     //给div设置样式
     Loading.prototype.css = function(){
        var style = {
            display: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            background: `${this.default.mode==='white'?'#eee':'rgba(0,0,0,0.5)'} url(${this.default.src}) 50% no-repeat`,
            backgroundSize: `400px auto`,
            zIndex: '100',
            opacity: '0.95',
        }
        //给div依次中添加样式
        for(let x in style){
            this.Loading.style[x] =style[x];
        }

     }

     /**
      * 展示界面
      * @returns  返回new 实例对象
      */
     Loading.prototype.show = function(){
         var dom = this.loading;
         dom.style.display = 'block';
         _this.isActive = true;
         return _this;
     }

     /**
      * 隐藏
      * @returns 返回new 实例对象
      */
     Loading.prototype.hide = function(){
         this.loading.style.display = 'none';
         _this.isActive = false;
         return _this; 
     }

     //没有就创建 存在就进行显示或隐藏操作
     Loading.prototype.trigger = function(){
         if(_this.isActive){
             _this.loading.style.display = 'none';
             _this.isActive = false;
         }else{
             _this.loading.style.display = 'block';
             _this.isActive =true;
         }
         return _this;
     }
     return createLoading;

})()