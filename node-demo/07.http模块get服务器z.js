var http = require('http');
var url  = require('url');
var fs   = require('fs');

var server = http.createServer(function(req,res){
    // console.log(req.url);
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    if(urlObj.pathname == '/index.html'){
        var rs = fs.createReadStream('./index.html');
        rs.pipe(res);
    }else if(urlObj.pathname == '/login.html'){
        var rs = fs.createReadStream('./login.html');
        rs.pipe(res);
    }else if(urlObj.pathname == '/login'){
        console.log('get Date');
        if(urlObj.query.a == '123' && urlObj.query.b == '123'){
            res.write('helloworld!');
            res.end();
        }else{
            res.write('login error!');
            res.end(); 
        }
        
    }else{
        res.write('login error');
        res.end();
    }
})

server.listen(8888,function(){
    console.log('服务器已经启动！')
})