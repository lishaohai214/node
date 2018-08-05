
// 如何使用express模块？

// 1.引入模块
    // 跟http里面的一样
// 2.初始化模块
    // 相当http服务里面的创建http服务
    // 就是我们使用http模块来创建一个服务
    // 我们要走三步
    // 1）引入模块2）创建服务3）让这个服务监听端口号

    // 而在使用express模块的时候
    //  
    // 第二步不是创建服务了，而是初始化这个模块
    // 也就是相当于我们http里面的创建服务
// 3.设置路由项目
    // 而第三步呢，是让这个服务监听设置路由
    // 第三步呢是设置路由项目
    // 在我们http模块里面设置路由项目
    // 是在我们创建服务的回调函数里面做
    
    // 它是打包在回调函数里面
    // 

    // 而在这个express模块里面，是直接
    // 把路由条目撂在外面
    // 单独的一步的，
// 4.监听端口
    // 跟http服务的第三步一样
// 1.引入模块
var express = require('express');
var fs = require('fs');
var qs = require('querystring');
var url = require('url');
// 2.初始化模块
    // 这个跟jQuery一样，
    // 它是一个大函数，你只需要让这个express模块执行一下
    // 那么它就会给你返回出来一个对象
var app = express();

// 3.设置路由条目
    // web服务器的核心是什么，核心就是路由条目
    // 其实就是，我们在请求这个路由器，路由器给我们匹配各种各样的路由条目
    // 匹配上这个路由条目之后我们去执行这个路由条目
     
    // express提供了接口
    // 一个是app.get('/',function(req,res){});
    // 一个是app.post('/list',function(req,res){}) 
    // 上面两个接口跟http服务器完全一样，如果你要开辟一个
    // get接口，那么你管get方法要，

    // 架设一个get数据接口
    // app.get()  这个app是谁？就是执行了express()之后的一个返回对象

    // 这个跟http方法不一样，http方法它是可以直接拿模块来调的
    // 但是express不行，express需要拿这个express()运行之后产生的一个对象
    // 来去调用方法
    // express只能由express()产生的对象来调
    // app.get(接口名，回调函数)
        app.get('/index.html',function(req,res){
            // http://localhost:8888/index?user=123&pwd=abc
            // Object {user: "123", pwd: "abc"}
            // console.log(req.query);
            // 获取GET提交的参数：req对象下的query属性值就是一个对象类型的参数值，可以直接访问该对象下的参数属性。

            // res.send('all'); 
            // res.sendFile('页面的绝对路径');

            // 向客户端发送数据：res.send();
            // 必须是严格的json模式
            // res.send('{"title":"今日头条"}');
            // 向客户端发送页面：res.sendFile();

            // 把相对路径转换为绝对路径
            // fs.realpath('./index.html',function(err,data){
            //     res.sendFile(data);
            // __dirname:关键字，代表的是从磁盘根目录到当前项目所在的文件夹的这条路径的字符串；在该关键字后拼接上文件名，就可以获取到该文件的路径。
            // 变量是可以放东西的
            // 关键字，是一个标志位，看见了关键字，就会把标志位转换成什么
            // 开发规范，如果是要发送一个静态页面的话一般是index.html这样的类型的；如果你发送数据的话，一般是/index  没有后缀
            // 这个是接口，跟文件路径的区别

            // var path = __dirname + '/index';
            // // console.log(path);
            // res.sendFile(path);

            res.sendFile(__dirname + '/index.html')
        // });
        });
    // app.get('/login',function(req,res){
    //     res.sendFile(__dirname+'/newlogin.html')
    // })

    // 地址栏发送的请求都是get的请求，不管你有没有参数

    // 发送post请求的方法有两个一个是form表单，一个是ajax 

    // 一条接收post请求的路由
    app.post('/login',function(req,res){
        // post,,express跟http接收数据一样
        // http里面 req:是读取流
        // 在http模块里面 把post字符串转换为对象，用到了第三方插件querystring。
        // 
        req.on('data',function(chunk){
            // console.log(chunk.toString());
            // 获取到参数字符串
            var str = chunk.toString();
            // 把参数字符串转为对象
            var obj = qs.parse(str);
            console.log(obj);

        })
        // var rs = fs.createReadStream();
        // console.log('reseve post request');
        
    })

    // 向客户端发送登录页面的路由
    app.get('/newlogin.html',function(req,res){
        res.sendFile(__dirname + '/newlogin.html');
    })

    // 通配路由：请求方法通配、请求接口通配
    app.all('*',function(req,res){
        // var urlObj =url.parse(req.url,true);
        // // console.log(urlObj.pathname);
        // res.sendFile(__dirname+urlObj.pathname);
        // // 有一个漏洞   
        // 上面可以不需要，url模块也不需要引入了
        // console.log(req.path);
        res.sendFile(__dirname + req.path);


    })
// 4.监听端口
app.listen(8888,function(){
    console.log('success');
})

// express 两个便捷
// 1.直接调一个方法就是一个接口，来一个post方法就是一个post接口
// 架设路由很简洁
// 2.第二个简介就是获取路由参数的时候很简洁
// 像在http服务里面，我要拿到参数，我要借助
// url模块的帮助，才能拿到get参数
// 而在这里，任何模块都不需要参与，只要有express模块就行了
// req下的query天生就是一个对象类型

// 使用express模块在向前端发送页面的时候
// 也要比http要简洁，为什么呢？
// http模块，要想往前端发送页面
// 你得通过管道流把文件读出来
// 读出来之后再写入到res里面去
// 而在express模块里面呢，直接使用res.sendFile(绝对路径)
// 就可以把页面发送到客户端去了，
// 这样是比http简洁的地方之一


// 我们工作的时候都会拿到一份接口文档，
// 我们拿到接口文档的时候，第一件事情就是测试接口文档
// 在移动端中，有专门的测试软件，就不用说了
// 在前端里面，怎么去测试，这个接口文档
// 一般都是，在地址栏里边，拼好，拼好，按回车
// 验证了

// 但是这种方法只能测试get接口
// 测试不了post接口

// 想测试post接口，要么使用浏览器插件，
// 要么自己写ajax去测试
// 浏览器本身是测试不了post接口的

// 有一个好处就是，大部分给前端供应的都是get接口
// 很少给post结构

// express为什么在市面上那么流行
// 前端给后台发一个不存在的页面的时候，服务器不会挂掉
// 而http会挂掉的
// 市面上流行不仅仅是写法简单，更重要的是它的容错性非常强
// 在一些http 模块下，http模块是直接挂掉的
// express模块不会轻易挂掉，一般情况下