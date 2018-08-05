var fs = require("fs");

// fs.exists('./data.txt',function (bol){
//     console.log(bol);
// })

// fs.realpath('./data.txt',function(err,path){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(path);
//     }
// })

fs.rename('./newqq.txt','qqnew.txt',function(err){
    if(err){
        console.log(err);
    }else{
        console.log('修改成功！');
    }
})