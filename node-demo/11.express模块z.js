var express = require('express');
var fs      = require('fs');
var qs      = require('querystring');
var url     = require('url');

var app = express();

app.get('/index.html',function(req,res){
    // res.sendFile(__dirname + '/index.html');
    // http://localhost:8888/index?user=123&pwd=abc
    // Object {user: "123", pwd: "abc"}
    // console.log(req.query);

    // res.send('{"title":"今日头条"}');

    // fs.realpath('./index.html',function(err,data){
    //     res.sendFile(data);
    //     console.log(data);
    // })

    // var path = __dirname + '/index';
    // console.log(path);
    // res.sendFile(path);
    // res.end();


    res.sendFile(__dirname + '/index.html')
});


app.post('/login',function(req,res){
    // post,,express跟http接收数据一样
    // http里面 req:是读取流
    // 在http模块里面 把post字符串转换为对象，用到了第三方插件querystring。
    // 
    req.on('data',function(chunk){
        // console.log(chunk.toString());
        // 获取到参数字符串
        var str = chunk.toString();
        // 把参数字符串转为对象
        var obj = qs.parse(str);
        console.log(obj);

    })
    // var rs = fs.createReadStream();
    // console.log('reseve post request');
    
})



// 向客户端发送登录页面的路由
app.get('/newlogin.html',function(req,res){
    res.sendFile(__dirname + '/newlogin.html');
})
// 通配路由：请求方法通配、请求接口通配
app.all('*',function(req,res){
    // var urlObj =url.parse(req.url,true);
    // // console.log(urlObj.pathname);
    // res.sendFile(__dirname+urlObj.pathname);
    // // 有一个漏洞   
    // 上面可以不需要，url模块也不需要引入了
    // console.log(req.path);
    res.sendFile(__dirname + req.path);


})
app.listen(8888,function(){
    console.log('success!!')
})