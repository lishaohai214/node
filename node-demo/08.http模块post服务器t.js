// 架设一个post服务器

// 引入模块
var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    qs = require('querystring');

// 创建http服务
var server = http.createServer(function(req,res){
    // 服务器接收到请求时触发
    console.log('收到请求！')
    var urlObj = url.parse(req.url,true);
    // console.log(urlObj);
    if(urlObj.pathname == '/login1.html'){
        var rs = fs.createReadStream('./login1.html');
        rs.pipe(res);
    }else if(urlObj.pathname == '/login.css'){
        var rs = fs.createReadStream('./login.css');
        rs.pipe(res);
    } else if (urlObj.pathname == '/login') {
        // 获取post数据
        // console.log(urlObj.query);
        // req 是读取流
        req.on('data',function(chunk){
            // console.log(chunk.toString());  //这样子直接是读取不出来的，需要借助querystring插件下的parse()方法
            var queryObj = qs.parse(chunk.toString());
            console.log(queryObj);
            if(queryObj.user == '123' && queryObj.pass == '123'){
                res.write('alert("登录成功！")');
                res.end();
            }else {
                res.write('alert("失败！")');
                res.end();
            }
        })
    }
});

// 监听端口号
server.listen(8888,function(){
    // 服务器启动完毕触发回调函数
    console.log('服务器启动成功！')
})
