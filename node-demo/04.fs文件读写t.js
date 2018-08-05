
// 引入fs模块，fs = file system 文件系统
var fs = require('fs');

// 读操作
// fs.readFile(读取目标文件路径,读取的编码格式,回调函数)
// fs.readFile('./data.txt','utf-8',function(err,date){
//     if(err){
//         console.error(err);
//     } else {
//         console.log(date);
//     }
// })



// 写入操作
// fs.writeFile(文件路径,写入内容,写入控制操作,回调函数)
// fs.writeFile(
//     './data.txt',
//     '7654321',
//     {
//         flag:'a' // 拼接写入
//         // flag:'w' // 覆盖写入，默认
//     },
//     function(err){
//         if(err) {
//           console.error(err)
//         }else {
//             console.log('拼接写入成功！')
//         }
//     }


// )


// 文件拷贝，先读，后写入
// 如果不知道文件类型，千万不要指定文件格式
fs.readFile('./a.png',function(err,date){
    if(err){
        console.error(err);
    } else {
        // 读取出来的数据写入
        fs.writeFile('./a副本2.png',date,function(err){
            if(err){
                console.error(err);
            }else{
                console.log('文件拷贝成功！');
            }
        })
    }
})
