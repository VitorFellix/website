const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'scripts', 'functions.js'),
    output: {
        filename: 'main.js',
        publicPath: 'dist'
    },  
    module: {  
      rules: [  
        {  
          test: /\.js$/,  
          exclude: /node_modules/,  
          use: {  
            loader: 'babel-loader',  
            options: {  
              presets: ['@babel/preset-env']  
            }  
          }  
        }  
      ]  
    } 
  };