var http =require('http'),
    fs = require('fs'),
    url =require('url');

var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url);

    // 1.把请求接口转换为路径
    var path = '.' + urlObj.pathname;
    // 2.同步判断服务器中是否存在该路径，如果存在就把对应的文件发下去
    var bool = fs.existsSync(path);
    if (bool) {
        var rs = fs.createReadStream(path);
        rs.pipe(res);
    }
});

server.listen(8888,function(){
    console.log('success');
})