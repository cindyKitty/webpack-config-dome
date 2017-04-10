var htmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
module.exports = {
	// context: '',//运行环境的上下文，上下文为运行这段脚本的目录
	// entry: './src/script/main.js',// 打包的入口文件
	// output: { // 打包后的文件放在什么地方
	// 	path: './dist/js', // 定义输出文件放置的目录
	// 	filename: 'bundle.js' //　定义打包后的文件名
	// }
	// entry:['./src/script/main.js','./src/script/a.js'],

	// entry: {
 //      main: './src/script/main.js',
 //      a: './src/script/a.js',
 //      b: './src/script/b.js',
 //      c: './src/script/c.js'
	// },
	// output: {
	// 	path:  __dirname + '/dist',
	// 	filename:'js/[name]-[chunkhash].js',
	// 	publicPath: 'http://cdn.com' // 占位符，对该值进行了设置，在HTML引用的js的路径就会以该路径开头的地址
	// },
	// plugins: [
	//   new htmlWebpackPlugin({
	//   	// filename: 'index-[hash].html',
	//   	filename: 'index.html',
	//   	template: 'index.html',
	//   	// inject: 'head', // 指定脚本文件是放在head标签还是body标签
 //        inject:false,
 //        title:'webpack is good',
 //        date: new Date(),
 //        // minify: {// 上线版本对生产的html文件进行压缩
 //        //   removeComments: true, // 删除文件的注释
 //        //   collapseWhitespace:true// 删除空格
 //        // }
	//   }),
	//   new htmlWebpackPlugin ({
	//   	filename:'a.html',
	//   	template:'a.html',
	//   	inject: false,
	//   	title:'this is a.html',
	//   	// chunks:['mian','a'] // 指定生成的html文件包含的脚本文件
	//   	excludeChunks: ['b','c']//用于除指定的chunk外其他的chunk都可以被加载进来
	//   }),
	//   new htmlWebpackPlugin ({
	//   	filename:'b.html',
	//   	template:'template.html',
	//   	inject: 'body',
	//   	title:'this is b.html',
	//   	chunks:['b']
	//   }),
	//   new htmlWebpackPlugin ({
	//   	filename:'c.html',
	//   	template:'template.html',
	//   	inject: 'body',
	//   	title:'this is c.html',
	//   	chunks:['c']
	//   })
	// ]
	entry: './src/script/app.js',// 打包的入口文件
	output: {
	  path: __dirname + '/dist',
	  filename: 'js/[name].bundle.js'
	},
	module: {
		rules: [
		  {
		  	test: /\.js$/,
            loader: "babel-loader",
		  	query: {
		  		presets: ['env']
		  	},
		  	include: [
		  	  path.resolve(__dirname,'src')
		  	],
		  	exclude: /node_modules/
		  },
		  {
		  	test: /\.html$/,
		  	loader: 'html-loader'
		  },
		  {
		  	test: /\.tpl$/,
		  	loader: 'ejs-loader'
		  },
		  {
	        test: /\.css$/,
	        use: [
	          {
                loader:'style-loader'
		      },
		      {
		        loader:'css-loader',// css中通过import进来的文件也经过postcss处理，既参数importLoaders=1表示在css-loader之后指定几个数量的loader来处理import进来的资源的数量
                options: {
                  importLoaders: 1 // importLoaders: That many loaders after the css-loader are used to import resources.
                }
              },
              {
	            loader: 'postcss-loader'
	          }
	        ]
	      },
	      {
	      	test: /\.less$/,
	      	use:[
	      	  'style-loader',
	      	  'css-loader',
	      	  'postcss-loader',
	      	  'less-loader'
	      	]
	      },
	      {
	      	test: /\.sass$/,
	      	use:[
	      	  'style-loader',
	      	  'css-loader',
	      	  'postcss-loader',
	      	  'sass-loader'
	      	]
	      },
	      // // file-loader用于处理项目中的图片文件 
	      // {
	      // 	test: /\.(png|jpg|gif|svg)$/i,
	      // 	loader: 'file-loader',
	      // 	query: {
	      // 	  name: 'assets/[name]-[hash:5].[ext]'
	      // 	}
	      // }
	      /*rul-loader可以处理图片或文件，它可以指定一个limit参数，这个参数用来当文件或图片的大小大于指定的limit后，
            它会直接丢给file-loader去处理，当小于limit后它会将图片或文件转换为base64的编码，不再是一个url,直接变成一段编码
	      */
	      // {
	      // 	test: /\.(png|jpg|gif|svg)$/i,
	      // 	loader: 'url-loader',
	      // 	query: {
	      // 	  limit: 20000,
	      // 	  name: 'assets/[name]-[hash:5].[ext]'
	      // 	}
	      // }
	      // img-loader用于压缩图片，与url-loader配合使用
	      {
	      	test: /\.(png|jpg|gif|svg)$/i,
	      	// loaders: [
	      	//   'url-loader?limit=20000&name=assets/[name]-[hash:5].[ext]',
	      	//   'image-webpack-loader'
	      	// ]
	      	use: [
	      	  {
	      	  	loader: 'url-loader',
	      	  	options: {
	      	  	  limit: 10000,
	      	  	  name: 'assets/[name]-[hash:5].[ext]'
	      	  	}
	      	  },
	      	  {
	      	  	loader: 'img-loader'
	      	  }
	      	]
	      }
		]
	},
	plugins: [
	  new htmlWebpackPlugin ({
	  	filename: 'app.html',
	  	template: 'app.html',
	  	inject: 'body'
	  }),
	  new webpack.LoaderOptionsPlugin({
        options : {
          postcss : function(){
            return [
                require('autoprefixer')({
                    broswers : ['last 5 versions']
                })
            ];
          }
        }
      })
	]
}