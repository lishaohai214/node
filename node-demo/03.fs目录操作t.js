// 1.引入fs模块

var fs = require('fs');

// 2.调用模块下的相关方法

// 1）判断文件是否存在
fs.exists('./hello.txt',function (bol) {
    console.log(bol);
})

// 2)通过相对路径获取绝对路径
// fs.realpath('./hello.txt',function(err,path){
//     if(err){
//         console.error(err);
//     }else{
//         console.log(path);
//     }
// })

// 3)修改文件名
// fs.rename(原文件路径，新文件名，回调函数)
// fs.rename('./newqq.js','./qq.js',function (err) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('修改成功');
//     }
// })