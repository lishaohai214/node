/**
 * 创建http服务器的步骤
 * 1、引入http服务
 * 2、创建http服务
 * 3、监听端口号
 */
var http = require("http");

var server = http.createServer(function(req, res) {
    // 路由:根据用户请求的路径，向用户发送不同的数据、页面

    if(req.url == '/index') {
        res.write('webcom to index');
    } else if(req.url == '/login'){
        res.write('please login');
    }
    res.end();

});

server.listen(8888,function(){
    console.log('load success');
});
