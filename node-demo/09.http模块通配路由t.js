// 搭建一个通配路由

// 搭建服务器三大步骤：
// 1.引入相关模块
// 2.创建http服务器
// 3.监听端口号

var http = require('http'),
    fs = require('fs'),
    url = require('url');

var server = http.createServer(function(req,res){
    // console.log(req.url); // /login.html
    // req.url  是请求相对路径
    
    var urlObj = url.parse(req.url);
    
    // 1.把请求接口转换为路径
    var path = '.' + urlObj.pathname;

    // 2. 同步 判断服务器中是否存在该路径  注意是同步判断同步判断同步判断！！！1
    var bool = fs.existsSync(path);
    if(bool){
        var rs = fs.createReadStream(path);
        rs.pipe(res);
    }
    
});

server.listen(8888,function(){
    console.log('服务器启动成功！端口号：8888');
})
