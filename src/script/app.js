// ES6的语法
import '../style/common.css'
import Layer from './components/layer/layer.js'
const App = function () {
  var dom = document.getElementById('app')
  var layer = new Layer()
  // html模板时
  // dom.innerHTML = layer.tpl
  // tpl模板时
  dom.innerHTML = layer.tpl({
    name: 'Cindy',
    arr:['apple','Orange','banana']
  })
}

new App()