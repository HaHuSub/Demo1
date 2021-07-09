/**
 * api接口工具
 */

var api = (function () {
    var api = {};
    api.getShopList = getShopList;
    api.getDetail = getDetail;
    api.getSearch = getSearch;
    api.getTypeOne = getTypeOne;
    api.Register = Register;
    api.Login = Login;
    api.Register = Register;
    api.addShopCar = addShopCar;
    api.ShowCar = ShowCar;
    api.addNum = addNum;
    api.removeNum = removeNum;
    api.deleteNum = deleteNum;


    /**
     * 获取商品数据
     * @param {Object} options 请求参数
     * @param {Function} success 请求成功后处理函数
     */
    function getShopList(options, success) {
        REQUEST.get("/goodList", {
            params: options
        }, function (data) {
            success(data)
        })
    }

    /**
     * 获取商品详细信息
     * @param {Object} options 请求参数 
     * @param {Function} success 请求成功后处理函数 
     */
    function getDetail(options, success) {
        REQUEST.get("/detail", {
            params: options
        }, function (data) {
            success(data)
        })
    }

    /**
     * 检索商品列表
     * @param {Object} options  请求参数
     * @param {Function} success 请求成功后执行函数
     */
    function getSearch(options, success) {
        var result = options.hasOwnProperty('word');
        if (!result) {
            throw new Error('option.word is request Params,but you do not have WORD property');
        }

        REQUEST.get("/search", { params: options }, function (data) { success(data) })
    }

    /**
     * 获取推荐商品
     * @param {Function} success 请求成功后执行函数
     */
    function getTypeOne(success) {
        REQUEST.get("/getTypeone", {
            params: {},
        }, function (data) {
            success(data);
        })
    }

    /**
     * 注册接口
     * @param {Object} options 请求参数
     * @param {Function} success 请求成功后执行函数
     */
    function Register(options, success) {
        var res = options.hasOwnProperty('username') && options.hasOwnProperty('password');
        if (!res) {
            throw new Error('you meed to be userName ande password');
        }
        REQUEST.get('/register', {
            params: options,
        }, function (data) {
            success(data);
        })
    }

    /**
     * 登录接口
     * @param {Object} options 请求参数
     * @param {Function} success  请求成功后执行函数
     */
    function Login(options, success) {
        var res = options.hasOwnProperty('username') && options.hasOwnProperty("password");
        if (!res) {
            throw new Error('you meed to be userName ande password')
        }

        REQUEST.get("/login", {
            params: options
        }, function (data) {
            success(data)
        })
    }


    /**
     * 添加购物车
     * @param {Object} options 请求参数 
     * @param {Function} success 请求执行函数
     */
    function addShopCar(options, success) {
        var res = options.hasOwnProperty("username") && options.hasOwnProperty("token") && options.hasOwnProperty('goodId');
        if (!res) {
            throw new Error('you meed to be username ande password and token')
        }
        REQUEST.get("/add", { params: options }, function (data) {
            success(data);
        })
    }

    /**
     * 查看购物车
     * @param {Object} options  请求参数
     * @param {Function} success 请求执行参数 
     */
    function ShowCar(options, success) {
        var res = options.hasOwnProperty("token");
        if (!res) {
            throw new Error("you need to be token");
        }
        REQUEST.get("/shoplist", { params: options }, function (data) { success(data); })
    }

    /**
     * 添加商品数量
     * @param {Object} options  请求参数
     * @param {Function} success 请求执行参数 
     */
    function addNum(options,success){
        var res = options.hasOwnProperty("token");
        if(!res){
            throw new Error("You need to be token");
        }
        REQUEST.get("/add",{params:options},function(data){success(data);})
    }

    /**
     * 减小商品数量
     * @param {Object} options  请求参数
     * @param {Function} success 请求执行参数
     */
    function removeNum(options,success){
        var res = options.hasOwnProperty("token");
        if(!res){
            throw new Error("You need to be token");
        }
        REQUEST.get("/remove",{params:options},function(data){
            success(data);
        })
    }

    /**
     * 删除购物车商品数据
     * @param {Object} options 请求参数
     * @param {Function} success  请求执行函数
     */
    function deleteNum(options,success){
        var res = options.hasOwnProperty("token");
        if(!res){
            throw new Error("You need to be token");
        }
        REQUEST.get("/del",{params:options},function(data){success(data)})
    }
    return api;
})()