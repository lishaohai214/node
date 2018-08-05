var http = require('http');
var fs   = require('fs');
var url  = require('url');

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var path = '.' + urlObj.pathname;
    var bool = fs.existsSync(path);
    if(bool){
        var rs = fs.createReadStream(path);
        rs.pipe(res);
    }
}).listen(8888,function(){
    console.log("服务器已经启动");
})