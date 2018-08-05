// 事件

// var EventEmitter = require('events').EventEmitter; 
// var event = new EventEmitter(); 
// event.on('some_event', function() { 
//     console.log('some_event occured.'); 
// }); 
// setTimeout(function() { 
//     event.emit('some_event'); 
// }, 1000); 


// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener1', arg1, arg2); 
// }); 
// emitter.on('someEvent', function(arg1, arg2) { 
//  console.log('listener2', arg1, arg2); 
// }); 
// emitter.emit('someEvent', 'byvoid', 1991);


// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.emit('error'); 


// 以上是事件



// 事件循环

// Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件，如下实例：

// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
// 以下程序绑定事件处理程序：

// // 绑定事件及事件的处理程序
// eventEmitter.on('eventName', eventHandler);
// 我们可以通过程序触发事件：

// // 触发事件
// eventEmitter.emit('eventName');

// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();

// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');
  
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }

// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
 
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });

// // 触发 connection 事件 
// eventEmitter.emit('connection');

// console.log("程序执行完毕。");


// var fs = require("fs");

// fs.readFile('input.txt', function (err, data) {
//    if (err){
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("程序执行完毕");
