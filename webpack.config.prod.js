const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/App.jsx',
        // vendor: ['react', 'react-dom', 'whatwg-fetch']
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015'],
                }
            }
        }]
    },
    optimization: {
        splitChunks: {
            chunks: 'initial', // 只对入口文件处理
            cacheGroups: {
                vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /node_modules\//,
                    name: 'static/vendor.bundle',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    plugins: [

    ]
}