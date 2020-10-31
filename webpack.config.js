const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');




module.exports = {
    mode: "production",
    entry: './src/index.js',
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        // filename: 'main.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|css|html|svg)$/
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',   // Creates `style` nodes from JS strings
                  'css-loader',     // Translates CSS into CommonJS
                  'sass-loader',    // Compiles Sass to CSS
                ],
            },
        ]
    }
};