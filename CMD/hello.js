require('./world.js')
// 这样的语法是指，引用之前需要通过css-loader的处理
// require('style-loader!css-loader!./style.css')
require('./style.css')

function hello (str) {
	alert(str)
}

hello("hello webpack!!!")
