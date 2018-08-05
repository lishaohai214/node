// 架设一个get服务器

// 第一步，引入模块
var http = require('http'),
    url = require('url'), //处理请求接口模块
    fs = require('fs');

// 第二步，创建http模块服务
var server = http.createServer(function(req,res){
    // 服务器接收到请求就会触发
    // console.log('服务器已收到请求！');
    // console.log(req.method);
    // parse() 如果传递两个参数，req.url、true;会把接口和接口参数分离开，而且接口参数会转换为对象类型。不写第二个参数，是字符串。
    var urlObj = url.parse(req.url,true);
    // console.log(urlObj);
    // console.log(urlObj.query);
    // console.log(urlObj.pathname);
    // console.log(res);
    if (urlObj.pathname == '/index.html'){
        // 读取index.html文件
        var rs = fs.createReadStream('./index.html');
        // 把取出来的文件写入浏览器（res就是写入流，目的浏览器）
        rs.pipe(res);
    } else if(urlObj.pathname == '/login.html'){
        var rs = fs.createReadStream('./login.html');
        rs.pipe(res);
    } else if(urlObj.pathname == '/login'){
        console.log('get Date');
        console.log(urlObj.query.a);
        console.log(urlObj.query.b);
        if (urlObj.query.a == '123' && urlObj.query.b == '123'){
            // 文件的写入流，调用write()  并且必须要跟服务器断开。
            res.write('<h1>login success</h1>');
            // 断开服务器
            res.end();
        } else {
            // 文件的写入流，调用write()  并且必须要跟服务器断开。
            res.write('login error');
            res.end();
        }
    }
});

// 第三步，监听服务端口
server.listen(8888,function(){
    // 回调函数，服务器启动完毕后触发
    console.log('服务器启动成功！端口8888');
})