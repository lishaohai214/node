// 第一步，引入http模块
var http = require('http');


// 第二步，创建http模块服务
// 只要服务器接收到请求就会触发回调函数
var server = http.createServer(function(req,res){
   if(req.url == '/index'){
       res.write('Welcome index!');
   }
   else if (req.url == '/login'){
       res.write('Please login');
   }
   res.end();
})

// 第三步，监听服务端口
server.listen(8181,function(){
    // 回调函数，服务器启动完毕后触发。
    console.log('服务器启动成功！端口号是：http://localhost:8181');
})