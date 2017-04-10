# webpack-in-action
## webpack概念
（模块打包器）给js准备的打包工具，可以把很多的模块打包成很少的一些静态文件；webpack的特性是代码分割，使得项目可以按需加载；webpack整个工具里面有个node的概念，模块可以通过loder去处理各种各样的文件，如无论js文件是通过commonjs还是AMD或是ES6模块化方式写的，都可以通过loder进行处理；还可以处理css文件、图片、json等等文件类型
## webpack安装
>1、首先全局安装webpack ，执行命令 npm install webpack -g
2、在执行的目录进行初始化，执行命令： npm init
3、在目录下载入webpack，执行命令： npm install webpack --save-dev
## webpack在命令行中的使用
1、创建一个js ,执行命令： webpack hello.js hello.bundle.js
2、 在js中引入css模块，需要先安装css相关loader，执行命令： npm install css-loader style-loader --save-dev
注： css-loader是用来处理.css后缀的文件；而style-loader通过css-loader处理完的文件，把处理完的文件新建一个style标签，插入到html里面；
除了在.js文件中对引入的css文件前加上require('style-loader!css-loader!./style.css')进行处理，还可以在命令行进行处理，如：
webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'
3、文件更新就自动编译在执行的命令后面加上 --watch ，命令行：webpack hello.js hello.bundle.js --watch
 --watch 热部署
--progress可以看到打包过程
--display-modules 看打包的模块
--display-reasons  为什么打包这个模块的原因输出
