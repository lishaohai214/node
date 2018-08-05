var fs = require('fs');
// rs = readstream
// var rs =fs.createReadStream('./a副本.png');

// var count = 1;
// var temp = '';
// rs.on('data',function(chunk){
//     console.log(chunk);
//     console.log(count++);
//     temp+=chunk;
// });

// rs.on('end',function(){
//     console.log(temp);
// });

// var ws = fs.createWriteStream('./helloworld.txt');
// ws.write('一只乌鸦口渴了lelel！');

var rs = fs.createReadStream('./helloworld.txt');
var ws = fs.createWriteStream('./helloworld副本.txt');

// rs.on('data',function(chunk){
//     ws.write(chunk);
// });

rs.pipe(ws);
