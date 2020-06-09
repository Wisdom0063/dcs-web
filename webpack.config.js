const path = require('path');
 module.exports = {
  mode: 'development',
    // define entry file and output
   entry: './src/index.js',
   output: {
       path: path.resolve('dist'),
       filename: 'main.js'
   },
   devServer: {
    contentBase:  path.resolve('dist'),
    compress: true,
    port: 9000
  },
   // define babel loader
   module: {
       rules: [
           { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
           {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
       ]
   }
};