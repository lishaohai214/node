// 架设一个get服务器，

var http = require('http');  //引入http模块
var url  = require('url');   //处理请求接口的模块
var fs   = require('fs');    //filesystem文件系统模块

var server = http.createServer(function(req,res){
    // console.log(req.url);
    // parse() 如果传递两个参数：req.url、true;会把接口和接口参数分离开，而且接口参数会转换为对象类型。
    var urlObj=url.parse(req.url,true);
    console.log(urlObj);
    if(urlObj.pathname == '/index.html'){
        // 读取index.html文件
        var rs = fs.createReadStream('./index.html');
        // 把取出来的文件写入浏览器（res就是写入流，目的地是用户的浏览器）
        rs.pipe(res);
    }else if (urlObj.pathname == '/login.html'){
        // 向前端发送页面
        // 1.读取数据2.写入数据
        var rs = fs.createReadStream('./login.html');
        rs.pipe(res);

    }else if (urlObj.pathname == '/login'){
        // console.log('get Date');
        // console.log(urlObj.query); 
        // console.log(urlObj.query.user);
        // console.log(urlObj.query.pass);
        if (urlObj.query.user == '123' && urlObj.query.pass == '123'){
            // 管道流的写入流调用  write(); 读取流调用pipe()
            // 向前端发送页面(文件)，fs.createReadStream('./login.html').pipe(res);
            // 向前端发送数据，res.write();
            res.write('login success');
            res.end();
        } else {
            res.write('login error');
            res.end();
        }
    }
});

server.listen(8888,function(){
    console.log('success');
});