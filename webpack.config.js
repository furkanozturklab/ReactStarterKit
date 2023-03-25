const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node-modules/
        },
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader' ]
        },
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader','postcss-loader'],
        },
    ]
    },
    performance: {
        hints: false
    }
};