const path = require('path');

module.exports = {
    entry: './src/main/js/src/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: path.join(__dirname),
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/, use: ['style-loader', 'css-loader']
            }
        ]
    },
    node: {
        fs: "empty"
    }
};