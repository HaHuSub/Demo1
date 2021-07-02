
//ajax请求
function axios(config) {
    //初始化构造函数
    //接受默认初始化的数据
    this.default = config;
    //添加网络通信实例：请求和响应 
    this.instarcaptars = {
        request: {},//请求上下文对象
        response: {}//响应的上下文对象
    }

    // config.method = config.method.toUpperCase();
    // if(config.method === 'GET')this.get(config.url,config.data,config.success);
    // if(config.method === 'POST')this.get(config.url,config.data,config.success);
}



axios.prototype.request = function (config) {
    // console.log(config);
    // console.log(`发送了请求，请求类型类型为${config.method}`);
    let xhr = new XMLHttpRequest();
    // console.log(this);
    var url = this.default.baseUrl + config.url;
    // console.log(url);
    if (config.method == 'GET') {
    
        console.log(config.data);
        //如果有params参数 将参数拼接到url地址中 并发送给服务器
        if (config.data) {
           
            var params = config.data;
            url += '?';
            for (var x in params) {
                url+= x + "=" + params[x] + "&";
            }
            url = url.slice(0, -1);
            console.log(url);
        }
        xhr.open("GET", url, true);
        xhr.send()
        
    }

    if (config.method === 'POST') {
      
        var query = "";
        for (var key in data) {
            query += key + "=" + data[key] + "&";
        }
        query = query.slice(0, -1);
        xhr.open(config.method, url, true)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");   //设置请求头
        xhr.send(query);
    }

    // console.log(xhr);
    console.log("dad");

    xhr.onreadystatechange = function () {
       
        this.instarcaptars.response.status = xhr.status;
        this.instarcaptars.response.readyState = xhr.readyState;
       //响应拦截器
        // if(xhr.readyState===3){
        //     this.intanceResponse();
        // }
        if (xhr.readyState === 4 && xhr.status === 200) {
            this.instarcaptars.response.data = JSON.parse(xhr.responseText);
            if (typeof config.success === 'function') {
                config.success(this.instarcaptars.response.data);
            }

        }
    }.bind(this);
    // xhr.onreadystatechange = function(){
    //     console.log(this);//bug 是xhr实例
    //     console.log("dqwe");
    //     this.instarcaptars.response.status = xhr.status;
    //     this.instarcaptars.response.readyState = xhr.readyState;

    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         this.instarcaptars.response.data = xhr.responseText;
    //         console.log(1);
    //         if (config.json) {
    //             console.log(1);
    //             this.instarcaptars.response.data = JSON.parse(xhr.responseText)
    //         }
    //         if (typeof config.success === 'function') {
    //             config.success(this.instarcaptars.response.data);
    //         }
    //     }
    //     // }
    //     //方式三
    // };
    // console.log(this);
    // console.log("dasd");
    //方式1 保存上层函数中的this
    // var _this = this;
    //服务器做出响应的时候触发
    //方式二
    // xhr.onreadystatechage = ()=>{

}

//get方法
axios.prototype.get = function (url, data, success) {
    var config = {
        url: url,
        data: data.params,
        method: "GET",
        success: success
    }

    return this.request(config)
}
//post方法
axios.prototype.post = function (config) {
    return this.request({ method: "POST" })
}
//完成发送请求api 的时候
// var axios = axios.create({baseURL:"",});


//创建一个生产axios实例的函数
function createAxios(config) {
    var context = new axios(config);
    // var intance = axixos.bind(this);
    return context;
}

// //完成
// var a = createAxios({
//     baseUrl: "http://192.168.1.114",
// });

// //"http://192.168.1.114/api/goodList"
// // a.post();

// a.get('/api/goodList', {
//     params: {},//请求参数
// }, function () {
// });

var REQUEST = createAxios({
    baseUrl: "http://49.232.47.192:9527"
})
//客户端发送请求0
//请求在路上1
//服务器接收到请求了，服务器做出响应2
//响应在路上3
//客户收到响应了4