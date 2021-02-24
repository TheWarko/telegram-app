const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/server.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    // module: {
    //     rules: [
    //     {
    //       test: /(\.md|\.map)$/,
    //       loader: 'null'
    //     },
    //     {
    //       test: /\.json$/,
    //       loader: 'json'
    //     },
    //     {
    //       test: /\.js$/,
    //       loader: "transform-loader?brfs"
    //     }
    //   ]
    // }
  };