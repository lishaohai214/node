
// 1.引入http服务
var http = require('http');

// 2.创建http服务
var server = http.createServer(function(req,res){
    // 服务器收到请求的时候触发此回调函数
    // console.log('收到请求！');
    // console.log(req.url);
    // console.log(req.method);
    
    // 路由：根据用户请求路径，向用户发送不同的数据、页面 
    if(req.url == '/index.html'){
        res.write('Welcome to index.html');
    } else if (req.url == '/login.html'){
        res.write('Please to login.html');
    }
    // res.end()断开链接
    res.end();

});

// 3.监听端口
server.listen(8888,function(){
    // 回调函数，会在服务器启动完毕后触发
    console.log('服务器，启动完毕！监听地址：http://localhost:8888');
})