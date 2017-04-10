// html模板
// import tpl from './layer.html'

// ejs或tpl模板
import tpl from './layer.tpl'

import './layer.less'

function layer () {
	return {
		name: 'layer',
		tpl: tpl
	}
}

export default layer