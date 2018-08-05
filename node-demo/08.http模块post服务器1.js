// 架设一个post服务器
// 在node里面呢，post跟get其实是没什么区别的。当然啦，在PHP里面是有区别的。
// 其他的都不一样的，唯一不一样的是我们收数据的方式不一样。

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    qs = require('querystring');

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if (urlObj.pathname == '/login1.html') {
        var rs = fs.createReadStream('./login1.html');
        rs.pipe(res);
    }else if(urlObj.pathname == '/login.css'){
        var rs = fs.createReadStream('./login.css');
        rs.pipe(res);
    } else if (urlObj.pathname == '/login') {
        // 获取到post提交的数据
        // console.log(urlObj.query);
        // req 是读取流
        var temp = '';
        req.on('data',function(chunk){
           temp += chunk;
        });

        req.on('end',function(){
            // qs.parse(temp);
            var queryObj = qs.parse(temp);
            console.log(queryObj);
        })
    }
});

server.listen(8888,function(){
    console.log('success');
})