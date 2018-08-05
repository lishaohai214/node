// 1.引入fs模块
var fs = require("fs");

// 2.调用模块下的相关方法

// a)判断文件是否存在
// 第一个参数：要判断的文件路径
// 第二个参数：回调函数，在判断结束后触发函数，函数的形参bool布尔类型，有该文件，为true，否则：false。
// fs.exists('./demo.txt',function (bol) {
//     console.log(bol);
// })


// b)
// 通过相对路径获取绝对路径
// 第一个参数：要转换的文件路径
// 第二个参数：回调函数
// fs.realpath('./demo.txt',function(err,path){
//     // 如果转换失败，则err中有值，否则null
//     if(err){
//         console.error(err);
//     }else{
//         console.log(path);
//     }
// })
// 在express模块中用到，向前端发送的时候，要的是必须是绝对路径。

// c)
// 修改文件名
// fs.rename(原文件名路径,新文件名,回调函数)

fs.rename('./demo.txt','./data.txt',function(err){
    // 如果更改成功err没有值
    if (err) {
        console.log(err);
    }else {
        console.log('修改成功！');
    }
})
