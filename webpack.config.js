const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/App.jsx',
        vendor: ['react', 'react-dom', 'whatwg-fetch']
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

        }
    },
    plugins: [

    ],
    devServer: {
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        }
    }
}