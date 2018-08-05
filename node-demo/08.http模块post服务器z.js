var http = require('http');
var url  = require('url');
var fs   = require('fs');
var qs   = require('querystring');

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    
    if(urlObj.pathname == '/login1.html'){
        var rs = fs.createReadStream('./login1.html');
        rs.pipe(res);
    }else if(urlObj.pathname == '/login.css'){
        var rs = fs.createReadStream('./login.css');
        rs.pipe(res);
    }else if(urlObj.pathname == '/login'){
        // console.log(urlObj.query);
        req.on('data',function(chunk){
            var queryObj = qs.parse(chunk.toString());
            if(queryObj.user == '123' && queryObj.pass == '123'){
                res.write('alert("success")');
                res.end();
            }else{
                res.write('alert("failure")');
                res.end();
            }
        })
    }

});

server.listen(8888,function(){
    console.log("服务器已经成功启动！");
})