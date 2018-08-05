var fs = require('fs');

// 创建读取流
// 每读取64k的时候，就调用回调函数

// 读取文件路径
// rs = readstream
// var rs = fs.createReadStream('./a副本.png');
// // 读取数据时，可以通过data事件的事件函数获取读到的结果
// var count = 1;
// var temp = '';
// rs.on('data',function(chunk){
//     // console.log(chunk);
//     // console.log(count++);
//     temp+=chunk;
// });

// // 管道流读取完毕的时候，触发end事件
// rs.on('end',function(){
//     console.log(temp);
// })

//  通过流写入数据
// var ws = fs.createWriteStream('./hello.txt');
// ws.write('一只乌鸦口渴了');


var rs = fs.createReadStream('./hello.txt');
var ws = fs.createWriteStream('./hello副本.txt');
// rs.on('data',function(chunk){
//     ws.write(chunk);
// })


// pipe方法写入数据是，会等当前读出的数据全部写入后，才进行下一次的读取操作。内存利用非常充分，但是读写事件比较长。
rs.pipe(ws);

