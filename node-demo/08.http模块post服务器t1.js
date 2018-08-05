// 1.引入模块
var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    qs = require('querystring');

// 创建http服务器
var server = http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == '/login1.html'){
        var rs = fs.createReadStream('./login1.html');
        rs.pipe(res);
    } else if (urlObj.pathname == '/login.css'){
        var rs = fs.createReadStream('./login.css');
        rs.pipe(res);
    } else if (urlObj.pathname == '/login'){
        var temp = '';
        req.on('data',function(chunk){
            temp += chunk;
        });

        req.on('end',function(){
            var queryObj = qs.parse(temp);
            console.log(queryObj);
        })
    }
});

// 监听端口号
server.listen(8888,function(){
    console.log('服务器启动！');
})
