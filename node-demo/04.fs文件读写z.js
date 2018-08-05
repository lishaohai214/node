var fs = require('fs');

// fs.readFile('./data.txt','utf-8',function(err,date){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(date);
//     }
// })

// fs.writeFile(
//     './demo.txt',
//     'abcdefg',
//     {
//         flag:'a',//表示拼接写入
//         // flag:'w'//表示覆盖写入   默认
//     },
//     function(err){
//         if(err){
//             console.log(err);
//         }else{
//             console.log('写入成功！');
//         }
//     }
// )

fs.readFile('./a.png',function(err,date){
    if(err){
        console.log(err);
    }else{
        fs.writeFile('./a副本z.png',date,function(){
            if(err){
                console.log(err);
            }else{
                console.log('文件拷贝成功！')
            }

        })
    }
})