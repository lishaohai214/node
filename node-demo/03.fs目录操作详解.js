// FS模块详解
    // 目录操作
        // 判断文件是否存在
            // fs.exists(目录名,回调函数)
        // 通过相对路径获取到绝对路径
            // fs.realpath(相对路径,回调函数)
        // 修改文件名
            // fs.rename(源文件路径,新文件名,回调函数)

    // 文件读写
        // 读取文件
            // fs.readFile(读取目标文件路径,读取的编码格式,回调函数)
        // 写入文件
            // fs.writeFile(文件路径,写入内容,写入控制操作,回调函数)
        // 文件复制操作
            // 先读取，后写入
    // 管道流
        // 读文件
            // 创建文件读取流
                // fs.createReadStream()
            // 读取流的data事件
                // 读取流没读取64k文件时，触发该事件，通过该事件函数得到流的内容
            // 读取流的end事件
                // 当读取结束时，触发end事件，在该事件函数中获取到拼接完整的数据
        // 写入文件
            // 创建文件写入流
                // fs.createWriteFile(写入文件的路径,回调函数)
            // 把数据存进写入流的
                // 写入流调用write()
                // 读取流调用pipe()
        // 文件的复制操作
            // 使用stream创建读取流，读取文件var rs = fs.createReadStream('demo1.txt');
            // 使用stream创建写入流，写入文件var ws = fs.createWriteStream('demo1.txt');
            // 读取文件时，每读取64k就触发一次 data事件 rs.on('data',function(chunk){ ws.write(chunk,function(){console.log('写入完毕')}})
            
            // 以上方法中，读写速度不一致时，会导致读取的内容长时间在内存中排队写入，内存还可能爆仓
            // pipe方法读一次，写一次，等写完后再读一次rs.pipe(ws)
            
