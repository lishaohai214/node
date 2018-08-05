//  看完我的笔记，收获技能
//  1.了解node基础知识，能够安装、配置node环境。
//  2.熟练运用fs模块进行文件操作。
//  3.了解web服务端，工作原理。
//  4.熟练运用http模块和express模块搭建web服务器。
//  5.接收前端通过get\post请求提交的数据。




//  什么是node.js

//  简单的说，node.js就是运行在服务端的JavaScript代码。 
//  我们在学习JavaScript基础的时候，知道，JavaScript可以在浏览器环境中运行，那如果说我们把JavaScript代码放到node.js环境里面运行，这就是我们所说的node.js了。
//  因为node.js的存在,所以能让我们的js代码能够去搭建一些服务器


//  node.js是一个基于Chrome V8引擎的JavaScript运行环境。


//  node.js使用了一个事件驱动、非阻塞式I/O的模型，使其轻量又高效。
//  事件驱动：只有接收到相关代码我们的事件才能够执行的。如果我们要实现事件驱动的话，我们的代码是处在待命的状态。
//  非阻塞式I/O：可以简单的理解为一种异步，在后面会频繁的提到异步的概念，后面会详细的说。



//  node.js中有一个非常重要的东西，叫npm服务器，管理nodejs相关的包的。nodejs在提供相关功能的时候，是以模块的概念来提供的。
//  比如说，我要架设一个http服务器，那么我们就必须先引入http模块，
//  在node的环境中，有的模块是在环境中集成好的，有的模块是需要我们手动下载安装的。
//  那么我们手动下载安装，去找谁去安装呢？
//  我们就去找这个npm服务器去安装，


//  还有一点就是，node.js全面支持es6语法的



//  安装node.js
//  到官网---根据操作系统选择对应的包，安装。

//  安装后验证，cmd中
//  node  -v   
//  如果有node，会提示node的版本号。

//  安装nodejs之后完毕，node会自带集成一个npm包管理器
//  将来要使用express模块，这些，第三方模块的时候，是需要用到npm的

//  如何查看电脑有没有集成到了npm
//  npm  -v    
//  有npm的话，会提示npm版本号
//  npm不需要安装，同样是跟随，node环境的

//  这样，node的安装完毕了！



//  运行node文件的方法
//  方法1：在终端中，进入node文件 所在的  文件夹，使用node+文件名称，即可执行文件。
//  方法2：使用编译器提供的运行工具。（WebStorm、vscode）

// 运行node文件：方法1
//  1.创建一个文件名为node.js的文件，里面输入：
//      console.log('hello node');
//  2.在终端中，进入node.js文件所在的文件夹
//  PS D:\项目文件\vue\nodejs\node练习> node  node.js

//  node  node文件名[.js]     ---运行node.js文件
//  运行node是可以省略文件名的，比如：node  node
//  第一个node是命令，第二个node是我要执行的node的文件名。


//  JavaScript代码工作在node环境下，我们就可以管他叫做node.js


//  方法1，很简单，但是当在各种文件夹下切换的时候呢，会比较麻烦
//  那么就有了方法2，
//  方法2，使用WebStorm、vscode编辑器


//  为什么使用WebStorm、vscode编辑器，而不是使用sublime，Atom。
//  或者说WebStorm、vscode跟其他的编辑器的区别是什么？
//  1.WebStorm、vscode集成了我们的终端环境，
//  2.也就是说，我们可以直接在WebStorm、vscode编辑器里来操作相关的指令，执行我们的js代码
//  3.而且呢，我们不仅可以通过命令来执行js代码，我们还可以通过图形化工具，来执行。



