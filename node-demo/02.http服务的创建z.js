var http = require('http');

var server = http.createServer(function(req,res){
    console.log("收到请求！")
    // console.log(req.url);
    // console.log(req.method);
    if(req.url == "/index"){
        res.write('Welcom to index');
    } else if(req.url == "/login"){
        res.write('Please to login');
    }
    res.end();
});

server.listen(8888,function(){
    console.log("服务器已经启动！")
})